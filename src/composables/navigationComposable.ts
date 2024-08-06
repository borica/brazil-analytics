import { useNavigationStore } from '@/stores/navigation'
import { storeToRefs } from 'pinia'

export function useNavigation() {
  const { setIsSideMenuOpen } = useNavigationStore()
  const { isSideMenuOpen } = storeToRefs(useNavigationStore())

  function toggleSideMenuStatus(): void {
    setIsSideMenuOpen(!isSideMenuOpen.value)
  }

  return {
    isSideMenuOpen,
    toggleSideMenuStatus
  }
}
