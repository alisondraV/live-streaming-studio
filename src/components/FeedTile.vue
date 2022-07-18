<template>
  <div
    class="rounded-lg grid place-items-center shadow-inner bg-cover"
    :style="`background-image: url(${props.img});`"
  >
    <v-button
      label="Show on stream"
      class="w-3/4"
      :variant="isActive ? ButtonVariant.Media : ButtonVariant.Primary"
    />
    <p class="text-white text-left">{{ props.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';

const props = defineProps<{
  img: any,
  text: string,
  isActive?: boolean,
}>();
</script>
