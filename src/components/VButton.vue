<template>
    <button
      @click="$emit('handleClick')"
      :class="`rounded-lg w-full py-4 font-bold ${getVariantStyle()}`"
    >
      {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
import { ButtonVariant } from '@/utils';

const props = defineProps<{
  label: string,
  variant?: ButtonVariant
}>();

function getVariantStyle(): string {
  const buttonVariant = props.variant ?? ButtonVariant.Primary;

  switch (buttonVariant) {
    case ButtonVariant.Primary:
      return 'bg-emerald text-white';
    case ButtonVariant.Secondary:
      return 'bg-gray1';
    case ButtonVariant.Media:
      return 'bg-white text-scarlet';
  }
}
</script>
