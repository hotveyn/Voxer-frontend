<template>
  <main>
    <div class="container container-login">
      <h2>Авторизация</h2>
      <form>
        <input
            v-model.trim="email"
            class="inp"
            :placeholder="emailPlaceholder"
            type="email"
        >
        <input
            v-model.trim="password"
            class="inp"
            :placeholder="passwordPlaceholder"
            type="password"
        >
        <ButtonForm
            @click.prevent="login()"
        >
          Войти
        </ButtonForm>
      </form>
      <p class="reg">
        У вас ещё нет аккаунта?
        <RouterLink
            class="rt-link"
            :to="{name:'reg'}"
        >
          Зарегестрироваться
        </RouterLink>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import {baseFormRequest} from "@/services/baseFormRequest";
import {ref} from "vue";
import ButtonForm from "@/components/forms/ButtonForm.vue";
import {useRouter} from "vue-router";

const router = useRouter();

let email = ref<string>("blaze58@example.net");
let password = ref<string>("password");

let emailPlaceholder = ref<string>("Email");
let passwordPlaceholder = ref<string>("Пароль");

async function login() {

  if (email.value && password.value) {

    let body = {
      "email": email.value,
      "password": password.value,
    };

    const request = new (baseFormRequest as any)("http://127.0.0.1:8000/api/auth/login", "POST", body);
    let response = await request.goSend();

    if (response.ok) {
      response = await response.json();

      localStorage.setItem("token", response.data.token);
      await router.push({name: "home"});

      return console.log(response.status);
    }

    [email.value, password.value] = "";
    [emailPlaceholder.value, passwordPlaceholder.value] = ["Ошибка авторизации: email", "Ошибка авторизации: пароль"];

    return console.log(response.status);

  } else {
    console.log("заполните все поля");
  }
}
</script>

<style scoped lang="scss">
@import "!/usage.scss";

main {
  @include myFlex($jc: center);
}

.rt-link {
  color: cornflowerblue;
}

.container-login {
  max-width: 400px;
  @include myFlex($fd: column);

  border: 3px solid $myDarkOrange;
  padding: 30px;
  border-radius: 10px;

  h2 {
    margin-bottom: 50px;
  }

  form {
    @include myFlex($fd: column);
    width: 100%;
    gap: 10px;

    .inp {
      width: 100%;
      padding: 10px 15px;
      font-size: 18px;
      border-radius: 5px;
      border: 2px solid $myDarkOrange;
      outline: none;
    }

    .button {
      background-color: $myOrange;
      border: 2px solid $myDarkOrange;
      border-radius: 5px;
      color: white;
      cursor: pointer;
    }
  }

  .reg {
    margin-top: 10px;
    text-align: center;
  }

}
</style>