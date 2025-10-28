<script setup>
import { PhotoIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <h2 class="text-2xl font-bold text-gray-900 mb-4">My Itinerary</h2>

  <div class="space-y-4 rounded-lg border border-gray-200 p-4 mb-4 bg-gray-50/50">
    <div class="grid grid-cols-1 md:grid-cols-8 gap-4 items-center">
      <div class="col-span-1 md:col-span-3">
        <label
          for="day-1-image"
          class="block w-full h-48 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 bg-white hover:bg-gray-100 transition-colors"
        >
          <div class="flex flex-col items-center justify-center h-full text-center">
            <PhotoIcon class="w-10 text-gray-700"></PhotoIcon>
            <p class="mt-1 text-sm font-semibold text-gray-600">Add Image</p>
          </div>
          <input id="day-1-image" type="file" class="sr-only" />
        </label>
      </div>

      <div class="col-span-1 md:col-span-5">
        <div>
          <label for="day-1-title" class="block text-sm font-medium text-gray-700">Day Title</label>
          <input
            type="text"
            name="day-1-title"
            id="day-1-title"
            class="mt-1 px-2 py-1 block w-full text-sm font-bold border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div class="mt-4">
          <label for="day-1-description" class="block text-sm font-medium text-gray-700"
            >Day Description</label
          >
          <textarea
            id="day-1-description"
            name="day-1-description"
            rows="4"
            class="block w-full mt-1 px-2 py-1 text-sm text-gray-700 leading-relaxed rounded-md border-gray-300 shadow-sm"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="mt-4 w-full rounded-md border-2 border-dashed border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
    + Add Another Day
  </button>
</template>
