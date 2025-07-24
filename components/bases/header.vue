<template>
  <div>
    <!-- Menu Mobile avec Style Original -->
    <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="mobileMenuOpen = false"></div>
    <div v-if="mobileMenuOpen" class="mobile-menu-sidebar">
      <div class="mobile-menu-content">
        <div class="mobile-menu-header d-flex justify-content-between align-items-center mb-2">
          <div class="mobile-menu-logo">
            <a href="#" @click="handleLinkClick">
              <img src="/img/logo/logo-white.png" alt="logo-img" />
            </a>
          </div>
          <div class="mobile-menu-close">
            <button @click="mobileMenuOpen = false">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="mobile-menu-nav mb-3">
          <ul>
            <li v-for="item in navigation" :key="item.name">
              <a :href="item.href" @click="handleMenuClick" class="mobile-menu-link">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
        <div class="mobile-menu-contact">
          <h4>Contacts</h4>
          <ul>
            <li class="d-flex align-items-center">
              <div class="mobile-contact-icon">
                <i class="fal fa-map-marker-alt"></i>
              </div>
              <div class="mobile-contact-text">
                <a target="_blank" href="#" @click="handleLinkClick">Kinshasa-Gombe, RDC</a>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <div class="mobile-contact-icon mr-15">
                <i class="fal fa-envelope"></i>
              </div>
              <div class="mobile-contact-text">
                <a href="mailto:hello@futatrans.com" @click="handleLinkClick">
                  <span class="mailto:hello@futatrans.com">hello@futatrans.com</span>
                </a>
              </div>
            </li>
            
            <li class="d-flex align-items-center">
              <div class="mobile-contact-icon mr-15">
                <i class="far fa-phone"></i>
              </div>
              <div class="mobile-contact-text">
                <a href="tel:+243817039144" @click="handleLinkClick">+243 817 039 144</a>
              </div>
            </li>
          </ul>
          <div class="header-button mt-4">
            <a href="#" class="theme-btn text-center" @click="handleMenuClick">
              <span>Télécharger l'app<i class="fa-solid fa-arrow-right-long"></i></span>
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

    <!-- Header Principal -->
    <header class="header-section-1">
      <div id="header-sticky" class="header-1">
        <div class="container">
          <div class="mega-menu-wrapper">
            <div class="header-main">
              <!-- Logo -->
              <div class="header-left">
                <div class="logo">
                  <a href="#" class="header-logo">
                    <img src="/img/logo/logo.png" width="120" alt="logo-img" />
                  </a>
                </div>
              </div>

              <!-- Menu Desktop -->
              <div class="header-middle hidden xl:block">
                <div class="mean__menu-wrapper">
                  <div class="main-menu lg:block hidden">
                    <nav>
                      <ul class="flex space-x-4">
                        <li v-for="item in navigation" :key="item.name">
                          <a
                            :href="item.href"
                            @click="handleDesktopMenuClick"
                            class="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                          >
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <!-- Boutons et Menu Mobile -->
              <div class="header-right d-flex justify-content-end align-items-center">
                <!-- Bouton Contact -->
                <div class="header-button ms-4 hidden sm:block">
                  <a
                    href="#contact"
                    class="theme-btn flex justify-center items-center"
                    @click="handleLinkClick"
                  >
                    <div class="flex items-center justify-center">
                      <div>
                        <span>Nous contacter</span>
                      </div>
                      <div>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                <!-- Bouton Menu Mobile -->
                <div class="lg:hidden">
                  <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true"
                  >
                    <span class="sr-only">Ouvrir le menu principal</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>
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
import { ref } from 'vue'
import {
  Bars3Icon,
} from '@heroicons/vue/24/outline'

// État du menu mobile
const mobileMenuOpen = ref(false)

// Navigation items
const navigation = [
  { name: 'Pour les usagers', href: '#usagers' },
  { name: 'Pour les conducteurs', href: '#conducteurs' },
  { name: 'Pour la planète', href: '#planete' },
]

// Fonction pour fermer le menu mobile
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Gestionnaire pour les clics sur les liens du menu
const handleMenuClick = (event) => {
  closeMobileMenu()
  
  // Empêcher le comportement par défaut pour les liens internes
  if (event.target.href && event.target.href.includes('#')) {
    event.preventDefault()
    
    // Récupérer l'ID de la section depuis le href
    const href = event.target.href
    const sectionId = href.split('#')[1]
    
    if (sectionId) {
      // Attendre que le menu se ferme avant de scroller
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300) // Délai pour laisser le temps au menu de se fermer
    }
  }
}

// Gestionnaire pour les liens du menu desktop
const handleDesktopMenuClick = (event) => {
  // Empêcher le comportement par défaut pour les liens internes
  if (event.target.href && event.target.href.includes('#')) {
    event.preventDefault()
    
    // Récupérer l'ID de la section depuis le href
    const href = event.target.href
    const sectionId = href.split('#')[1]
    
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}

// Gestionnaire pour les autres liens
const handleLinkClick = (event) => {
  // Empêcher le comportement par défaut pour les liens internes
  if (event.target.href && event.target.href.includes('#')) {
    event.preventDefault()
  }
}
</script>

<style scoped>
/* Styles personnalisés pour le header */
.header-1 {
  @apply py-0;
}

.header-main {
  @apply flex items-center justify-between;
}

.header-left {
  @apply flex-shrink-0;
}

.header-middle {
  @apply flex-1 flex justify-center;
}

.header-right {
  @apply flex items-center space-x-4;
}

/* Menu Mobile avec Style Original */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  animation: fadeIn 0.3s ease;
}

.mobile-menu-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 320px;
  height: 100%;
  background: #0A3A3C;
  z-index: 9999;
  animation: slideIn 0.3s ease;
  overflow-y: auto;
}

.mobile-menu-content {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
}

.mobile-menu-logo img {
  height: 40px;
  width: auto;
}

.mobile-menu-close button {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-close button:hover {
  color: #10B981;
}

.mobile-menu-nav {
  margin: 30px 0;
}

.mobile-menu-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-nav li {
  margin-bottom: 15px;
}

.mobile-menu-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: block;
  padding: 10px 0;
  transition: color 0.3s ease;
}

.mobile-menu-link:hover {
  color: #10B981;
}

.mobile-menu-contact {
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.mobile-menu-contact h4 {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}

.mobile-menu-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-contact li {
  margin-bottom: 15px;
}

.mobile-contact-icon {
  width: 20px;
  margin-right: 15px;
  color: #10B981;
}

.mobile-contact-text a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.mobile-contact-text a:hover {
  color: #10B981;
}

.mobile-menu-contact .header-button {
  margin-top: 30px;
}

.mobile-menu-contact .social-icon {
  margin-top: 20px;
}

.mobile-menu-contact .social-icon a {
  color: white;
  font-size: 18px;
  margin-right: 15px;
  transition: color 0.3s ease;
}

.mobile-menu-contact .social-icon a:hover {
  color: #10B981;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 480px) {
  .mobile-menu-sidebar {
    width: 100%;
  }
  
  .mobile-menu-content {
    padding: 20px;
  }
}
</style>
