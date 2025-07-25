// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css', '~/assets/css/custom.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/eslint'
  ],

  // Configuration des plugins
  plugins: [
    '~/plugins/i18n.server.ts',
    '~/plugins/i18n.client.ts'
  ],

  // Configuration pour éviter les warnings Vue Router sur les assets
  router: {
    options: {
      strict: false
    }
  },

  app: {
    head: {
      title: 'FUTA TRANS - Transport payé en un clic, en toute sécurité',
      meta: [
        // Métadonnées de base
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // SEO - Description et mots-clés
        { name: 'description', content: "FUTA TRANS - Transport payé en un clic, en toute sécurité. Application mobile de paiement pour motos-taxis, taxis et clients. Fini le cash, bonjour la sécurité, la traçabilité et la mobilité moderne en Afrique. Bonus fidélité, suivi des dépenses, encaissement sécurisé, programmes verts et microcrédit pour conducteurs." },
        { name: 'keywords', content: 'FUTA TRANS, transport, paiement mobile, motos-taxis, taxis, sécurité, mobilité, Afrique, cashless, application, fidélité, microcrédit, leasing, mobilité durable, Kinshasa, Gombe' },
        { name: 'author', content: 'FUTA TRANS' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph (Facebook, LinkedIn, WhatsApp)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'FUTA TRANS - Transport payé en un clic, en toute sécurité' },
        { property: 'og:description', content: "Application mobile de paiement pour motos-taxis, taxis et clients. Sécurité, traçabilité, mobilité moderne et programmes verts pour l'Afrique." },
        { property: 'og:image', content: '/img/cover.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:alt', content: 'FUTA TRANS - Application de transport et paiement mobile' },
        { property: 'og:url', content: 'https://futatrans.com' },
        { property: 'og:site_name', content: 'FUTA TRANS' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:locale:alternate', content: 'en_US' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'FUTA TRANS - Transport payé en un clic, en toute sécurité' },
        { name: 'twitter:description', content: "Application mobile de paiement pour motos-taxis, taxis et clients. Sécurité, traçabilité, mobilité moderne et programmes verts pour l'Afrique." },
        { name: 'twitter:image', content: '/img/cover.png' },
        { name: 'twitter:image:alt', content: 'FUTA TRANS - Application de transport et paiement mobile' },
        { name: 'twitter:site', content: '@futatrans' },
        { name: 'twitter:creator', content: '@futatrans' },
        
        // LinkedIn
        { property: 'linkedin:owner', content: 'futatrans' },
        { property: 'linkedin:image', content: '/img/cover.png' },
        
        // WhatsApp
        { property: 'og:image:secure_url', content: 'https://futatrans.com/img/cover.png' },
        
        // Pinterest
        { name: 'pinterest-rich-pin', content: 'true' },
        
        // Discord
        { property: 'discord:image', content: '/img/cover.png' },
        
        // Telegram
        { property: 'telegram:image', content: '/img/cover.png' },
        
        // Reddit
        { property: 'reddit:image', content: '/img/cover.png' },
        
        // Tumblr
        { property: 'tumblr:image', content: '/img/cover.png' },
        
        // Réseaux sociaux africains
        { property: 'snapchat:image', content: '/img/cover.png' },
        { property: 'tiktok:image', content: '/img/cover.png' },
        { property: 'instagram:image', content: '/img/cover.png' },
        
        // Métadonnées supplémentaires
        { name: 'theme-color', content: '#0A3A3C' },
        { name: 'msapplication-TileColor', content: '#0A3A3C' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'FUTA TRANS' },
        
        // Géolocalisation et contact
        { name: 'geo.region', content: 'CD-KN' },
        { name: 'geo.placename', content: 'Kinshasa-Gombe' },
        { name: 'ICBM', content: '-4.3217, 15.3126' },
        { name: 'business:contact_data:street_address', content: 'Kinshasa-Gombe' },
        { name: 'business:contact_data:locality', content: 'Kinshasa' },
        { name: 'business:contact_data:postal_code', content: '' },
        { name: 'business:contact_data:country_name', content: 'RDC' },
        { name: 'business:contact_data:phone_number', content: '+243 817 039 144' },
        { name: 'business:contact_data:email', content: 'hello@futatrans.com' },
        
        // Sécurité - En-têtes de sécurité renforcés
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://api.fontshare.com https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' data: https://api.fontshare.com https://cdn.fontshare.com https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self';" },
        { 'http-equiv': 'Strict-Transport-Security', content: 'max-age=31536000; includeSubDomains; preload' },
        { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
        { 'http-equiv': 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()' },
        
        // Performance
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'application-name', content: 'FUTA TRANS' },
        
        // Métadonnées spécifiques au transport
        { name: 'business:contact_data:street_address', content: 'Kinshasa-Gombe' },
        { name: 'business:contact_data:locality', content: 'Kinshasa' },
        { name: 'business:contact_data:postal_code', content: '' },
        { name: 'business:contact_data:country_name', content: 'RDC' },
        { name: 'business:contact_data:phone_number', content: '+243 817 039 144' },
        { name: 'business:contact_data:email', content: 'hello@futatrans.com' }
      ],
      
      link: [
        // Favicon
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        
        // Préchargement de l'image de couverture
        { rel: 'preload', as: 'image', href: '/img/cover.png' },
        
        // CSS critiques - chargement avant le rendu
        { rel: 'stylesheet', href: '/vendors/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/vendors/css/all.min.css' },
        { rel: 'stylesheet', href: '/vendors/css/main.css' },
        

        
        // Préconnexions pour les performances
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        
        // Canonical
        { rel: 'canonical', href: 'https://futatrans.com' }
      ],
      
      script: [
        // Scripts critiques - chargement immédiat pour éviter le FOUC
        { src: '/vendors/js/jquery-3.7.1.min.js' },
        { src: '/vendors/js/bootstrap.bundle.min.js' },
        
        // Script inline pour masquer le menu mobile immédiatement
        {
          innerHTML: `
            // Masquer le menu mobile dès le chargement
            document.addEventListener('DOMContentLoaded', function() {
              const offcanvas = document.querySelector('.offcanvas__info');
              const overlay = document.querySelector('.offcanvas__overlay');
              if (offcanvas) offcanvas.classList.remove('info-open');
              if (overlay) overlay.classList.remove('overlay-open');
            });
            
            // Masquer aussi pendant le chargement
            if (document.readyState === 'loading') {
              document.addEventListener('readystatechange', function() {
                if (document.readyState === 'interactive') {
                  const offcanvas = document.querySelector('.offcanvas__info');
                  const overlay = document.querySelector('.offcanvas__overlay');
                  if (offcanvas) offcanvas.classList.remove('info-open');
                  if (overlay) overlay.classList.remove('overlay-open');
                }
              });
            }
          `,
          type: 'text/javascript'
        },
        
        // Google Analytics (exemple)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
          async: true
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})