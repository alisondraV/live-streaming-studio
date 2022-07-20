<template>
  <div
    class="bg-gray1 flex flex-col justify-center items-center p-6 rounded-lg cursor-pointer"
    @click="$emit('handleButtonClick')"
  >
    <p class="text-emerald text-5xl">+</p>
    <h1 class="text-center py-2">Add media source</h1>
    <h6>Screenshare, Camera</h6>
  </div>
</template>
