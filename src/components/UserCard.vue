<!-- User profile picture and name -->
<script setup>
import { defineProps } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  userData: Object,
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden h-96 border border-gray-100">
    <div class="relative">
      <!-- Background image -->
      <img
        class="w-full h-50 object-cover"
        :src="props.userData.profileBackground"
        alt="Cityscape background"
        onerror="this.src='https://placehold.co/600x200/cccccc/333333?text=Image+Error'"
      />
      <!-- Profile picture -->
      <img
        class="absolute top-20 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full border-6 border-white"
        :src="props.userData.profilePicture"
        alt="Abel Ureste"
        onerror="this.src='https://placehold.co/150x150/cccccc/333333?text=User'"
      />
    </div>
    <!-- Profile info -->
    <div class="pt-20 pb-6 px-6 text-center">
      <h2 class="text-3xl font-bold text-gray-900">{{ props.userData.name }}</h2>
      <p class="text-lg text-gray-500">@{{ props.userData.username }}</p>
      <div class="flex justify-center">
        <MapPinIcon class="w-5 text-gray-500"></MapPinIcon>
        <p class="text-lg text-gray-500 pl-0.5">{{ props.userData.location }}</p>
      </div>
    </div>
  </div>
</template>
