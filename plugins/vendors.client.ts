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
    // CSS non-critiques - chargement après le rendu initial
    const cssFiles = [
      '/vendors/css/animate.css',
      '/vendors/css/magnific-popup.css',
      '/vendors/css/meanmenu.css',
      '/vendors/css/swiper-bundle.min.css',
      '/vendors/css/nice-select.css'
    ]

    cssFiles.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    })

    // Scripts non-critiques - chargement après jQuery et Bootstrap
    const scriptFiles = [
      '/vendors/js/jquery.waypoints.js',
      '/vendors/js/jquery.counterup.min.js',
      '/vendors/js/viewport.jquery.js',
      '/vendors/js/tilt.min.js',
      '/vendors/js/swiper-bundle.min.js',
      '/vendors/js/jquery.meanmenu.min.js',
      '/vendors/js/magnific-popup.min.js',
      '/vendors/js/wow.min.js',
      '/vendors/js/nice-select.min.js',
      '/vendors/js/main.js'
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