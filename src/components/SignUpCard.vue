<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:state'])

const currentState = ref(true)

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
    <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">Sign Up</h2>
    <p class="text-center text-gray-500 mb-8">Fill in the following fields.</p>

    <!-- Login Form -->
    <form action="#" method="POST">
      <div class="grid grid-cols-2 gap-4">
        <div class="mb-4">
          <label for="firstname" class="block text-sm font-bold text-gray-700 mb-2"
            >First Name</label
          >
          <input
            id="firstname"
            name="firstname"
            class="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>

        <div class="mb-4">
          <label for="firstname" class="block text-sm font-bold text-gray-700 mb-2"
            >Last Name</label
          >
          <input
            id="lastname"
            name="lastname"
            class="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
          />
        </div>
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Username</label>
        <input
          id="username"
          name="username"
          class="w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label for="email" class="block text-sm font-bold text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
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
        Already have an account?

        <button
          @click="toggleState"
          class="font-medium text-blue-600 hover:text-blue-500 hover:cursor-pointer"
        >
          Sign in.
        </button>
      </p>
    </div>
  </div>
  <!-- End Login Card -->
</template>
