<script setup>
import { ref, defineProps } from 'vue' // Removed unused imports
import Trip from './Trip.vue'

// Define props: userData (for the title) and the new trips array
const props = defineProps({
  userData: Object,
  trips: Array,
})

// Removed all data fetching logic (onMounted, reactive)

const limit = ref(6)

const viewMore = () => {
  limit.value += 6
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100">
    <h3
      v-if="props.userData && props.userData.name"
      class="text-lg font-semibold text-gray-800 mb-4"
    >
      {{ props.userData.name.split(' ')[0] }}'s Travels
    </h3>
    <h3 v-else class="text-lg font-semibold text-gray-800 mb-4">More Travels</h3>

    <div
      v-if="props.trips && props.trips.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <Trip v-for="trip in props.trips.slice(0, limit)" :key="trip.id" :trip="trip" />
    </div>
    <div v-else class="text-center p-20">No Trips Added</div>

    <div v-if="props.trips && props.trips.length > limit">
      <button
        @click="viewMore"
        class="block text-center m-auto text-sm border border-gray-100 w-fit py-2 px-4 rounded-3xl mt-6 transition-shadow hover:shadow-md hover:cursor-pointer duration-300"
      >
        View More
      </button>
    </div>
  </div>
</template>
