<template>
  <div
    class="bg-gray1 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer"
    @click="props.handleButtonClick"
  >
    <p class="text-emerald text-5xl">+</p>
    <h1>Add media source</h1>
    <p>Screenshare, Camera</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  handleButtonClick: { type: void, required: true },
}>();
</script>
