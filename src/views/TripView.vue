<script setup>
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'

import UserMapCard from '@/components/UserMapCard.vue'
import TripCard from '@/components/TripCard.vue'

const route = useRoute()
const router = useRouter()

const tripId = route.params.tripId

console.log(tripId)

const data = reactive({
  user: {},
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await fetch(`/api/trips?tripId=${tripId}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()

    console.log(result)
    console.log('Fetch successful')

    if (result.length > 0) {
      data.user = result[0]
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
  <!-- Main content area -->
  <body class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <UserMapCard></UserMapCard>
    <TripCard :userData="data.user" v-if="data.user.user_id"></TripCard>
  </body>
</template>
