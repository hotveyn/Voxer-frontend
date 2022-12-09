<template>
<footer>
  <div class="container">
    <h1>Voxer</h1>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{name:'home'}">
            Главная
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>

</footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "!/usage.scss";
footer{

}
</style>