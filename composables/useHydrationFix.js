import { ref, onMounted, nextTick } from 'vue'

export const useHydrationFix = () => {
  const isHydrated = ref(false)
  const hasError = ref(false)

  // Fonction pour corriger les problèmes d'hydratation
  const fixHydrationIssues = async () => {
    if (process.client) {
      try {
        await nextTick()
        
        // Attendre que le DOM soit stable
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Vérifier et corriger les éléments problématiques
        const elements = document.querySelectorAll('*')
        
        elements.forEach(element => {
          // Corriger les éléments avec des références null
          if (element && element.nextSibling === null && element.previousSibling === null) {
            // S'assurer que l'élément a un parent valide
            if (!element.parentNode) {
              console.warn('Element without parent detected, attempting to fix:', element)
              // Essayer de réparer l'élément
              try {
                if (element.tagName && element.tagName !== 'BODY' && element.tagName !== 'HTML') {
                  document.body.appendChild(element)
                }
              } catch (error) {
                console.warn('Could not fix element:', error)
              }
            }
          }
          
          // Corriger les éléments avec des classes WOW
          if (element && element.classList && element.classList.contains('wow')) {
            if (!element.hasAttribute('data-wow-initialized')) {
              element.setAttribute('data-wow-initialized', 'true')
            }
          }
        })
        
        isHydrated.value = true
      } catch (error) {
        console.warn('Error during hydration fix:', error)
        hasError.value = true
      }
    }
  }

  // Fonction pour gérer les erreurs d'hydratation
  const handleHydrationError = (error) => {
    if (process.client && error && error.message) {
      const isHydrationError = error.message.includes('nextSibling') || 
                              error.message.includes('e is null') ||
                              error.message.includes('hydratation') ||
                              error.message.includes('hydration')
      
      if (isHydrationError) {
        console.warn('Hydration error detected, attempting to fix:', error.message)
        hasError.value = true
        
        // Essayer de corriger automatiquement
        setTimeout(() => {
          fixHydrationIssues()
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
            setTimeout(check, 50)
          }
        }
        check()
      } else {
        resolve()
      }
    })
  }

  // Initialisation
  onMounted(() => {
    if (process.client) {
      // Attendre un peu avant de corriger
      setTimeout(() => {
        fixHydrationIssues()
      }, 200)
    }
  })

  return {
    isHydrated,
    hasError,
    fixHydrationIssues,
    handleHydrationError,
    waitForHydration
  }
} 