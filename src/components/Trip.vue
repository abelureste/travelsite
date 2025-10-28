<!-- Individual Trip -->
<script setup>
import { defineProps, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  trip: Object,
})

const tripLength = () => {
  const startDate = new Date(props.trip.tripStartDate)
  const endDate = new Date(props.trip.tripEndDate)

  let timeDifference = endDate - startDate
  timeDifference = timeDifference / (1000 * 3600 * 24)
  return timeDifference
}
</script>

<template>
  <RouterLink
    :to="{ path: `/trip/${props.trip.id}` }"
    class="rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
    href="/trip/:id"
  >
    <img
      class="w-full object-cover rounded-lg"
      :src="props.trip.tripImage"
      alt="Trip Image"
      onerror="this.src='https://placehold.co/400x300/cccccc/333333?text=Image+Error'"
    />
    <div class="p-4">
      <h4 class="text-md font-semibold text-gray-900">{{ props.trip.tripTitle }}</h4>
      <p v-if="props.trip.tripStartDate != props.trip.tripEndDate" class="text-sm text-gray-500">
        {{ tripLength() }} Day Trip
      </p>
      <p v-else class="text-sm text-gray-500">{{ props.trip.tripStartDate }}</p>
      <p class="text-sm text-gray-500">{{ props.trip.tripLocation }}</p>
      <div v-if="props.trip.tripBuddy" class="flex items-center mt-3">
        <img
          class="h-6 w-6 rounded-full mr-2"
          src="https://placehold.co/50x50/FBCFE8/831843?text=F"
          alt="Angela Li"
          onerror="this.src='https://placehold.co/50x50/cccccc/333333?text=User'"
        />
        <span class="text-xs text-gray-600"> Traveled with {{ props.trip.tripBuddy }} </span>
      </div>
    </div>
  </RouterLink>
</template>
