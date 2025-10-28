<script setup>
import { PhotoIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <label
    for="trip-image-upload"
    class="block w-full h-64 sm:h-96 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors"
  >
    <div class="flex flex-col items-center justify-center h-full text-center">
      <PhotoIcon class="w-20 text-gray-700"></PhotoIcon>
      <p class="mt-2 font-semibold text-gray-700">Upload a Trip Image</p>
      <p class="text-sm text-gray-500">Click to upload or drag and drop</p>
      <p class="text-xs text-gray-500">PNG, JPG, or GIF (Max 10MB)</p>
    </div>
    <input id="trip-image-upload" type="file" class="sr-only" />
  </label>
</template>
