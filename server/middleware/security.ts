export default defineEventHandler((event) => {
  // En-têtes de sécurité essentiels
  setResponseHeaders(event, {
    // Protection contre le clickjacking
    'X-Frame-Options': 'DENY',
    
    // Protection contre le MIME type sniffing
    'X-Content-Type-Options': 'nosniff',
    
    // Politique de référent
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Politique de permissions
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    
    // HSTS (HTTP Strict Transport Security)
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    
    // Protection XSS
    'X-XSS-Protection': '1; mode=block',
    
    // Cache control pour les ressources sensibles
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
    
    // Autres en-têtes de sécurité
    'X-Download-Options': 'noopen',
    'X-Permitted-Cross-Domain-Policies': 'none',
    
    // Content Security Policy (CSP)
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://api.fontshare.com https://cdn.fontshare.com https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';"
  })
}) 