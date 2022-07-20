<template>
  <div
    class="rounded-xl w-20 h-14 cursor-pointer grid place-content-center"
    :class="props.selected ? 'border border-pink-500 bg-pink-200' : 'bg-gray-200'"
  >
    <div
      class="rounded-lg bg-white grid place-content-center"
      :class="`${props.selected ? 'bg-white' : 'bg-gray-300'} ${getItemStyle()}`"
    >
      <font-awesome-icon
        icon="fa-solid fa-user"
        :class="props.selected ? 'text-pink-500' : 'text-gray-400'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  selected?: boolean,
  coverage?: string,
}>();

function getItemStyle(): string {
  switch (props.coverage) {
    case '80':
      return 'w-14 h-8';
    case '60':
      return 'w-12 h-7';
    default:
      return 'w-16 h-10';
  }
}
</script>
