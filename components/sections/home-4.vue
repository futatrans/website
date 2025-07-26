<template>
  <div class="relative">
    <div id="conducteurs" class="-top-[100px] absolute"></div>
    <section class="advantage-section fix">
      <div class="advantage-container-wrapper style1">
        <div class="container">
          <div
            class="advantage-wrapper style1 section-padding overflow-hidden"
            style="background-color: #0a3a3c0c"
          >
            <div class="container xl:mx-[200px]">
              <div class="row gy-5 d-flex align-items-center">
                <div class="col-xl-6 order-2 order-xl-1">
                  <div class="advantage-content">
                    <div
                      class="section-title wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <div class="subtitle">
                        {{ t('home4.subtitle') }}
                        <img
                          src="/vendors/images/icon/fireIcon.svg"
                          alt="icon"
                        />
                      </div>
                      <h2 class="title" style="text-transform: none !important">
                        <span class="text-3xl sm:text-5xl">
                          {{ t('home4.title') }}
                        </span>
                      </h2>
                      <p class="section-desc">
                        <span class="text-lg text-gray-800">
                          {{ t('home4.description') }}
                        </span>
                      </p>
                    </div>
                    <div
                      class="checklist-wrapper style1 wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <ul
                        class="checklist style1 wow fadeInUp max-w-[500px]"
                        data-wow-delay=".2s"
                      >
                        <li 
                          v-for="(feature, index) in t('home4.features')" 
                          :key="index"
                          class="flex justify-start items-center"
                        >
                          <img
                            src="/vendors/images/icon/checkmarkIcon.svg"
                            alt="icon"
                            width="25"
                          />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <a href="#conducteurs" class="flex justify-start items-center gap-2">
                        <span class="text-black border-b-4 border-[#01B180]"
                          >{{ t('home4.learnMore') }}</span
                        >

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
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 order-1 order-xl-2">
                  <div class="advantage-thumb">
                    <div
                      class="thumb1 img-custom-anim-top wow fadeInDown"
                      data-wow-delay=".8s"
                      data-tilt
                      data-tilt-max="10"
                    >
                      <img
                        src="/img/mockups/IPhone2.png"
                        class="w-[250px] lg:w-[500px] xl:w-[600px] xl:ml-24"
                        alt="thumb"
                      />
                    </div>

                    <div
                      class="shape1"
                      style="
                        width: 200px !important;
                        max-width: 200px !important;
                      "
                    >
                      <img
                        src="/vendors/images/shape/advanceThumbShape1_1.png"
                        alt="shape"
                        class="-ml-[200px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
