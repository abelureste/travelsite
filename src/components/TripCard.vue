<!-- Recent Trips -->
<script setup>
import Trip from './Trip.vue'

import { defineProps, ref } from 'vue'

const props = defineProps({
  userData: Object,
})

const limit = ref(6)

const viewMore = () => {
  limit.value += 6
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">
      {{ props.userData.name.split(' ')[0] }}'s Travels
    </h3>

    <!-- Travels Grid: 1 col mobile, 2 col tablet, 3 col desktop -->
    <div
      v-if="props.userData.trips.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <Trip
        v-for="trip in props.userData.trips.slice(0, limit || props.userData.trips.length)"
        :key="trip.tripName"
        :trip="trip"
      />
    </div>
    <div v-else class="text-center p-20">No Trips Added</div>
    <div v-if="props.userData.trips.length > limit">
      <button
        @click="viewMore"
        class="block text-center m-auto text-sm border border-gray-100 w-fit py-2 px-4 rounded-3xl mt-6 transition-shadow hover:shadow-md hover:cursor-pointer duration-300"
      >
        View More
      </button>
    </div>
  </div>
</template>
