<template>
  <div class="consultation">
    <div class="consultation__info">
      <p>Статус - {{ props.consultation.request.status.status }}</p>
      <p>Обсуждаемый вопрос - {{ props.consultation.question.name }}</p>
      <p>Пациент - {{ props.consultation.kid.first_name }} {{ props.consultation.kid.last_name }} </p>
      <p>Желаемая дата - {{ props.consultation.request.need_date }}</p>
      <p>Дата - {{ props.consultation.request.date }}</p>
      <p>Код консультации - {{ props.consultation.review.code }}</p>
    </div>
    <div class="consultation__status">
      <form>
        <label for="status">Cтатус:</label>
        <select
            v-model="selectedStatus"
            name="status"
            id="status"
        >
          <option selected hidden value="NEW">NEW</option>
          <option value="ACCEPT">ACCEPT</option>
          <option value="DECLINED">DECLINED</option>
          <option value="DONE">DONE</option>
        </select>
      </form>
      <ButtonForm
          @click="changeStatus()"
      >
        Поменять
      </ButtonForm>
    </div>
    <StatusInfo
        :status="selectedStatus"
    />
  </div>

</template>

<script setup lang="ts">
import ButtonForm from "@/components/forms/ButtonForm.vue";
import StatusInfo from "@/components/profile/StatusInfo.vue";
import IConsultation from "@/interfaces/IConsultation";
import {baseFormRequest} from "@/services/baseFormRequest";
import {provide, ref, watch} from "vue";

const props = defineProps<{
  consultation: IConsultation
}>();

let date = ref<string | null |  undefined>(props.consultation.request.date);
let reason = ref<string | null |  undefined>(props.consultation.request.reason);
let result = ref<string | null |  undefined>(props.consultation.request.result);

provide("date", date);
provide("reason", reason);
provide("result", result);


let selectedStatus = ref(props.consultation.request.status.status);

watch(selectedStatus, () => {
  reason.value = null;
  date.value = null;
  result.value = null;
});

async function changeStatus() {
  const request = new (baseFormRequest as any)
  (`http://127.0.0.1:8000/api/consultations/consultant/${props.consultation.id}`,
      "PATCH",
      {
        status: selectedStatus.value,
        reason: reason.value,
        date: date.value,
        result: result.value,
      },
      localStorage.getItem("token"),
  );
  let response = await request.goSend();
  if (response.ok) {
    response = await response.json();
    return console.log(response.status);
  }
}


</script>

<style scoped lang="scss">
@import "!/usage.scss";

.consultation {
  @include myFlex();
  position: relative;
  padding: 10px 20px;
  border: 2px solid $myDarkOrange;
  border-radius: 10px;
  min-width: 600px;

  .consultation__status {
    @include myFlex($fd: column);
    gap: 10px;

    form {
      label {
        margin-right: 10px;
      }
    }
  }
}
</style>
