<template>
  <div class="flex">
    <div class="h-screen p-4 w-1/5 border-r-2 border-gray2">
      <v-button label="Add source" class="mb-4" />
      <media-import-button />
    </div>
    <div class="h-screen w-full flex justify-center items-center">
      <div class="bg-black w-5/6 h-2/3"></div>
    </div>
  </div>
  <div class="w-full flex justify-center">
    <div class="w-2/5 flex fixed z-10 bottom-0 p-2 border-2 border-b-0 border-gray2 rounded-t-xl">
      <v-button label="Chat" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Record" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Go Live" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';
import MediaImportButton from '@/components/MediaImportButton.vue';
</script>
