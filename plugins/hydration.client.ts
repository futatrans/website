export default defineNuxtPlugin(() => {
  if (process.client) {
    // Gestionnaire d'erreurs d'hydratation
    const handleHydrationError = (error: Error) => {
      if (error.message.includes('nextSibling') || error.message.includes('hydratation')) {
        console.warn('Hydration error detected, attempting recovery...', error)
        
        // Forcer un re-rendu après un délai
        setTimeout(() => {
          window.location.reload()
        }, 100)
        
        return true // Empêcher la propagation de l'erreur
      }
      return false
    }

    // Intercepter les erreurs globales
    const originalErrorHandler = window.onerror
    window.onerror = (message, source, lineno, colno, error) => {
      if (handleHydrationError(error || new Error(message as string))) {
        return true // Empêcher la propagation
      }
      
      // Appeler le gestionnaire d'erreurs original
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
  }
})

function checkForHydrationIssues() {
  // Vérifier les éléments qui pourraient causer des problèmes d'hydratation
  const elements = document.querySelectorAll('[data-wow-delay], [class*="wow"]')
  
  elements.forEach(element => {
    // S'assurer que les éléments avec des animations sont correctement initialisés
    if (element && !element.hasAttribute('data-wow-initialized')) {
      element.setAttribute('data-wow-initialized', 'true')
    }
  })
} 