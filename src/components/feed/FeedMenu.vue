<template>
  <div class="inline-flex gap-2">
    <feed-menu-item :size="WebcamImageSize.Full" />
    <feed-menu-item :size="WebcamImageSize.Eighty" />
    <feed-menu-item :size="WebcamImageSize.Sixty" />
  </div>
</template>

<script lang="ts" setup>
import FeedMenuItem from '@/components/feed/FeedMenuItem.vue';
import { WebcamImageSize } from '@/utils';
</script>
