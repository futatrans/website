<template>

<section class="work-process-section section-padding fix">
        <div class="work-process-container-wrapper style1">
            <div class="container">
                <div class="section-title text-center mxw-565 mx-auto">
                    <div class="subtitle wow fadeInUp" data-wow-delay=".2s">
                        {{ t('home3.subtitle') }} <img src="/vendors/images/icon/fireIcon.svg" alt="icon">
                    </div>
                    <h2 class="title wow fadeInUp" data-wow-delay=".4s" style="text-transform: none !important;">{{ t('home3.title') }}</h2>
                </div>
                <div class="work-process-wrapper style1">
                    <div class="shape"><img src="/vendors/images/shape/workProcessShape1_1.png" alt="shape"></div>
                    <div class="row">
                        <div 
                            v-for="(step, index) in t('home3.steps')" 
                            :key="index"
                            class="col-xl-4"
                        >
                            <div 
                                :class="[
                                    'work-process-box style1 wow fadeInUp',
                                    index === 1 ? 'child2' : ''
                                ]"
                                :data-wow-delay="`${0.2 + (index * 0.2)}s`"
                            >
                                <div class="step">{{ step.step }}</div>
                                <div class="title">{{ step.title }}</div>
                                <div class="text">{{ step.description }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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