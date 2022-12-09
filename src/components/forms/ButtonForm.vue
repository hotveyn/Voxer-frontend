<template>
  <button
      @click.prevent="redirect()"
      type="submit"
      class="button"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";

const props = defineProps<{
  name?: string
}>();

const router = useRouter();

function redirect(){
  if(props.name) router.push({name: props.name});
}

</script>

<style scoped lang="scss">
@import "!/usage.scss";

.button {
  background-color: $myOrange;
  border: 2px solid $myDarkOrange;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 100%;
  padding: 10px 15px;
  font-size: 18px;
}
</style>