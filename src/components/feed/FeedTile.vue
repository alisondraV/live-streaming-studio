<template>
  <div
    class="relative rounded-lg grid place-items-center bg-no-repeat bg-cover bg-center h-44"
    :style="`background-image: url(${props.img});`"
    style="box-shadow: inset 0 -15px 20px 0 black;"
  >
    <v-button
      label="Show on stream"
      class="w-3/4"
      @handle-click="handleButtonClick"
      :variant="isActiveTile() ? ButtonVariant.Media : ButtonVariant.Primary"
    />
    <p class="text-white absolute bottom-2 left-2">{{ props.text }}</p>
  </div>
</template>

<script lang="ts" setup>
import VButton from '@/components/VButton.vue';
import { ButtonVariant, IFeed } from '@/utils';
import { store } from '@/store';

const props = defineProps<{
  img: string,
  text: string,
  type: keyof IFeed
}>();

function isActiveTile(): boolean {
  return store.currentFeed[props.type] === props.img;
}

function handleButtonClick() {
  if (store.currentFeed[props.type] === props.img) {
    return store.setCurrentFeed({ video: '', screen: '' });
  }
  store.setCurrentFeed({ ...store.currentFeed, [props.type]: props.img });
}
</script>
