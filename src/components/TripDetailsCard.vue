<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

// This component expects the specific trip object and its owner
const props = defineProps({
  trip: Object,
  owner: Object,
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-100">
    <img
      class="w-full h-140 object-cover rounded-lg"
      src="https://placehold.co/800x400/A3E635/333333?text=Trip+Image"
      alt="Trip Image"
      onerror="this.src='https://placehold.co/800x400/cccccc/333333?text=Image+Error'"
    />
    <div class="p-6">
      <h1 class="text-3xl font-bold text-gray-900">{{ props.trip.tripName }}</h1>
      <p class="text-sm text-gray-500 mt-1">{{ props.trip.tripLocation }}</p>
      <p class="text-sm text-gray-500 mt-1">July 2nd - July 10th, 2025</p>

      <div class="flex justify-between items-center mt-5">
        <div class="flex items-center">
          <img
            class="w-11 h-11 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile picture of Abel Ureste"
          />
          <div class="ml-3">
            <p class="font-semibold text-gray-800">{{ props.owner.username }}</p>
            <p class="text-sm text-gray-500">Updated July 11th, 2023</p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-500 mb-1">Traveled with</p>
          <div class="flex -space-x-2">
            <img
              class="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Friend 1"
            />
            <img
              class="w-8 h-8 rounded-full border-2 border-white object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Friend 2"
            />
          </div>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Description</h2>
        <p class="text-gray-700 leading-relaxed line-clamp-3">
          Staying in Athens and looking to visit a Greek island? Aegina is an excellent option! With
          only an hour ferry ride, you will arrive on the island and find luxurious pistachios,
          crystal clear beaches, and ancient temples! This is a comprehensive guide with everything
          you will need to plan your trip, from tickets and transportation to food and activities!
        </p>
      </div>

      <div class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">My Trip</h2>
        <div class="grid grid-cols-8">
          <img src="https://placehold.co/400x500/A3E635/333333?text=Trip+Image" class="object-fill col-span-3 rounded-lg">
          </img>
          <div class="col-span-5 p-4">
            <h2 class="text-2xl font-bold text-gray-900 mb-2 pt-20">Day 1</h2>
            <p class="text-gray-700 leading-relaxed">Staying in Athens and looking to visit a Greek island? Aegina is an excellent option! With
          only an hour ferry ride, you will arrive on the island and find luxurious pistachios,
          crystal clear beaches, and ancient temples! This is a comprehensive guide with everything
          you will need to plan your trip, from tickets and transportation to food and activities!</p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
