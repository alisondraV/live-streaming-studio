<template>
  <div class="fixed inset-0 z-40 grid place-items-center shadow-md" @click="$emit('close')">
    <div class="bg-white p-6 rounded-lg w-1/2" @click.stop="">
      <h1 class="mb-4">Add a new media source</h1>
      <div class="flex gap-4">
        <add-media-tile
          @file-uploaded="$emit('close')"
          class="flex-1"
          header="Screenshare"
          text="Share your entire screen, window or a specific Chrome tab"
          type="screen"
        />
        <add-media-tile
          @file-uploaded="$emit('close')"
          class="flex-1"
          header="Video Feed"
          text="Share a feed of your in-built webcam and microphone. If you do not have a webcam,
            you can use a “virtual” webcam such as Streamlabs OBS virtual camera"
          type="video"
        />
      </div>
    </div>
  </div>
  <div class="fixed inset-0 z-30 bg-white bg-opacity-70" />
</template>

<script lang="ts" setup>
import AddMediaTile from '@/components/AddMediaTile.vue';
</script>
