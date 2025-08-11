export default defineNuxtPlugin(() => {
  if (process.client) {
    // En dev uniquement, atténuer le bruit des erreurs d'hydratation connues
    if (process.dev) {
      const originalError = console.error
      console.error = (...args) => {
        const message = args.join(' ')
        // Ignorer certains messages verbeux d'hydratation en DEV
        if (
          message.includes('nextSibling') ||
          message.includes('e is null') ||
          message.includes('hydratation') ||
          message.includes('hydration')
        ) {
          console.warn('Hydration error suppressed:', message)
          return
        }
        originalError.apply(console, args)
      }

      const originalErrorHandler = window.onerror
      window.onerror = (message, source, lineno, colno, error) => {
        const errorMessage = message?.toString() || ''
        if (
          errorMessage.includes('nextSibling') ||
          errorMessage.includes('e is null') ||
          errorMessage.includes('hydratation') ||
          errorMessage.includes('hydration')
        ) {
          console.warn('Global hydration error suppressed:', errorMessage)
          return true
        }
        if (originalErrorHandler) {
          return originalErrorHandler(message, source, lineno, colno, error)
        }
        return false
      }

      window.addEventListener('unhandledrejection', (event) => {
        const reasonStr = event.reason?.toString?.() || String(event.reason ?? '')
        if (
          reasonStr.includes('nextSibling') ||
          reasonStr.includes('e is null') ||
          reasonStr.includes('hydratation') ||
          reasonStr.includes('hydration')
        ) {
          console.warn('Unhandled hydration error suppressed:', reasonStr)
          event.preventDefault()
        }
      })
    }

    // Initialisation légère pour les éléments animés une seule fois
    const init = () => {
      try {
        const elements = document.querySelectorAll('[data-wow-delay], [class*="wow"]')
        elements.forEach((el) => {
          if (!el.hasAttribute('data-wow-initialized')) {
            el.setAttribute('data-wow-initialized', 'true')
          }
        })
      } catch {
        // silencieux
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init, { once: true })
    } else {
      init()
    }

    // Supprimé: pas de setInterval ni de mutation agressive du DOM
  }
}) 