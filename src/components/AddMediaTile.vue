<template>
  <label class="bg-gray1 px-6 py-20 text-center rounded-lg cursor-pointer">
    <input type="file" accept="image/*" @change="onFileSelected" class="hidden">
    <h1 class="mb-4">{{ props.header }}</h1>
    <h6>{{ props.text }}</h6>
  </label>
</template>

<script lang="ts" setup>
import { store } from '@/store';
import { IFeed } from '@/utils';

const props = defineProps<{
  header: string,
  text: string,
  type: keyof IFeed
}>();
const emit = defineEmits(['fileUploaded'])

function onFileSelected(event: any) {
  const file = event.target.files[0];

  let reader = new FileReader();
  reader.onload = logFile;
  reader.readAsDataURL(file);
}

function logFile (event: any) {
  emit('fileUploaded');
  store.setFeed({ ...store.feed, [props.type]: event.target.result });
}
</script>
