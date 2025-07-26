export default defineNuxtPlugin(() => {
  if (process.client) {
    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadVendors)
    } else {
      loadVendors()
    }
  }

  function loadVendors() {
    // CSS critiques - chargement après le rendu initial
    const cssFiles = [
      '/vendors/css/animate.css',      // ✅ Utilisé pour les animations WOW
      '/vendors/css/swiper-bundle.min.css'  // ✅ Utilisé pour le slider Swiper
    ]

    cssFiles.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    })

    // Scripts critiques - chargement après jQuery et Bootstrap
    const scriptFiles = [
      '/vendors/js/wow.min.js',           // ✅ Utilisé pour les animations
      '/vendors/js/swiper-bundle.min.js', // ✅ Utilisé pour le slider
      '/vendors/js/tilt.min.js',          // ✅ Utilisé pour l'effet tilt
      '/vendors/js/main-optimized.js'     // ✅ Version optimisée avec seulement les fonctionnalités utilisées
    ]

    loadScriptsSequentially(scriptFiles)
  }

  async function loadScriptsSequentially(scripts: string[]) {
    for (const src of scripts) {
      if (!document.querySelector(`script[src="${src}"]`)) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = src
          script.defer = true
          script.onload = () => resolve()
          script.onerror = () => reject()
          document.head.appendChild(script)
        }).catch(error => {
          console.warn(`Failed to load script: ${src}`, error)
        })
      }
    }
  }
}) 