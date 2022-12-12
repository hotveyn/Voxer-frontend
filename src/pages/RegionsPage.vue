<template>
  <main>
    <div class="container container-region">
      <h2>Регионы</h2>
      <div
          v-if="isLoading"
          class="loading"
      >
        <p>Загрузка...</p>
      </div>
      <div
          v-else
          class="regions"
      >
        <template
            v-for="region in regions"
            :key="region.id"
        >
          <RegionItem

              :region="region"
          />
          <ButtonForm
              @click="deleteRegion(region.id)"
          >
            Удалить
          </ButtonForm>
          <ButtonForm
              @click=""
          >
            Организации регоина
          </ButtonForm>
        </template>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonForm from "@/components/forms/ButtonForm.vue";
import RegionItem from "@/components/region/RegionItem.vue";
import IRegion from "@/interfaces/IRegion";
import {baseFormRequest} from "@/services/baseFormRequest";
import {ref} from "vue";

let regions = ref<IRegion[]>([]);
let isLoading = ref<boolean>(true);


async function getRegions() {
  const request = new (baseFormRequest as any)("http://127.0.0.1:8000/api/regions", "GET");

  let response = await request.goSend();

  if (response.ok) {
    response = await response.json();
    regions.value = response.data;
    isLoading.value = false;
    return console.log(response.status);
  }

  response = await response.json();
  return console.log(response.status);
}

getRegions();

async function deleteRegion(id:number){
  const request = new (baseFormRequest as any)(
      `http://127.0.0.1:8000/api/regions/${id}`,
      "DELETE",
      {},
      localStorage.getItem("token"));

  let response = await request.goSend();

  if (response.ok) {
    response = await response.json();
    regions.value = regions.value.filter((region)=>{
      return region.id !== id;
    });
    return console.log(response.status);
  }

  response = await response.json();
  return console.log(response.data.error);
}
</script>

<style scoped lang="scss">
@import "!/usage.scss";

.container-region {
  max-width: 500px;

  .regions{
    margin-top: 30px;
    @include myFlex($fd:column, $jc:start,$ai:start);
    gap: 30px;
  }
}
</style>