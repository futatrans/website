import { ref, onMounted, nextTick } from 'vue'

export const useHydration = () => {
  const isHydrated = ref(false)
  const hasHydrationError = ref(false)

  // Fonction pour vérifier si l'hydratation est terminée
  const checkHydration = async () => {
    if (process.client) {
      try {
        await nextTick()
        isHydrated.value = true
      } catch (error) {
        console.warn('Hydration check failed:', error)
        hasHydrationError.value = true
      }
    }
  }

  // Fonction pour gérer les erreurs d'hydratation
  const handleHydrationError = (error) => {
    if (process.client && error && error.message) {
      const isHydrationError = error.message.includes('nextSibling') || 
                              error.message.includes('hydratation') ||
                              error.message.includes('hydration')
      
      if (isHydrationError) {
        console.warn('Hydration error detected:', error)
        hasHydrationError.value = true
        
        // Tentative de récupération
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            window.location.reload()
          }
        }, 100)
        
        return true
      }
    }
    return false
  }

  // Fonction pour attendre l'hydratation
  const waitForHydration = () => {
    return new Promise((resolve) => {
      if (process.client) {
        const check = () => {
          if (isHydrated.value) {
            resolve()
          } else {
            setTimeout(check, 10)
          }
        }
        check()
      } else {
        resolve()
      }
    })
  }

  // Initialisation côté client
  onMounted(() => {
    if (process.client) {
      checkHydration()
    }
  })

  return {
    isHydrated,
    hasHydrationError,
    checkHydration,
    handleHydrationError,
    waitForHydration
  }
} 