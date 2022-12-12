<template>
<div
    v-show="props.status !== 'NEW'"
    class="status-info"
>
  {{ props.status }}
  <form
      v-show="props.status === 'ACCEPT'"
      class="status-info__form"
  >
    <input
        v-model="date"
        type="date"
    >
  </form>
  <form
      v-show="props.status === 'DECLINED'"
      class="status-info__form"
  >
    <textarea
        class="status-info__textarea"
        v-model="reason"
    />
  </form>
  <form
      v-show="props.status === 'DONE'"
      class="status-info__form"
  >
    <textarea
        class="status-info__textarea"
        v-model="result"
    />
  </form>
</div>
</template>

<script setup lang="ts">

import {inject} from "vue";

const props = defineProps<{
  status: "NEW" | "ACCEPT" | "DECLINED" | "DONE"
}>();

let date = inject<string>('date');
let reason = inject<string>('reason');
let result = inject<string>('result');
</script>

<style scoped lang="scss">
@import "!/usage.scss";
.status-info{
  @include myFlex($fd:column, $jc:start);
  gap:10px;
  min-width: 200px;
  height: 100%;
  padding: 5px 10px;
  border: 2px solid $myDarkOrange;
  border-radius: 10px;
  position: absolute;
  right: -35%;

  .status-info__textarea{
    resize: none;
    min-height: 80px;
    border: 2px solid $myLightOrange;
    border-radius: 10px;
    outline: none;
    padding: 2px 5px;
    width: 100%;
  }
}
</style>
