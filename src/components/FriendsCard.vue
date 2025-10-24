<!-- Friends Card -->
<script setup>
import { defineProps, ref } from 'vue'
import { RouterLink } from 'vue-router'

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
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Friends</h3>
    <div class="flex flex-wrap gap-3 justify-center sm:justify-start lg:justify-center">
      <RouterLink
        v-for="friends in props.userData.friends.slice(0, limit || props.userData.friends.length)"
        :key="friends.user_id"
        :to="`/${friends.username}`"
        class="rounded-4xl"
      >
        <img
          class="h-12 w-12 rounded-full"
          :src="`https://picsum.photos/seed/${friends.user_id}/200/200`"
          :alt="friends.name"
          onerror="this.src='https://placehold.co/100x100/cccccc/333333?text=User'"
        />
      </RouterLink>
    </div>
    <div v-if="props.userData.friends.length > limit">
      <button
        @click="viewMore"
        class="block text-center m-auto text-sm border border-gray-100 w-fit py-2 px-4 rounded-3xl mt-6 transition-shadow hover:shadow-md hover:cursor-pointer duration-300"
      >
        View More
      </button>
    </div>
  </div>
</template>
