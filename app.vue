<template>
  <div id="app">
    <ClientOnly>
      <BasesHeader />
    </ClientOnly>
    <NuxtPage />
    <ClientOnly>
      <BasesFooter />
    </ClientOnly>
  </div>
</template>

<script setup>
// Gestion globale des erreurs d'hydratation
const handleError = (error) => {
  if (process.client && error && error.message) {
    const isHydrationError = error.message.includes('nextSibling') || 
                            error.message.includes('hydratation') ||
                            error.message.includes('hydration') ||
                            error.message.includes('e is null')
    
    if (isHydrationError) {
      console.warn('Global hydration error detected:', error.message)
      // Ne pas recharger automatiquement, laisser l'utilisateur décider
      return false
    }
  }
  return true
}

// Intercepter les erreurs globales
if (process.client) {
  const originalErrorHandler = window.onerror
  window.onerror = (message, source, lineno, colno, error) => {
    if (!handleError(error || new Error(message))) {
      return true // Empêcher la propagation des erreurs d'hydratation
    }
    
    // Appeler le gestionnaire d'erreurs original pour les autres erreurs
    if (originalErrorHandler) {
      return originalErrorHandler(message, source, lineno, colno, error)
    }
    return false
  }
}

// Gestion des erreurs d'hydratation côté serveur
if (process.server) {
  // Configuration pour éviter les erreurs d'hydratation côté serveur
  const originalConsoleError = console.error
  console.error = (...args) => {
    const message = args.join(' ')
    if (message.includes('nextSibling') || message.includes('e is null')) {
      // Ignorer les erreurs d'hydratation côté serveur
      return
    }
    originalConsoleError.apply(console, args)
  }
}
</script>

<style>
/* Styles globaux pour éviter les problèmes d'hydratation */
#app {
  min-height: 100vh;
}

/* Assurer que les éléments sont visibles pendant l'hydratation */
[data-wow-delay] {
  visibility: visible !important;
}

/* Éviter les flashs de contenu non stylé */
.wow {
  visibility: visible !important;
}

/* Éviter les problèmes de layout pendant l'hydratation */
.client-only {
  min-height: 1px;
}

/* Assurer que les éléments avec des animations sont stables */
[class*="fadeIn"] {
  opacity: 1 !important;
  transform: none !important;
}

/* Éviter les problèmes de positionnement pendant l'hydratation */
.position-relative,
.position-absolute,
.position-fixed {
  position: relative !important;
}
</style>
