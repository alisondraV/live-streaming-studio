<template>
  <div
    class="relative rounded-lg grid place-items-center bg-no-repeat bg-cover bg-center h-44"
    :style="`background-image: url(${props.img});`"
    style="box-shadow: inset 0 -15px 20px 0 black;"
  >
    <v-button
      label="Show on stream"
      class="w-3/4"
      :variant="isActive ? ButtonVariant.Media : ButtonVariant.Primary"
    />
    <p class="text-white absolute bottom-2 left-2">{{ props.text }}</p>
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
