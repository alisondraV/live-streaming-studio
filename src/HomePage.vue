<template>
  <div class="flex">
    <div class="h-screen p-4 w-1/5 border-r-2 border-gray2">
      <v-button label="Add source" @handle-click="toggleModal" class="mb-4" />
      <media-import-button
        v-if="!store.feed.video && !store.feed.screen"
        @handle-button-click="toggleModal"
        class="mb-4"
      />
      <feed-tile
        v-if="store.feed.video"
        :img="store.feed.video"
        text="My video feed"
        class="mb-4"
        type="video"
      />
      <feed-tile
        v-if="store.feed.screen"
        :img="store.feed.screen"
        text="My screen feed"
        class="mb-4"
        type="screen"
      />
    </div>
    <div class="h-screen w-full flex flex-col justify-center items-center">
      <stream-canvas />
      <feed-menu class="-mt-8" />
    </div>
  </div>
  <div class="w-full flex justify-center bg-white">
    <div class="w-2/5 flex fixed z-10 bottom-0 p-2 border-2 border-b-0 border-gray2 rounded-t-xl">
      <v-button label="Chat" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Record" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Go Live" />
    </div>
  </div>
  <add-media-modal v-if="isModalOpen" @close="toggleModal" />
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';
import MediaImportButton from '@/components/MediaImportButton.vue';
import { ref } from 'vue';
import AddMediaModal from '@/components/AddMediaModal.vue';
import FeedTile from '@/components/feed/FeedTile.vue';
import StreamCanvas from '@/components/feed/StreamCanvas.vue';
import FeedMenu from '@/components/feed/FeedMenu.vue';
import { store } from '@/store';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
}
</script>
