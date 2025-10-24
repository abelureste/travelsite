<script setup>
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { computed, watchEffect } from 'vue'
import { useFetch } from '@/composables/useFetch.js'

import UserCard from '@/components/UserCard.vue'
import BadgesCard from '@/components/BadgesCard.vue'
import FriendsCard from '@/components/FriendsCard.vue'
import UserMapCard from '@/components/UserMapCard.vue'
import TripCard from '@/components/TripCard.vue'

const route = useRoute()
const router = useRouter()

const username = route.params.username

const {
  data: userData,
  error: userError,
  isLoading: userIsLoading,
} = useFetch(`/api/user?username=${username}`)

const tripsUrl = computed(() => {
  if (userData.value && userData.value.length > 0) {
    const userId = userData.value[0].user_id
    return `/api/trips?user_id=${userId}`
  }
  return null
})

const { data: tripsData, error: tripsError, isLoading: tripsIsLoading } = useFetch(tripsUrl)

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
  <body class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <div v-if="userIsLoading">Loading profile...</div>

    <div v-else-if="userError">Error loading profile: {{ userError.message }}</div>

    <div
      v-else-if="userData && userData.length > 0"
      class="grid grid-cols-1 lg:grid-cols-8 lg:gap-4"
    >
      <div class="lg:col-span-2 space-y-4">
        <UserCard :userData="userData[0]" />
        <BadgesCard :userData="userData[0]" />
        <FriendsCard :userData="userData[0]" />
      </div>

      <div class="lg:col-span-6 space-y-4 mt-8 lg:mt-0">
        <UserMapCard :userData="userData[0]" />

        <div v-if="tripsIsLoading">Loading trips...</div>

        <div v-else-if="tripsError">Could not load trips.</div>

        <TripCard v-else :userData="userData[0]" :trips="tripsData" />
      </div>
    </div>
  </body>
</template>
