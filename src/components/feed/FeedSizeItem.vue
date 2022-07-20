<template>
  <div
    class="rounded-xl w-20 h-14 cursor-pointer grid place-content-center"
    :class="isSelected() ? 'border border-pink-500 bg-pink-200' : 'bg-gray-200'"
    @click="store.setWebcamImageSize(props.size)"
  >
    <div
      class="rounded-lg bg-white grid place-content-center"
      :class="`${isSelected() ? 'bg-white' : 'bg-gray-300'} ${getItemStyle()}`"
    >
      <font-awesome-icon
        icon="fa-solid fa-user"
        :class="isSelected() ? 'text-pink-500' : 'text-gray-400'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';
import { WebcamImageSize } from '@/utils';

const props = defineProps<{
  size: WebcamImageSize,
}>();

function isSelected(): boolean {
  return store.webcamImageSize === props.size;
}

function getItemStyle(): string {
  switch (props.size) {
    case WebcamImageSize.Full:
      return 'w-18 h-12';
    case WebcamImageSize.Eighty:
      return 'w-14 h-10';
    case WebcamImageSize.Sixty:
      return 'w-12 h-9';
  }
}
</script>
