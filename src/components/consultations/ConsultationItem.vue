<template>
<p>Статус - {{ props.consultation.request.status.status }}</p>
</template>

<script setup lang="ts">

import IConsultation from "@/interfaces/IConsultation";

const props = defineProps<{
  consultation: IConsultation
}>();
</script>

<style scoped lang="scss">

</style>