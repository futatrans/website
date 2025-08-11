export default defineNuxtPlugin(() => {
  if (process.client) {
    // Gestionnaire d'erreurs d'hydratation amélioré (léger et non intrusif)
    const handleHydrationError = (error: Error) => {
      if (error && error.message) {
        const isHydrationError = error.message.includes('nextSibling') || 
                                error.message.includes('hydratation') ||
                                error.message.includes('hydration') ||
                                error.message.includes('e is null')
        
        if (isHydrationError) {
          if (process.dev) {
            console.warn('Hydration error detected:', error.message)
          }
          // Au lieu de recharger, on laisse Nuxt/Vue stabiliser l'UI
          // Déclenche un évènement inoffensif pour forcer un léger recalcul de layout
          setTimeout(() => {
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
      // event.reason peut être string ou Error
      const reason = event?.reason instanceof Error ? event.reason : new Error(String(event?.reason ?? ''))
      if (handleHydrationError(reason)) {
        event.preventDefault()
      }
    })

    // Vérifier une seule fois après chargement du DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initializeAnimatedElements()
      })
    } else {
      initializeAnimatedElements()
    }
  }
})

function initializeAnimatedElements() {
  try {
    // Initialiser proprement les éléments avec animations (WOW / animate.css etc.)
    const elements = document.querySelectorAll('[data-wow-delay], [class*="wow"]')
    elements.forEach((element) => {
      if (!element.hasAttribute('data-wow-initialized')) {
        element.setAttribute('data-wow-initialized', 'true')
      }
    })
    // Ne PAS scanner tout le DOM ni logger d'éléments « isolés ».
    // De nombreux éléments peuvent être enfant unique sans next/previousSibling, ce n'est pas une erreur.
  } catch (error) {
    if (process.dev) {
      console.debug('Hydration init skipped due to error:', error)
    }
  }
} 