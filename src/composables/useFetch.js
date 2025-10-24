import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(true)

  watchEffect(async () => {
    // toValue() gets the value if it's a ref/computed,
    // or just returns the value if it's a plain string.
    const currentUrl = toValue(url)

    // If the URL is null (like when we're waiting for a user_id),
    // don't fetch.
    if (!currentUrl) {
      data.value = null
      return
    }

    // Reset states for the new fetch
    isLoading.value = true
    data.value = null
    error.value = null

    try {
      const response = await fetch(currentUrl)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      data.value = await response.json()
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  })

  return { data, error, isLoading }
}
