<template>
    <button :class="`rounded-lg w-full py-4 font-bold
      ${getVariant === ButtonVariant.Primary ? 'bg-emerald text-white' : 'bg-gray1'}`"
    >
      {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
import { ButtonVariant } from '@/utils';

const props = defineProps<{
  label: { type: string, required: true },
  variant?: ButtonVariant
}>();

const getVariant = props.variant ?? ButtonVariant.Primary
</script>
