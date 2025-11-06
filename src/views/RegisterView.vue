<script setup>
import LoginCard from '@/components/LoginCard.vue'
import SignUpCard from '@/components/SignUpCard.vue'
import { ref } from 'vue'

const toggleState = ref(false)

const handleState = (newState) => {
  toggleState.value = newState
}
</script>

<template>
  <div v-if="toggleState" class="h-[calc(100vh-64px)] flex items-center justify-center p-4">
    <SignUpCard @update:state="handleState" />
  </div>
  <div v-else class="h-[calc(100vh-64px)] flex items-center justify-center p-4">
    <LoginCard @update:state="handleState" />
  </div>
</template>
