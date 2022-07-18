<template>
  <div class="bg-gray1 px-6 py-20 text-center rounded-lg cursor-pointer">
    <h1 class="mb-4">{{ props.header }}</h1>
    <p>{{ props.text }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  header: string,
  text: string,
}>();
</script>
