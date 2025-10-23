<script setup>
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'

import UserMapCard from '@/components/UserMapCard.vue'
// 1. Import your new component
import TripDetailsCard from '@/components/TripDetailsCard.vue'

const route = useRoute()
const router = useRouter()

const tripId = route.params.tripId

const data = reactive({
  trip: null,
  owner: null,
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await fetch(`/api/trips`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const allUserTrips = await response.json()

    let foundTrip = null
    let tripOwner = null

    for (const user of allUserTrips) {
      if (user.trips && Array.isArray(user.trips)) {
        foundTrip = user.trips.find((trip) => trip.tripId === tripId)
        if (foundTrip) {
          tripOwner = user
          break
        }
      }
    }

    if (foundTrip) {
      data.trip = foundTrip
      data.owner = tripOwner
    } else {
      console.error('Trip not found')
      router.push('/not-found')
    }
  } catch (error) {
    console.error(error.message)
  }
})
</script>

<template>
  <body class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div class="space-y-4">
      <TripDetailsCard
        v-if="data.trip && data.owner"
        :trip="data.trip"
        :owner="data.owner"
      ></TripDetailsCard>
    </div>
  </body>
</template>
