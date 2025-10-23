<script setup>
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { onMounted, reactive } from 'vue'

import UserCard from '@/components/UserCard.vue'
import BadgesCard from '@/components/BadgesCard.vue'
import FriendsCard from '@/components/FriendsCard.vue'
import UserMapCard from '@/components/UserMapCard.vue'
import TripCard from '@/components/TripCard.vue'

const route = useRoute()
const router = useRouter()

const userId = route.params.id

const data = reactive({
  user: {},
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await fetch(`/api/user/${userId}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    data.user = result
    console.log(result)
  } catch (error) {
    console.error(error.message)
  }
})
</script>

<template>
  <!-- Main content area -->
  <body class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
    <!-- Main grid: 1 column on mobile, 3 columns on desktop (1 for sidebar, 2 for main) -->
    <div class="grid grid-cols-1 lg:grid-cols-8 lg:gap-4">
      <!-- Left column (sidebar) -->
      <div class="lg:col-span-2 space-y-4">
        <UserCard :userData="data.user" v-if="data.user.id" />
        <BadgesCard :userData="data.user" v-if="data.user.id" :limit="6" />
        <FriendsCard :userData="data.user" v-if="data.user.id" />
      </div>

      <!--Right column (main feed)-->
      <div class="lg:col-span-6 space-y-4 mt-8 lg:mt-0">
        <UserMapCard :userData="data.user" v-if="data.user.id" />
        <TripCard :userData="data.user" v-if="data.user.id" />
      </div>
    </div>
  </body>
</template>
