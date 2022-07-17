<template>
  <div class="w-full flex justify-center">
    <div class="fixed z-10 bottom-0 p-2 border-2 border-b-0 border-gray2 rounded-t-xl">
      <v-button label="Chat" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Record" class="mr-2" :variant="ButtonVariant.Secondary" />
      <v-button label="Go Live" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';
</script>
