<template>
  <div class="bg-gray1 px-6 py-20 text-center rounded-lg cursor-pointer">
    <h1 class="mb-4">{{ props.header }}</h1>
    <h6>{{ props.text }}</h6>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  header: string,
  text: string,
}>();
</script>
