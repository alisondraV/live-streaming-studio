<template>
  <div class="w-full flex justify-center">
    <div class="fixed z-10 bottom-0 p-2 border-2 border-b-0 border-gray2 rounded-t-xl">
      <v-button label="Chat" class="mr-2" />
      <v-button label="Record" class="mr-2" />
      <v-button label="Go Live" :variant="liveButtonVariant" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';

const liveButtonVariant = ButtonVariant.Secondary;
</script>
