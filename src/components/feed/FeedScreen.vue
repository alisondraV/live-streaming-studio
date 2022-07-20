<template>
  <div class="bg-black w-5/6 h-2/3">
    <img
      v-if="store.currentFeed"
      :src="store.currentFeed"
      alt="Feed"
      class="w-full h-full"
    />
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';
</script>
