<template>
  <div v-if="twoFeedsActive()" class="inline-flex gap-2">
    <feed-layout-item />
  </div>
  <div v-else-if="store.currentFeed.screen || store.currentFeed.video" class="inline-flex gap-2">
    <feed-size-item :size="WebcamImageSize.Full" />
    <feed-size-item :size="WebcamImageSize.Eighty" />
    <feed-size-item :size="WebcamImageSize.Sixty" />
  </div>
</template>

<script lang="ts" setup>
import FeedSizeItem from '@/components/feed/FeedSizeItem.vue';
import FeedLayoutItem from '@/components/feed/FeedLayoutItem.vue';
import { WebcamImageSize } from '@/utils';
import { store } from '@/store';

const twoFeedsActive = () => store.currentFeed.screen !== '' && store.currentFeed.video !== '';
</script>
