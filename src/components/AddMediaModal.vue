<template>
  <div>
    <div class="fixed inset-0 z-50 h-full w-full grid place-items-center shadow-2xl">
      <div class="bg-white p-6 rounded-lg w-1/2">
        <h1 class="mb-4">Add a new media source</h1>
        <div class="flex gap-4">
          <add-media-tile
            class="flex-1"
            header="Screenshare"
            text="Share your entire screen, window or a specific Chrome tab"
          />
          <add-media-tile
            class="flex-1"
            header="Video Feed"
            text="Share a feed of your in-built webcam and microphone. If you do not have a webcam,
              you can use a “virtual” webcam such as Streamlabs OBS virtual camera"
          />
        </div>
      </div>
    </div>
    <div class='fixed inset-0 z-40 bg-white bg-opacity-70' />
  </div>
</template>

<script lang="ts" setup>
import AddMediaTile from '@/components/AddMediaTile.vue';
</script>
