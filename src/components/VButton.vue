<template>
    <button :class="`rounded-lg w-52 py-4 font-bold
      ${getVariant === ButtonVariant.Primary ? 'bg-gray1' : 'bg-emerald text-white'}`">
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
