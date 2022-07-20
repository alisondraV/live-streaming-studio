<template>
  <div
    class="relative rounded-lg grid place-items-center bg-no-repeat bg-cover bg-center h-44"
    :style="`background-image: url(${props.img});`"
    style="box-shadow: inset 0 -15px 20px 0 black;"
  >
    <v-button
      label="Show on stream"
      class="w-3/4"
      :handle-click="() => store.updateCurrentFeed(img)"
      :variant="isActiveTile() ? ButtonVariant.Media : ButtonVariant.Primary"
    />
    <p class="text-white absolute bottom-2 left-2">{{ props.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant } from '@/utils';
import { store } from '@/store';

const props = defineProps<{
  img: string,
  text: string,
}>();

function isActiveTile(): boolean {
  return store.currentFeed === props.img;
}
</script>
