<template>
  <div>
    <section class="intro-section">
      <div class="intro-container-wrapper style1">
        <div class="container">
          <div class="intro-wrapper style1 fix">
            <div class="shape1">
              <img src="/vendors/images/shape/introShape1_1.png" alt="shape" />
            </div>
            <div class="shape2">
              <img src="/vendors/images/shape/introShape1_2.png" alt="shape" />
            </div>
            <div class="shape3 d-none d-xxl-block cir36">
              <img src="/vendors/images/shape/introShape1_3.png" alt="shape" />
            </div>
            <div class="shape4 d-none d-xxl-block cir36">
              <img src="/vendors/images/shape/introShape1_4.png" alt="shape" />
            </div>
            <div class="shape5 d-none d-xxl-block cir36">
              <img src="/vendors/images/shape/introShape1_5.png" alt="shape" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-xl-7 order-1 order-xl-1 pt-20 lg:pt-0 -mb-[200px]">
                  <div class=" sm:-mb-24 intro-content intro-content-responsive flex flex-col justify-center items-center sm:items-start">
                    <div class="intro-section-title">
                      
                      <h1
                        class="intro-title wow fadeInUp "
                        data-wow-delay=".2s"

                        style="
                          text-transform: none !important;
                          font-weight: 900 !important;
                        "
                      >
                        <span class="font-extrabold">
                          {{ t('home1.title') }}
                        </span>
                      </h1>
                      <div class="max-w-[650px]">
                        <p class="intro-desc wow fadeInUp" data-wow-delay=".4s">
                        {{ t('home1.description') }}
                      </p>
                      </div>
                    </div>
                    <div
                      class="btn-wrapper style1 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <a
                        class="theme-btn flex justify-center items-center w-full sm:w-auto"
                        href="#download-app"
                      >
                        <div class="flex items-center justify-center">
                            <span> {{ t('home1.downloadButton') }} </span>

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
                      </a>
                      <a
                        class="theme-btn style2 wow fadeInUp flex justify-center items-center w-full sm:w-auto"
                        data-wow-delay=".2s"
                        href="#usagers"
                      >
                        <div class="flex items-center justify-center">
                            <div>
                            <span> {{ t('home1.learnMoreButton') }} </span>

                            </div>
                        <div>
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
                              d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                            />
                          </svg>
                        </div>
                        </div>
                      </a>
                    </div>
                    <div class="fancy-box-wrapper style1">
                      <div
                        class="fancy-box style1 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div class="item">
                          <img
                            src="/vendors/images/intro/introProfileThumb1_1.png"
                            alt="thumb"
                            class="w-[100px]"
                          />
                        </div>
                        <div class="item text-left">
                          <h6 style="text-transform: none !important;">{{ t('home1.community.title') }}</h6>
                          <p>{{ t('home1.community.subtitle') }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 order-2 order-xl-2">
                  <div class="intro-thumb -ml-24 sm:mt-0 ">
                    <div class="thumbShape1">
                      <img
                        src="/vendors/images/shape/introThumbShape1_1.png"
                        alt="thumbShape"
                      />
                    </div>
                    <div class="thumbShape2">
                      <img
                        src="/vendors/images/shape/introThumbShape1_2.png"
                        alt="thumbShape"
                      />
                    </div>
                    <img
                      class="main-thumb img-custom-anim-right wow fadeInUp futa-mockup-responsive"
                      data-wow-delay=".4s"
                      src="/img/mockups/futa-1.png"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="mt-24"></div>
  </div>
</template>

<script setup>
// Import du composable i18n avec vérification de sécurité
const { t } = useI18n()

// Vérification de sécurité pour les traductions
const safeTranslate = (key) => {
  try {
    return t(key) || key
  } catch (error) {
    console.warn(`Translation error for key: ${key}`, error)
    return key
  }
}
</script>

<style scoped>
/* Classe spécifique pour l'image responsive FUTA TRANS */
.futa-mockup-responsive {
  width: 700px !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
  margin: 0 auto !important;
  transition: all 0.3s ease !important;
  /* S'assurer que l'image reste visible après l'animation */
  opacity: 1 !important;
  clip-path: inset(0 0 0 0) !important;
  transform: translateX(0) !important;
}

/* Responsive forcé avec !important */
@media (max-width: 1400px) {
  .futa-mockup-responsive {
    width: 550px !important;
  }
}

@media (max-width: 992px) {
  .futa-mockup-responsive {
    width: 500px !important;
  }
}

@media (max-width: 768px) {
  .futa-mockup-responsive {
    width: 400px !important;
  }
}

@media (max-width: 576px) {
  .futa-mockup-responsive {
    width: 350px !important;
  }
}

@media (max-width: 480px) {
  .futa-mockup-responsive {
    width: 300px !important;
    max-width: 70% !important;
  }
}

@media (max-width: 375px) {
  .futa-mockup-responsive {
    width: 250px !important;
    max-width: 65% !important;
  }
}

/* Classe responsive pour l'alignement du contenu */
.intro-content-responsive {
  text-align: center !important;
}

/* Responsive pour les écrans moyens et plus grands */
@media (min-width: 640px) {
  .intro-content-responsive {
    text-align: left !important;
  }
}

/* S'assurer que l'image reste visible après l'animation */
.futa-mockup-responsive.img-custom-anim-right {
  animation-fill-mode: forwards !important;
}

/* Fallback pour s'assurer que l'image est toujours visible */
.futa-mockup-responsive.img-custom-anim-right,
.futa-mockup-responsive.wow.fadeInUp {
  opacity: 1 !important;
  clip-path: inset(0 0 0 0) !important;
  transform: translateX(0) !important;
  visibility: visible !important;
}

</style>
