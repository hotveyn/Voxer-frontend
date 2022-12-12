<template>
  <main>
    <div class="container container-profile">
      <div class="profile">
        <h1>Ваш профиль</h1>
        <div v-if="isLoading">
          Загрузка...
        </div>
        <ProfileInfo v-else/>
        <div class="profile__tools">
          <template
              v-if="userInfo?.type.id !== 1"
          >
              <ButtonForm
                name="consultations"
              >
                Консултанции
              </ButtonForm>

              <template
                  v-if="userInfo?.type.id !== 2"
              >
                <ButtonForm
                    name="regions"
                >
                  Регионы
                </ButtonForm>
                <ButtonForm
                    name="organizations"
                >
                  Организации
                </ButtonForm>
              </template>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonForm from "@/components/forms/ButtonForm.vue";
import ProfileInfo from "@/components/profile/ProfileInfo.vue";
import IUser from "@/interfaces/IUser";
import {baseFormRequest} from "@/services/baseFormRequest.js";
import {onMounted, provide, ref} from "vue";

let userInfo = ref<IUser>();
let isLoading = ref<boolean>(true);

provide("userInfo", userInfo);

async function getUserInfo() {
  const request = new (baseFormRequest as any)
  ("http://127.0.0.1:8000/api/auth/user", "GET", {}, localStorage.getItem("token"));

  let response = await request.goSend();

  if (response.ok) {
    response = await response.json();

    userInfo.value = response.data;
    isLoading.value = false;

    return console.log(response.status);
  }
}

onMounted(()=>{
  getUserInfo();
})

</script>

<style scoped lang="scss">
@import "!/usage.scss";

.container-profile {
  max-width: 600px;

  .profile {
    @include myFlex($jc: center, $ai: start, $fd: column);
    gap: 30px;

    h1 {
      margin-bottom: 50px;
    }
    .profile__tools{
      width: 100%;
      @include myGrid(2);
      gap: 30px;
    }
  }
}
</style>