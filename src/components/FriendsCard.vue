<!-- Friends Card -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  userData: Object,
  limit: Number,
})
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Friends</h3>
    <div class="flex flex-wrap gap-3 justify-center sm:justify-start lg:justify-center">
      <img
        v-for="friends in props.userData.friends.slice(0, limit || props.userData.friends.length)"
        :key="friends.name"
        class="h-12 w-12 rounded-full"
        src="https://placehold.co/100x100/E0E7FF/3730A3?text=F"
        alt="Friend"
        onerror="this.src='https://placehold.co/100x100/cccccc/333333?text=User'"
      />
    </div>
    <a
      v-if="props.userData.friends.length > limit"
      href="#"
      class="block text-center m-auto text-sm border border-gray-100 w-fit py-2 px-4 rounded-3xl mt-6 transition-shadow hover:shadow-md duration-300"
    >
      View All
    </a>
  </div>
</template>
