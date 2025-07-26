import { ref, computed, reactive, onMounted } from 'vue'
import frMessages from '~/locales/fr.json'
import enMessages from '~/locales/en.json'

// État global réactif
const state = reactive({
  currentLocale: 'en',
  isInitialized: false,
  messages: {
    fr: frMessages,
    en: enMessages
  }
})

// Fonction pour définir un cookie
const setCookie = (name, value, days = 365) => {
  if (process.client && typeof document !== 'undefined' && typeof window !== 'undefined') {
    try {
      const expires = new Date()
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
      
      // Configuration sécurisée du cookie
      const secure = window.location.protocol === 'https:' ? ';Secure' : ''
      const sameSite = ';SameSite=Lax'
      const path = ';path=/'
      const maxAge = `;Max-Age=${days * 24 * 60 * 60}`
      
      document.cookie = `${name}=${value};expires=${expires.toUTCString()}${path}${sameSite}${secure}${maxAge}`
    } catch (error) {
      console.warn('Error setting cookie:', error)
    }
  }
}

// Fonction pour récupérer un cookie
const getCookie = (name) => {
  if (process.client && typeof document !== 'undefined' && typeof document.cookie !== 'undefined') {
    try {
      const nameEQ = name + "="
      const ca = document.cookie.split(';')
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
    } catch (error) {
      console.warn('Error getting cookie:', error)
    }
  }
  return null
}

// Fonction pour obtenir une traduction
const t = (key) => {
  // Vérification de sécurité pour éviter les erreurs d'hydratation
  if (!key || typeof key !== 'string') {
    return key || ''
  }

  try {
    const keys = key.split('.')
    let value = state.messages[state.currentLocale]
    
    if (!value) {
      console.warn(`No messages loaded for locale: ${state.currentLocale}`)
      return key
    }
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback vers français si la clé n'existe pas
        if (state.currentLocale !== 'en') {
          const frValue = state.messages.fr
          if (frValue) {
            let fallbackValue = frValue
            for (const fallbackKey of keys) {
              if (fallbackValue && typeof fallbackValue === 'object' && fallbackKey in fallbackValue) {
                fallbackValue = fallbackValue[fallbackKey]
              } else {
                fallbackValue = key // Retourner la clé si aucune traduction n'est trouvée
                break
              }
            }
            return fallbackValue
          }
        }
        return key // Retourner la clé si aucune traduction n'est trouvée
      }
    }
    
    return value || key
  } catch (error) {
    console.warn('Translation error:', error)
    return key
  }
}

// Fonction pour changer de langue
const setLocale = (locale) => {
  if (locale !== state.currentLocale && (locale === 'fr' || locale === 'en')) {
    state.currentLocale = locale
    
    // Sauvegarder la préférence dans un cookie
    setCookie('locale', locale, 365) // Cookie valide 1 an
  }
}

// Fonction pour initialiser la langue
const initLocale = () => {
  if (!state.isInitialized) {
    try {
      if (process.client && typeof document !== 'undefined' && typeof window !== 'undefined') {
        const savedLocale = getCookie('locale')
        if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
          setLocale(savedLocale)
        } else {
          setLocale('en') // Langue par défaut
        }
      } else {
        setLocale('en') // Langue par défaut côté serveur
      }
      state.isInitialized = true
    } catch (error) {
      console.warn('Error initializing locale:', error)
      // Fallback en cas d'erreur
      setLocale('en')
      state.isInitialized = true
    }
  }
}

// Computed pour la langue actuelle
const locale = computed(() => state.currentLocale)

// Computed pour les messages actuels
const currentMessages = computed(() => state.messages[state.currentLocale] || {})

export const useI18n = () => {
  // Initialiser automatiquement avec gestion d'erreur
  try {
    initLocale()
  } catch (error) {
    console.warn('Error in useI18n initialization:', error)
  }

  return {
    t,
    locale,
    setLocale,
    initLocale,
    currentMessages,
    setCookie,
    getCookie,
    isInitialized: computed(() => state.isInitialized)
  }
} 