<template>
  <div
      class="region"
  >
    <div class="region__info">
      <p class="region__name">
        {{ props.region.name }}
      </p>
<!--      <ButtonForm-->
<!--          @click="deleteRegion()"-->
<!--      >-->
<!--        Удалить-->
<!--      </ButtonForm>-->
      <p
          v-show="isShowErrorText"
          class="error-text"
      >
        Регион содержит компанию
      </p>
    </div>
    <div class="region__rename">
      <input
          v-model.trim="toRenameText"
          placeholder="Переименовать"
          type="text"
      >
      <ButtonForm
          @click="rename()"
      >
        Переименовать
      </ButtonForm>
    </div>

  </div>

</template>

<script setup lang="ts">

import ButtonForm from "@/components/forms/ButtonForm.vue";
import IRegion from "@/interfaces/IRegion";
import {baseFormRequest} from "@/services/baseFormRequest";
import {ref} from "vue";

const props = defineProps<{
  region: IRegion
}>();

let buttonText = ref<string>("Удалить");
let toRenameText = ref<string>("");
let isShowErrorText = ref<boolean>(false);

function warnDisabled() {
  isShowErrorText.value = true;
  setTimeout(() => {
    isShowErrorText.value = false;
  }, 1500);
}

// async function deleteRegion() {
//   const request = new (baseFormRequest as any)(
//       `http://127.0.0.1:8000/api/regions/${props.region.id}`,
//       "DELETE",
//       {},
//       localStorage.getItem("token"));
//
//   let response = await request.goSend();
//
//   if (response.ok) {
//     response = await response.json();
//     return console.log(response.status);
//   }
//
//   response = await response.json();
//   buttonText.value = response.data.error;
//   warnDisabled();
//   return console.log(response.data.error);
// }

async function rename() {
  const request = new (baseFormRequest as any)(
      `http://127.0.0.1:8000/api/regions/${props.region.id}`,
      "PUT",
      {name:toRenameText.value},
      localStorage.getItem("token"));

  let response = await request.goSend();

  if (response.ok){
    response = await response.json()
    return console.log(response.status)
  }

  response = await response.json()
  return console.log(response.status)

}
</script>

<style scoped lang="scss">
@import "!/usage.scss";

.region {
  width: 100%;
  @include myFlex($fd: column, $ai: center);

  gap: 20px;

  .region__info {
    position: relative;
    gap: 30px;
  }

  .region__name {
    font-size: 20px;
  }

  .error-text {
    position: absolute;
    color: red;
    font-size: 15px;
    right: -70%;
    animation: 1s showingErrorText;
  }

  .region__rename {
    @include myGrid(2);
    gap: 10px;

    input {
      padding: 5px 10px;
      font-size: 16px;
    }
  }
}

@keyframes showingErrorText {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>