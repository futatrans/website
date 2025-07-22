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

  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxt/eslint'
  ],

  // Configuration pour éviter les warnings Vue Router sur les assets
  router: {
    options: {
      strict: false
    }
  },

  app: {
    head: {
      title: 'FutaTrans - Transport et Logistique',
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
        
        // Open Graph (Facebook, LinkedIn)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'FUTA TRANS - Transport payé en un clic, en toute sécurité' },
        { property: 'og:description', content: "Application mobile de paiement pour motos-taxis, taxis et clients. Sécurité, traçabilité, mobilité moderne et programmes verts pour l'Afrique." },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:url', content: 'https://futatrans.com' },
        { property: 'og:site_name', content: 'FUTA TRANS' },
        { property: 'og:locale', content: 'fr_FR' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'FUTA TRANS - Transport payé en un clic, en toute sécurité' },
        { name: 'twitter:description', content: "Application mobile de paiement pour motos-taxis, taxis et clients. Sécurité, traçabilité, mobilité moderne et programmes verts pour l'Afrique." },
        { name: 'twitter:image', content: '/twitter-image.jpg' },
        { name: 'twitter:site', content: '@futatrans' },
        
        // Métadonnées supplémentaires
        { name: 'theme-color', content: '#1a365d' },
        { name: 'msapplication-TileColor', content: '#1a365d' },
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
        
        // Sécurité
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" },
        
        // Performance
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'application-name', content: 'FutaTrans' },
        
        // Métadonnées spécifiques au transport
        { name: 'business:contact_data:street_address', content: '123 Rue du Transport' },
        { name: 'business:contact_data:locality', content: 'Paris' },
        { name: 'business:contact_data:postal_code', content: '75001' },
        { name: 'business:contact_data:country_name', content: 'France' },
        { name: 'business:contact_data:phone_number', content: '+33 1 23 45 67 89' },
        { name: 'business:contact_data:email', content: 'contact@futatrans.com' }
      ],
      
      link: [
        // Favicon
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        
        // CSS critiques - chargement avant le rendu
        { rel: 'stylesheet', href: '/vendors/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/vendors/css/all.min.css' },
        { rel: 'stylesheet', href: '/vendors/css/main.css' },
        { rel: 'stylesheet', href: '/assets/css/custom.css' },
        
        // Préconnexions pour les performances
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        
        // Canonical
        { rel: 'canonical', href: 'https://futatrans.com' }
      ],
      
      script: [
        // Scripts critiques - chargement avant le rendu
        { src: '/vendors/js/jquery-3.7.1.min.js', defer: true },
        { src: '/vendors/js/bootstrap.bundle.min.js', defer: true },
        
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