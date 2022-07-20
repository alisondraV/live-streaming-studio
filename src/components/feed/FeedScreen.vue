<template>
  <div
    class="bg-black m-12 flex items-center justify-center"
    style="max-width: 1500px; width: 112vh; height: 63vh;"
  >
    <img
      v-if="store.currentFeed"
      :src="store.currentFeed"
      :class="getImageClass()"
      alt="Feed"
    />
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';

function getImageClass(): string {
  switch (store.webcamImageSize) {
    case '80':
      return 'w-4/5';
    case '60':
      return 'w-3/5';
    default:
      return 'w-full h-full';
  }
}
</script>
