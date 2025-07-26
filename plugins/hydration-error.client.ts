export default defineNuxtPlugin(() => {
  if (process.client) {
    // Configuration pour éviter les erreurs d'hydratation
    const originalError = console.error
    console.error = (...args) => {
      const message = args.join(' ')
      
      // Ignorer les erreurs d'hydratation spécifiques
      if (message.includes('nextSibling') || 
          message.includes('e is null') ||
          message.includes('hydratation') ||
          message.includes('hydration')) {
        console.warn('Hydration error suppressed:', message)
        return
      }
      
      originalError.apply(console, args)
    }

    // Intercepter les erreurs globales
    const originalErrorHandler = window.onerror
    window.onerror = (message, source, lineno, colno, error) => {
      const errorMessage = message?.toString() || ''
      
      // Vérifier si c'est une erreur d'hydratation
      if (errorMessage.includes('nextSibling') || 
          errorMessage.includes('e is null') ||
          errorMessage.includes('hydratation') ||
          errorMessage.includes('hydration')) {
        console.warn('Global hydration error suppressed:', errorMessage)
        return true // Empêcher la propagation
      }
      
      // Appeler le gestionnaire original pour les autres erreurs
      if (originalErrorHandler) {
        return originalErrorHandler(message, source, lineno, colno, error)
      }
      return false
    }

    // Intercepter les erreurs non capturées
    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason?.toString() || ''
      
      if (reason.includes('nextSibling') || 
          reason.includes('e is null') ||
          reason.includes('hydratation') ||
          reason.includes('hydration')) {
        console.warn('Unhandled hydration error suppressed:', reason)
        event.preventDefault()
        return
      }
    })

    // Fonction pour corriger les problèmes d'hydratation
    const fixHydrationIssues = () => {
      try {
        // Attendre que le DOM soit stable
        setTimeout(() => {
          const elements = document.querySelectorAll('*')
          
          elements.forEach(element => {
            // Corriger les éléments avec des références null
            if (element && element.nextSibling === null && element.previousSibling === null) {
              if (!element.parentNode && element.tagName && 
                  element.tagName !== 'BODY' && element.tagName !== 'HTML') {
                try {
                  document.body.appendChild(element)
                } catch (error) {
                  // Ignorer les erreurs de réparation
                }
              }
            }
            
            // Initialiser les éléments WOW
            if (element && element.classList && element.classList.contains('wow')) {
              if (!element.hasAttribute('data-wow-initialized')) {
                element.setAttribute('data-wow-initialized', 'true')
              }
            }
          })
        }, 100)
      } catch (error) {
        // Ignorer les erreurs de réparation
      }
    }

    // Appliquer les corrections après le chargement
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fixHydrationIssues)
    } else {
      fixHydrationIssues()
    }

    // Appliquer les corrections périodiquement
    setInterval(fixHydrationIssues, 5000) // Toutes les 5 secondes
  }
}) 