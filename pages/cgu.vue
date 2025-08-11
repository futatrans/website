<template>
  <div class="py-16 md:py-24">
    <section>
      <SectionsHeaderDefault :title_min="t('cgu.header.titleMin')" :title="t('cgu.header.title')" :description="t('cgu.header.description')" />
    </section>

    <section class="max-w-4xl mx-auto">
      <div class="container">
        <header class="mb-10  mt-10">
          <p class="text-sm text-gray-500">{{ t('cgu.lastUpdate') }}</p>
          <p class="text-gray-700 mt-3 max-w-3xl">
            {{ t('cgu.intro') }}
          </p>
        </header>

        <div class="prose space-y-10">
          <section id="objet">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.object.title') }}</h2>
            <p>{{ t('cgu.sections.object.text') }}</p>
          </section>

          <section id="acceptation">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.acceptance.title') }}</h2>
            <p>{{ t('cgu.sections.acceptance.text') }}</p>
          </section>

          <section id="inscription">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.registration.title') }}</h2>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.registration.items.free') }}</li>
              <li>{{ t('cgu.sections.registration.items.accurate') }}</li>
              <li>{{ t('cgu.sections.registration.items.single') }}</li>
            </ul>
          </section>

          <section id="usagers">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.passengers.title') }}</h2>

            <h3 class="text-xl font-semibold mt-4">{{ t('cgu.sections.passengers.servicesTitle') }}</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.passengers.services.recharge') }}</li>
              <li>{{ t('cgu.sections.passengers.services.pay') }}</li>
              <li>{{ t('cgu.sections.passengers.services.history') }}</li>
              <li>{{ t('cgu.sections.passengers.services.receipt') }}</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">{{ t('cgu.sections.passengers.obligationsTitle') }}</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.passengers.obligations.noFraud') }}</li>
              <li>{{ t('cgu.sections.passengers.obligations.paymentRules') }}</li>
              <li>{{ t('cgu.sections.passengers.obligations.fairUse') }}</li>
            </ul>
          </section>

          <section id="conducteurs">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.drivers.title') }}</h2>

            <h3 class="text-xl font-semibold mt-4">{{ t('cgu.sections.drivers.servicesTitle') }}</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.drivers.services.collect') }}</li>
              <li>{{ t('cgu.sections.drivers.services.track') }}</li>
              <li>{{ t('cgu.sections.drivers.services.withdraw') }}</li>
              <li>{{ t('cgu.sections.drivers.services.programs') }}</li>
              <li>{{ t('cgu.sections.drivers.services.statements') }}</li>
            </ul>

            <h3 class="text-xl font-semibold mt-4">{{ t('cgu.sections.drivers.obligationsTitle') }}</h3>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.drivers.obligations.truth') }}</li>
              <li>{{ t('cgu.sections.drivers.obligations.realUse') }}</li>
              <li>{{ t('cgu.sections.drivers.obligations.courtesy') }}</li>
            </ul>
          </section>

          <section id="acces-suspension">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.accounts.title') }}</h2>
            <p>{{ t('cgu.sections.accounts.intro') }}</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>{{ t('cgu.sections.accounts.items.fraud') }}</li>
              <li>{{ t('cgu.sections.accounts.items.breach') }}</li>
              <li>{{ t('cgu.sections.accounts.items.behavior') }}</li>
            </ul>
          </section>

          <section id="disponibilite">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.availability.title') }}</h2>
            <p>{{ t('cgu.sections.availability.text') }}</p>
          </section>

          <section id="responsabilite">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.liability.title') }}</h2>
            <p>{{ t('cgu.sections.liability.text') }}</p>
          </section>

          <section id="donnees">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.data.title') }}</h2>
            <p>{{ t('cgu.sections.data.text') }}</p>
          </section>

          <section id="modifications">
            <h2 class="text-2xl font-semibold">{{ t('cgu.sections.changes.title') }}</h2>
            <p>{{ t('cgu.sections.changes.text') }}</p>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  alias: [
    '/conditions-generales-d-utilisation',
    '/conditions-generales-utilisation',
    '/terms'
  ]
})

useHead({
  title: 'Conditions Générales d’Utilisation — FUTA TRANS',
  meta: [
    { name: 'description', content: "Conditions générales d’utilisation de FUTA TRANS : règles, responsabilités, protection des données et modalités d’usage de l’application." },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Conditions Générales d’Utilisation — FUTA TRANS' },
    { property: 'og:description', content: "Conditions générales d’utilisation de FUTA TRANS : règles, responsabilités et modalités d’usage." },
    { property: 'og:url', content: 'https://futatrans.com/cgu' },
    { property: 'og:image', content: '/cover.png' },
    { property: 'og:locale', content: 'fr_FR' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Conditions Générales d’Utilisation — FUTA TRANS' },
    { name: 'twitter:description', content: "CGU FUTA TRANS : règles d’usage, responsabilités et protection des données." },
    { name: 'twitter:image', content: '/cover.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://futatrans.com/cgu' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Conditions Générales d’Utilisation — FUTA TRANS',
        url: 'https://futatrans.com/cgu',
        inLanguage: 'fr-FR',
        isPartOf: {
          '@type': 'WebSite',
          name: 'FUTA TRANS',
          url: 'https://futatrans.com'
        },
        description: "CGU de FUTA TRANS : modalités d’utilisation, responsabilités et cadre légal.",
        dateModified: '2025-08-01',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://futatrans.com/cover.png',
          width: 1200,
          height: 630
        }
      })
    }
  ]
})

const { t } = useI18n()
</script>

<style scoped>
.container { @apply max-w-5xl mx-auto px-4; }
h1, h2, h3, h4, h5, h6 {
  @apply mb-4;

  text-transform: none !important;
}

a {
  @apply text-green-600 font-medium underline;
}
</style> 