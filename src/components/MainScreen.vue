<template>
  <div class="flex">
    <div class="h-screen p-4 w-1/5 border-r-2 border-gray2">
      <media-import-button :handle-button-click="toggleModal" class="mb-4" />
      <feed-tile
        :img="camera"
        text="My video feed"
        class="mb-4"
      />
      <feed-tile
        :img="screenshare"
        text="My screen feed"
        class="mb-4"
      />
    </div>
    <div class="h-screen w-full flex justify-center items-center">
      <feed-screen />
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="w-2/5 flex fixed z-10 bottom-0 p-2 border-2 border-b-0 border-gray2 rounded-t-xl">
      <v-button label="Chat" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Record" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Go Live" />
    </div>
  </div>
  <add-media-modal v-if="isModalOpen" @click="toggleModal" />
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';
import MediaImportButton from '@/components/MediaImportButton.vue';
import { ref } from 'vue';
import AddMediaModal from '@/components/AddMediaModal.vue';
import FeedTile from '@/components/FeedTile.vue';
import camera from '../assets/camera.png';
import screenshare from '../assets/screenshare.png';
import FeedScreen from '@/components/FeedScreen.vue';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
}
</script>
