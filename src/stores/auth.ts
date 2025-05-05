import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const token = ref<string | null>(null)
  const user = ref<any>(null)

  function setToken(token_value: string) {
    token.value = token_value
  }

  function setUser(user: any) {
    user.value = user
  }
  const isAuthenticated = computed(() => !!token.value)
  console.log(isAuthenticated);
  console.log(token.value);
  return { token, user, setToken, setUser, isAuthenticated }
})
