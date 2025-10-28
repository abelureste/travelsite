<script setup>
import TripUploadImage from './TripUploadImage.vue'
import TripUploadDescription from './TripUploadDescription.vue'
import TripUploadDayCard from './TripUploadDayCard.vue'
</script>

<template>
  <form>
    <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100">
      <TripUploadImage />

      <div class="p-0 pt-6 sm:p-6">
        <TripUploadDescription />

        <div class="mt-8">
          <TripUploadDayCard></TripUploadDayCard>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-4">
          <button
            type="button"
            class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
