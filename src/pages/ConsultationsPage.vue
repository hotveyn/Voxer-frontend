<template>
  <main>
    <div class="container container-consultation">
      <div
          v-if="isLoading"
          class="loading"
      >
        <p>Загрузка</p>
      </div>
        <div
            v-else
            class="consultations"
        >
          <ConsultationItem
              v-for="consultation in consultations"
              :consultation="consultation"
          />
        </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ConsultationItem from "@/components/consultations/ConsultationItem.vue";
import IConsultation from "@/interfaces/IConsultation";
import {baseFormRequest} from "@/services/baseFormRequest";
import {ref} from "vue";

let consultations = ref<IConsultation[]>();
let isLoading = ref<boolean>(true);

async function getConsultations() {
  const request = new (baseFormRequest as any)("http://127.0.0.1:8000/api/consultations/", "GET", {}, localStorage.getItem("token"));
  let response = await request.goSend();

  if (response.ok) {
    response = await response.json();

    consultations.value = response.data.consultations;
    isLoading.value = false;

    return console.log(response.status);
  }

  return console.log(response.status);

}

getConsultations();
</script>

<style scoped lang="scss">
@import "!/usage.scss";

.container-consultation{
  @include myFlex($jc:center, $ai:center);

  .consultations{
    @include myGrid(1);
    gap: 50px;
  }
}
</style>
