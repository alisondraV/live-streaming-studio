<template>
    <button :class="`rounded-lg w-full py-4 font-bold ${getVariantStyle()}`">
      {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
import { ButtonVariant } from '@/utils';

const props = defineProps<{
  label: string,
  variant?: ButtonVariant
}>();

const variant = props.variant ?? ButtonVariant.Primary;

function getVariantStyle(): string {
  switch (variant) {
    case ButtonVariant.Primary:
      return 'bg-emerald text-white';
    case ButtonVariant.Secondary:
      return 'bg-gray1';
    case ButtonVariant.Media:
      return 'bg-white text-scarlet';
  }
}
</script>
