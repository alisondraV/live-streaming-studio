<template>
  <div class="inline-flex gap-2">
    <feed-menu-item selected="true" />
    <feed-menu-item coverage="80" />
    <feed-menu-item coverage="60" />
  </div>
</template>

<script lang="ts" setup>
import FeedMenuItem from '@/components/feed/FeedMenuItem.vue';
</script>
