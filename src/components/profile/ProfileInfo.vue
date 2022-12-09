<template>

  <div class="profile-info">
    <div class="info-item first_name">
      <p>Имя</p>
      <p>{{ userInfo?.first_name }}</p>
    </div>
    <div class="info-item last_name">
      <p>Фамилия</p>
      <p>{{ userInfo?.last_name }}</p>
    </div>
    <div class="info-item email">
      <p>Электронная почта</p>
      <p>{{ userInfo?.email }}</p>
    </div>
    <div class="info-item phone">
      <p>Телефон</p>
      <p>{{ userInfo?.phone }}</p>
    </div>
    <template
        v-if="userInfo?.type.id !== 1"
    >
      <div class="info-item organization">
        <p>Организация</p>
        <p>        {{ userInfo?.organization.name }}
        </p>
      </div>
      <div class="info-item category">
        <p>Категория консультаций</p>
        <p>{{ userInfo?.question_category.name }}</p>
      </div>
    </template>

  </div>
</template>

<script setup lang="ts">

import IUser from "@/interfaces/IUser";
import {inject} from "vue";

const userInfo = inject<IUser>("userInfo")

</script>

<style scoped lang="scss">
@import "!/usage.scss";

.profile-info {
  @include myGrid(1);
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

  .info-item {
    @include myGrid(2);

    p {
      padding: 10px 15px;
      background-color: $myLightOrange;
      outline: 2px solid $myDarkOrange;
    }
  }

}
</style>