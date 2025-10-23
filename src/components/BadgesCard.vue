<!-- Badges Card -->
<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  userData: Object,
})

const limit = ref(6)

const viewMore = () => {
  limit.value += 6
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Badges</h3>
    <div
      class="flex flex-wrap items-center justify-center sm:justify-start lg:justify-center gap-3"
    >
      <!-- Badge icon -->
      <div
        v-for="badges in props.userData.badges.slice(0, limit || props.userData.badges.length)"
        :key="badges.id"
        class="bg-yellow-100 p-2 rounded-full"
      >
        <svg
          class="h-10 w-10 text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div v-if="props.userData.badges.length > limit">
      <button
        @click="viewMore"
        class="block text-center m-auto text-sm border border-gray-100 w-fit py-2 px-4 rounded-3xl mt-6 transition-shadow hover:shadow-md hover:cursor-pointer duration-300"
      >
        View More
      </button>
    </div>
  </div>
</template>
