<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:state'])

const currentState = ref(false)

const toggleState = () => {
  currentState.value = !currentState.value
  emit('update:state', currentState.value)
  console.log('State updated')
}
</script>

<template>
  <!-- Login Card -->
  <div class="bg-white border border-gray-100 p-8 rounded-xl shadow-lg w-full max-w-md">
    <!-- Header Text -->
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Login</h2>
    <p class="text-center text-gray-500 mb-8">Enter your credentials to login.</p>

    <!-- Login Form -->
    <form action="#" method="POST">
      <!-- Email Field -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          class="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      <!-- Password Field -->
      <div class="mb-6">
        <label for="password" class="block text-sm font-bold text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          class="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      <!-- Sign In Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
        >
          Sign in
        </button>
      </div>
    </form>

    <!-- Footer Link -->
    <div class="text-center mt-6">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <button
          @click="toggleState"
          class="font-medium text-blue-600 hover:text-blue-500 hover:cursor-pointer"
        >
          Sign up.
        </button>
      </p>
    </div>
  </div>
  <!-- End Login Card -->
</template>
