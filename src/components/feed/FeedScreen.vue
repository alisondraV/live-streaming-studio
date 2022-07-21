<template>
  <div
    class="bg-black m-12 flex items-center justify-center"
    style="max-width: 1500px; width: 112vh; height: 63vh;"
  >
    <div
      v-if="twoFeedsActive() && store.selectedLayout !== FeedLayout.Both"
      class="bg-center bg-cover flex items-end w-full h-full"
      :class="getImageLayoutClass(store.selectedLayout)"
      :style="`background-image: url(${store.currentFeed.screen});`"
    >
      <img :src="store.currentFeed.video" class="w-1/4 h-1/4 m-6 object-cover" alt="Feed" />
    </div>
    <div v-else-if="twoFeedsActive()" class="flex w-full h-full items-center">
      <img
        :src="store.currentFeed.screen"
        class="w-2/3 h-4/5 object-cover"
        alt="Feed"
      />
      <img
        :src="store.currentFeed.video"
        class="w-1/3 h-4/5 object-cover"
        alt="Feed"
      />
    </div>
    <img
      v-else-if="store.currentFeed.video || store.currentFeed.screen"
      :src="store.currentFeed.video || store.currentFeed.screen"
      :class="getImageClass()"
      class="object-cover"
      alt="Feed"
    />
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';
import { FeedLayout, WebcamImageSize, getImageLayoutClass } from '@/utils';

const twoFeedsActive = () => store.currentFeed.screen !== '' && store.currentFeed.video !== '';

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
