<template>
  <div
    class="rounded-xl w-20 h-14 cursor-pointer grid place-content-center"
    :class="isSelected() ? 'border border-pink-500 bg-pink-200' : 'bg-gray-200'"
  >
    <div
      class="rounded-lg bg-white flex justify-end items-end w-16 h-10"
      :class="`${isSelected() ? 'bg-white' : 'bg-gray-300'}}`"
    >
      <div
        class="rounded-md bg-white grid place-content-center m-1 py-1 px-2"
        :class="`${isSelected() ? 'bg-white border border-pink-500' : 'bg-gray-300'}`"
      >
        <font-awesome-icon
          icon="fa-solid fa-user"
          class="text-xs"
          :class="isSelected() ? 'text-pink-500' : 'text-gray-400'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { store } from '@/store';

function isSelected(): boolean {
  return true;
  // return store.webcamImageSize === props.size;
}
</script>
