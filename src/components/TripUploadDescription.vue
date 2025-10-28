<script setup></script>

<template>
  <div>
    <label for="tripName" class="block text-sm font-medium text-gray-700">Trip Title</label>
    <input
      type="text"
      name="tripName"
      id="tripName"
      class="mt-1 px-2 py-1 block w-full text-sm font-bold border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>

  <div class="mt-4">
    <label for="tripLocation" class="block text-sm font-medium text-gray-700">Location</label>
    <input
      type="text"
      name="tripLocation"
      id="tripLocation"
      class="mt-1 px-2 py-1 block w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    <div>
      <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        class="mt-1 px-2 py-1 block w-full text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
    <div>
      <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        class="mt-1 px-2 py-1 block w-full text-sm text-gray-700 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  </div>

  <div class="mt-4">
    <label for="companions" class="block text-sm font-medium text-gray-700"
      >Traveled with (optional)</label
    >
    <input
      type="text"
      name="companions"
      id="companions"
      class="mt-1 px-2 py-1 block w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    />
  </div>

  <div class="mt-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-2">Description</h2>
    <label for="description" class="sr-only">Trip Description</label>
    <textarea
      id="description"
      name="description"
      rows="5"
      class="block w-full px-2 py-1 text-sm text-gray-700 leading-relaxed rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      placeholder="Tell everyone about your trip! What was the highlight? Any tips?"
    ></textarea>
  </div>
</template>
