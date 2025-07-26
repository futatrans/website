export default defineEventHandler((event) => {
  // Configuration pour éviter les erreurs d'hydratation côté serveur
  setResponseHeaders(event, {
    'X-Hydration-Safe': 'true',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  })
}) 