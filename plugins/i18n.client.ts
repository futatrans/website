export default defineNuxtPlugin(() => {
  // Vérification de sécurité pour éviter les erreurs d'hydratation
  if (process.client && typeof window !== 'undefined') {
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        // Le composable useI18n s'initialise automatiquement
        // Pas besoin d'initialisation supplémentaire ici
      })
    } else {
      // Le composable useI18n s'initialise automatiquement
      // Pas besoin d'initialisation supplémentaire ici
    }
  }
}) 