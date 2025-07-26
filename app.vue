<template>
  <div id="app">
    <BasesHeader />
    <NuxtPage />
    <BasesFooter />
  </div>
</template>

<script setup>
// Gestion globale des erreurs d'hydratation
const handleError = (error) => {
  if (process.client && error && error.message) {
    const isHydrationError = error.message.includes('nextSibling') || 
                            error.message.includes('hydratation') ||
                            error.message.includes('hydration')
    
    if (isHydrationError) {
      console.warn('Global hydration error detected:', error)
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
</style>
