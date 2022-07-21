<template>
  <div
    class="rounded-xl w-20 h-14 cursor-pointer grid place-content-center"
    :class="isSelected() ? 'border border-pink-500 bg-pink-200' : 'bg-gray-200'"
    @click="store.setSelectedLayout(props.layout)"
  >
    <div
      v-if="props.layout !== FeedLayout.Both"
      class="rounded-lg bg-white flex items-end w-16 h-10"
      :class="getImageLayoutClass(props.layout)"
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
    <div v-else class="flex gap-1 w-16 h-10">
      <div class="rounded-md bg-white w-2/3 h-full" />
      <div
        class="rounded-md w-1/3 h-full grid place-content-center"
        :class="`${isSelected() ? 'bg-white' : 'bg-gray-300'}`"
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
import { FeedLayout, getImageLayoutClass } from '@/utils';

const props = defineProps<{
  layout: FeedLayout,
}>();

function isSelected(): boolean {
  return store.selectedLayout === props.layout;
}
</script>
