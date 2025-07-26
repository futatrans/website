<template>
  <div class="relative">
    <div id="planete" class="-top-[100px] absolute"></div>
    <section class="what-we-do-section fix section-padding">
      <div class="container mxw-1450">
        <div class="what-we-wrapper" ">
          <div class="row g-4">
            <div
              class="col-lg-6 wow fadeInUp relative"
              data-wow-delay=".3s"
              style="
                visibility: visible;
                animation-delay: 0.3s;
                animation-name: fadeInUp;
              "
            >
              <div class="thumb">
                <img src="/img/mockups/futa-person-1.jpg" class="max-h-[600px] object-cover" alt="img" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="what-we-content" style="max-width: 600px !important;">
                <div class="section-title">
                  <div
                    class="subtitle wow fadeInUp"
                    data-wow-delay=".2s"
                    style="
                      visibility: visible;
                      animation-delay: 0.2s;
                      animation-name: fadeInUp;
                    "
                  >
                    {{ t('home5.subtitle') }}
                    <img src="/vendors/images/icon/fireIcon.svg" alt="icon" />
                  </div>
                  <h2
                    class="title wow fadeInUp"
                    data-wow-delay=".4s"
                    style="
                      visibility: visible;
                      animation-delay: 0.4s;
                      animation-name: fadeInUp;
                      text-transform: none !important;
                    "
                  >
                    <span class="text-3xl sm:text-5xl">
                      {{ t('home5.title') }}
                    </span>
                  </h2>
                  <p
                    class="wow fadeInUp"
                    data-wow-delay=".6s"
                    style="
                      visibility: visible;
                      animation-delay: 0.6s;
                      animation-name: fadeInUp;
                    "
                  >
                   <span class="text-lg text-gray-800">
                    {{ t('home5.description') }}
                   </span>
                  </p>
                </div>

                <div
                      class="checklist-wrapper style1 wow fadeInUp mt-10"
                      data-wow-delay=".4s"
                    >
                      <ul
                        class="checklist style1 wow fadeInUp max-w-[500px]"
                        data-wow-delay=".2s"
                      >
                        <li 
                          v-for="(feature, index) in t('home5.features')" 
                          :key="index"
                          class="flex justify-start items-center"
                        >
                          <img src="/vendors/images/icon/checkmarkIcon.svg" alt="icon" width="25" />
                          {{ feature }}
                        </li>
                      </ul>

                      
                    </div>

                    <div class="mt-6">
                      <a href="#planete" class="flex justify-start items-center gap-2">
                        <span class="text-black border-b-4 border-[#01B180]"
                          >{{ t('home5.learnMore') }}</span
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
