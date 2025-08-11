<template>
  <div class="relative">
    <div id="usagers" class="-top-[200px] absolute"></div>
    <!-- About Us Section S T A R T -->
    <section class="about-section fix -mt-16">
      <div class="about-container-wrapper style1">
        <div class="container ">
          <div class="about-wrapper style1">
            <div class="row gy-5 gx-60">
              <div class="col-xl-6 ">
                <div class="about-thumb">
                  <div class="bg opacity-20"></div>
                  <div class="thumbShape1 d-none d-xxl-block cir36">
                    <img
                      src="/vendors/images/shape/aboutThumbShape1_1.png"
                      alt="shape"
                    />
                  </div>
                  <div class="thumbShape2 d-none d-xxl-block cir36">
                    <img
                      src="/vendors/images/shape/aboutThumbShape1_2.png"
                      alt="shape"
                    />
                  </div>
                  <div class="thumbShape3 d-none d-xxl-block cir36 float-bob-y">
                    <img
                      src="/vendors/images/shape/aboutThumbShape1_3.png"
                      alt="shape"
                    />
                  </div>
                  <div class="thumbShape4 d-none d-xxl-block cir36">
                    <img
                      src="/vendors/images/shape/aboutThumbShape1_4.png"
                      alt="shape"
                    />
                  </div>
                  <div class="main-thumb">
                    <img
                      src="/img/mockups/futa-person.png"
                      class="w-[250px] lg:w-[300px] xl:w-auto"
                      alt="thumb"
                    />
                  </div>
                  <div class="absolute-thumb float-bob-x">
                    <img
                      src="/img/mockups/qr.png"
                      class="w-[100px] sm:w-[250px]"
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="about-content">
                  <div class="section-title">
                    <div
                      class="subtitle wow fadeInUp"
                      data-wow-delay=".2s"
                      style="text-transform: none !important"
                    >
                      {{ t('home2.subtitle') }}
                      <img src="/vendors/images/icon/fireIcon.svg" alt="icon" />
                    </div>
                    <h2
                      class="title wow fadeInUp"
                      data-wow-delay=".4s"
                      style="text-transform: none !important"
                    >
                      <span class="text-3xl sm:text-5xl">
                        {{ t('home2.title') }}
                      </span>
                    </h2>
                    <p
                      class="section-desc wow fadeInUp max-w-[550px]"
                      data-wow-delay=".6s"
                    >
                      <span class="text-lg text-gray-800">
                        {{ t('home2.description') }}
                      </span>
                    </p>
                  </div>
                  <ul
                    class="checklist style1 wow fadeInUp max-w-[500px]"
                    data-wow-delay=".2s"
                  >
                    <li 
                      v-for="(feature, index) in t('home2.features')" 
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

                  <div class="mt-10">
                    <a href="#usagers" class="flex justify-start items-center gap-2">
                      <span class="text-black border-b-4 border-[#01B180]"
                        >{{ t('home2.learnMore') }}</span
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
