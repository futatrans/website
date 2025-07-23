<template>
  <div>
    <div class="fix-area">
      <div class="offcanvas__info">
        <div class="offcanvas__wrapper">
          <div class="offcanvas__content">
            <div
              class="offcanvas__top mb-5 d-flex justify-content-between align-items-center"
            >
              <div class="offcanvas__logo">
                <a href="#" @click="handleLinkClick">
                  <img src="/img/logo/logo-white.png" alt="logo-img" />
                </a>
              </div>
              <div class="offcanvas__close">
                <button @click="closeOffcanvas">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
            <p class="text d-none d-xl-block">
              FUTA TRANS révolutionne le transport en Afrique avec une solution
              de paiement mobile sécurisée pour les conducteurs et les
              passagers.
            </p>
            <div class="mobile-menu fix mb-3"></div>
            <div class="offcanvas__contact">
              <h4>Contact Info</h4>
              <ul>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon">
                    <i class="fal fa-map-marker-alt"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a target="_blank" href="#" @click="handleLinkClick">Kinshasa-Gombe, RDC</a>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon mr-15">
                    <i class="fal fa-envelope"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a href="mailto:hello@futatrans.com" @click="handleLinkClick"
                      ><span class="mailto:hello@futatrans.com"
                        >hello@futatrans.com</span
                      ></a
                    >
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon mr-15">
                    <i class="fal fa-clock"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a target="_blank" href="#" @click="handleLinkClick">Lun-Ven, 08h - 18h</a>
                  </div>
                </li>
                <li class="d-flex align-items-center">
                  <div class="offcanvas__contact-icon mr-15">
                    <i class="far fa-phone"></i>
                  </div>
                  <div class="offcanvas__contact-text">
                    <a href="tel:+243817039144" @click="handleLinkClick">+243 817 039 144</a>
                  </div>
                </li>
              </ul>
              <div class="header-button mt-4">
                <a href="#" class="theme-btn text-center" @click="handleLinkClick">
                  <span
                    >Télécharger l'app<i
                      class="fa-solid fa-arrow-right-long"
                    ></i
                  ></span>
                </a>
              </div>
              <div class="social-icon d-flex align-items-center">
                <a href="#" @click="handleLinkClick"><i class="fab fa-facebook-f"></i></a>
                <a href="#" @click="handleLinkClick"><i class="fab fa-twitter"></i></a>
                <a href="#" @click="handleLinkClick"><i class="fab fa-youtube"></i></a>
                <a href="#" @click="handleLinkClick"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas__overlay" @click="handleLinkClick"></div>

    <!-- Header Section Start -->
    <header class="header-section-1">
      <div id="header-sticky" class="header-1">
        <div class="container">
          <div class="mega-menu-wrapper">
            <div class="header-main">
              <div class="header-left">
                <div class="logo">
                  <a href="#" class="header-logo">
                    <img src="/img/logo/logo.png" width="150" alt="logo-img" />
                  </a>
                </div>
              </div>
              <div class="header-middle">
                <div class="mean__menu-wrapper">
                  <div class="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a href="#usagers" @click="handleMenuLinkClick">Pour les usagers</a>
                        </li>
                        <li>
                          <a href="#conducteurs" @click="handleMenuLinkClick"> Pour les conducteurs </a>
                        </li>

                        <li>
                          <a href="#planete" @click="handleMenuLinkClick">Pour la planete</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div
                class="header-right d-flex justify-content-end align-items-center"
              >
                <div class="header-button ms-4">
                  <a
                    href="#download-app"
                    class="theme-btn flex justify-center items-center"
                    @click="handleLinkClick"
                  >

                 <div class="flex items-center justify-center">
                    <div>
                    <span> Télécharger </span>

                  </div>

                    <div>
                        <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </span>
                    </div>
                 </div>
                  </a>
                </div>
                <div class="header__hamburger d-block d-xl-none my-auto">
                  <div class="sidebar__toggle">
                    <i class="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
// Fonction simple pour fermer l'offcanvas en utilisant jQuery
const closeOffcanvas = () => {
  // Utiliser jQuery directement si disponible
  if (typeof $ !== 'undefined') {
    $(".offcanvas__info").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  } else {
    // Fallback vanilla JavaScript
    const offcanvas = document.querySelector('.offcanvas__info')
    const overlay = document.querySelector('.offcanvas__overlay')
    
    if (offcanvas) {
      offcanvas.classList.remove('info-open')
    }
    
    if (overlay) {
      overlay.classList.remove('overlay-open')
    }
  }
}

// Fonction pour gérer les clics sur les liens
const handleLinkClick = (event) => {
  // Fermer l'offcanvas en premier
  closeOffcanvas()
  
  // Empêcher le comportement par défaut pour les liens internes
  if (event.target.href && event.target.href.includes('#')) {
    event.preventDefault()
  }
  
  // Pour les liens mailto et tel, laisser le comportement par défaut
  if (event.target.href && (event.target.href.includes('mailto:') || event.target.href.includes('tel:'))) {
    return
  }
  
  // S'assurer que l'offcanvas est bien fermé
  setTimeout(() => {
    closeOffcanvas()
  }, 100)
}

// Fonction spécifique pour les liens du menu principal
const handleMenuLinkClick = (event) => {
  // Fermer l'offcanvas immédiatement
  closeOffcanvas()
  
  // Empêcher le comportement par défaut
  event.preventDefault()
  
  // Fermer l'offcanvas une seconde fois pour s'assurer
  setTimeout(() => {
    closeOffcanvas()
  }, 50)
  
  // Fermer l'offcanvas une troisième fois pour être sûr
  setTimeout(() => {
    closeOffcanvas()
  }, 200)
}
</script>

<style scoped></style>
