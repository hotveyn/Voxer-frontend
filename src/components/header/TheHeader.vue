<template>
  <header>
    <div class="container container-header">
      <RouterLink
          class="rt-link"
          :to="{name:'home'}">
        <h1>Voxer</h1>
      </RouterLink>
      <nav>
        <ul>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'home'}"
            >
              Главная
            </RouterLink>
          </li>
          <li>
            <RouterLink
                class="rt-link"
                :to="{name:'profile'}"
            >
              Профиль
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "!/usage.scss";

header {
  padding: 30px 0;
  background-color: $myOrange;
  color: white;
  margin-bottom: 20px;
}


.rt-link {
  color: white;
  font-size: 25px;
}
.container-header {
  @include myFlex();
  h1 {
    font-size: 40px;
  }

  nav {
    ul {
      @include myFlex();
      gap: 20px;
    }
  }
}
</style>