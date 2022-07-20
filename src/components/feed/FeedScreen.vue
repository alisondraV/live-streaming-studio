<template>
  <div
    class="bg-black m-12 mb-0 flex items-center justify-center"
    style="max-width: 1500px; width: 112vh; height: 63vh;"
  >
    <img
      v-if="store.currentFeed.video || store.currentFeed.screen"
      :src="store.currentFeed.video || store.currentFeed.screen"
      :class="getImageClass()"
      alt="Feed"
    />
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';
import { WebcamImageSize } from '@/utils';

function getImageClass(): string {
  switch (store.webcamImageSize) {
    case WebcamImageSize.Full:
      return 'w-full h-full';
    case WebcamImageSize.Eighty:
      return 'w-4/5 h-4/5';
    case WebcamImageSize.Sixty:
      return 'w-3/5 h-3/5';
  }
}
</script>
