export default defineNuxtPlugin(() => {
  if (process.client) {
    // Gestionnaire d'erreurs d'hydratation amélioré
    const handleHydrationError = (error: Error) => {
      if (error && error.message) {
        const isHydrationError = error.message.includes('nextSibling') || 
                                error.message.includes('hydratation') ||
                                error.message.includes('hydration') ||
                                error.message.includes('e is null')
        
        if (isHydrationError) {
          console.warn('Hydration error detected:', error.message)
          
          // Au lieu de recharger, on attend que l'hydratation se stabilise
          setTimeout(() => {
            // Forcer une mise à jour du DOM
            if (typeof window !== 'undefined' && window.dispatchEvent) {
              window.dispatchEvent(new Event('resize'))
            }
          }, 100)
          
          return true
        }
      }
      return false
    }

    // Intercepter les erreurs globales
    const originalErrorHandler = window.onerror
    window.onerror = (message, source, lineno, colno, error) => {
      if (handleHydrationError(error || new Error(message as string))) {
        return true // Empêcher la propagation des erreurs d'hydratation
      }
      
      // Appeler le gestionnaire d'erreurs original pour les autres erreurs
      if (originalErrorHandler) {
        return originalErrorHandler(message, source, lineno, colno, error)
      }
      return false
    }

    // Intercepter les erreurs non capturées
    window.addEventListener('unhandledrejection', (event) => {
      if (handleHydrationError(new Error(event.reason))) {
        event.preventDefault()
      }
    })

    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        // Vérifier les éléments problématiques
        checkForHydrationIssues()
      })
    } else {
      checkForHydrationIssues()
    }

    // Vérifier périodiquement les problèmes d'hydratation
    let hydrationCheckInterval: NodeJS.Timeout | null = null
    
    const startHydrationMonitoring = () => {
      if (hydrationCheckInterval) {
        clearInterval(hydrationCheckInterval)
      }
      
      hydrationCheckInterval = setInterval(() => {
        checkForHydrationIssues()
      }, 2000) // Vérifier toutes les 2 secondes
    }

    // Démarrer le monitoring après un délai
    setTimeout(startHydrationMonitoring, 1000)
  }
})

function checkForHydrationIssues() {
  try {
    // Vérifier les éléments qui pourraient causer des problèmes d'hydratation
    const elements = document.querySelectorAll('[data-wow-delay], [class*="wow"]')
    
    elements.forEach(element => {
      // S'assurer que les éléments avec des animations sont correctement initialisés
      if (element && !element.hasAttribute('data-wow-initialized')) {
        element.setAttribute('data-wow-initialized', 'true')
      }
      
      // Vérifier que l'élément a un parent valide
      if (element && !element.parentNode) {
        console.warn('Element without parent detected:', element)
      }
    })

    // Vérifier les éléments avec des références null
    const allElements = document.querySelectorAll('*')
    allElements.forEach(element => {
      if (element && element.nextSibling === null && element.previousSibling === null) {
        // Élément isolé, potentiellement problématique
        console.warn('Isolated element detected:', element)
      }
    })
  } catch (error) {
    console.warn('Error during hydration check:', error)
  }
} 