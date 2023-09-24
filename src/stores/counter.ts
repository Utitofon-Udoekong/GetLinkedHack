import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAPIStore = defineStore('counter', () => {
  const loading = ref(false)
  const toggleLoading = () => loading.value = !loading.value
  

  return { loading, toggleLoading }
})
