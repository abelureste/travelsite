<script setup>
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { onMounted, reactive, watchEffect, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'

import TripDetailsCard from '@/components/TripDetailsCard.vue'

const route = useRoute()
const router = useRouter()

const tripId = route.params.tripId

const {
  data: tripsData,
  error: tripsError,
  isLoading: tripsIsLoading,
} = useFetch(`/api/trips?id=${tripId}`)

const userUrl = computed(() => {
  if (tripsData.value && tripsData.value.length > 0) {
    const userId = tripsData.value[0].user_id
    return `/api/user?user_id=${userId}`
  }
  return null
})

const { data: userData, error: userError, isLoading: userIsLoading } = useFetch(userUrl)

watchEffect(() => {
  if (userError.value) {
    console.error(userError.value.message)
    router.push('/not-found')
  }
  if (userData.value && userData.value.length === 0) {
    console.error('User not found')
    router.push('/not-found')
  }
  if (tripsError.value) {
    console.error('Could not load trips:', tripsError.value.message)
  }
})
</script>

<template>
  <div v-if="tripsIsLoading">Loading...</div>
  <div v-else-if="userIsLoading">Loading...</div>
  <body v-else class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div class="space-y-4">
      <TripDetailsCard
        v-if="tripsData[0]"
        :trip="tripsData[0]"
        :user="userData[0]"
      ></TripDetailsCard>
    </div>
  </body>
</template>
