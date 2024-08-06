import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useNavigationStore = defineStore('navigation', () => {
  const isSideMenuOpen = ref(false)
  function setIsSideMenuOpen(value: boolean) {
    isSideMenuOpen.value = value
  }

  return { isSideMenuOpen, setIsSideMenuOpen }
})
