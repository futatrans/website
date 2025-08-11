<template>
  <main class="py-16 md:py-24">
    <section>
      <SectionsHeaderDefault
        :title_min="t('policy.header.titleMin')"
        :title="t('policy.header.title')"
        :description="t('policy.header.description')"
      />
    </section>
    <div class="container">
      <div class="max-w-3xl mx-auto mt-10">
        <header class="mb-10">
          <p class="text-sm text-gray-500">{{ t('policy.version') }}</p>
          <p class="text-gray-700 mt-3 max-w-3xl">
            {{ t('policy.intro1') }}
          </p>
          <p class="text-gray-700 mt-3 max-w-3xl">
            {{ t('policy.intro2') }}
          </p>
        </header>
        <div class="prose space-y-10">
          <section id="donnees-collectees">
            <h2 class="text-2xl font-semibold">{{ t('policy.sections.collectedData.title') }}</h2>
            <p>
              {{ t('policy.sections.collectedData.intro') }}
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>{{ t('policy.sections.collectedData.items.personal') }}</li>
              <li>{{ t('policy.sections.collectedData.items.payment') }}</li>
              <li>{{ t('policy.sections.collectedData.items.usage') }}</li>
              <li>{{ t('policy.sections.collectedData.items.technical') }}</li>
              <li>{{ t('policy.sections.collectedData.items.location') }}</li>
            </ul>
          </section>

          <section id="utilisation-des-donnees">
            <h2 class="text-2xl font-semibold">{{ t('policy.sections.useOfData.title') }}</h2>
            <p>{{ t('policy.sections.useOfData.intro') }}</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>{{ t('policy.sections.useOfData.items.execution') }}</li>
              <li>{{ t('policy.sections.useOfData.items.security') }}</li>
              <li>{{ t('policy.sections.useOfData.items.improvement') }}</li>
              <li>{{ t('policy.sections.useOfData.items.communication') }}</li>
              <li>{{ t('policy.sections.useOfData.items.legal') }}</li>
              <li>{{ t('policy.sections.useOfData.items.offers') }}</li>
            </ul>
          </section>

          <section id="partage-des-donnees">
            <h2 class="text-2xl font-semibold">{{ t('policy.sections.sharing.title') }}</h2>
            <p>{{ t('policy.sections.sharing.intro') }}</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>{{ t('policy.sections.sharing.items.providers') }}</li>
              <li>{{ t('policy.sections.sharing.items.partners') }}</li>
              <li>{{ t('policy.sections.sharing.items.authorities') }}</li>
            </ul>
          </section>

          <section id="securite">
            <h2 class="text-2xl font-semibold">{{ t('policy.sections.security.title') }}</h2>
            <p>{{ t('policy.sections.security.text') }}</p>
          </section>

          <section id="vos-droits">
            <h2 class="text-2xl font-semibold">{{ t('policy.sections.rights.title') }}</h2>
            <p>{{ t('policy.sections.rights.intro') }}</p>
            <ul class="list-disc pl-6 space-y-2">
              <li>{{ t('policy.sections.rights.items.access') }}</li>
              <li>{{ t('policy.sections.rights.items.rectification') }}</li>
              <li>{{ t('policy.sections.rights.items.erasure') }}</li>
              <li>{{ t('policy.sections.rights.items.withdraw') }}</li>
            </ul>
            <p>
              {{ t('policy.sections.rights.contactText') }}
              <a :href="`mailto:${t('policy.emails.privacy')}`">{{ t('policy.emails.privacy') }}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  alias: [
    "/politique-de-confidentialite",
    "/politique-confidentialite",
    "/privacy-policy",
  ],
});

useHead({
  title: 'Politique de confidentialité — FUTA TRANS',
  meta: [
    { name: 'description', content: "Découvrez comment FUTA TRANS collecte, utilise et protège vos données personnelles. Politique conforme aux meilleures pratiques de sécurité et de confidentialité." },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'Politique de confidentialité — FUTA TRANS' },
    { property: 'og:description', content: "Découvrez comment FUTA TRANS collecte, utilise et protège vos données personnelles." },
    { property: 'og:url', content: 'https://futatrans.com/policy' },
    { property: 'og:image', content: '/cover.png' },
    { property: 'og:locale', content: 'fr_FR' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Politique de confidentialité — FUTA TRANS' },
    { name: 'twitter:description', content: "Découvrez comment FUTA TRANS collecte, utilise et protège vos données personnelles." },
    { name: 'twitter:image', content: '/cover.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://futatrans.com/policy' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Politique de confidentialité — FUTA TRANS',
        url: 'https://futatrans.com/policy',
        inLanguage: 'fr-FR',
        isPartOf: {
          '@type': 'WebSite',
          name: 'FUTA TRANS',
          url: 'https://futatrans.com'
        },
        description: "Politique de confidentialité de FUTA TRANS : collecte, usage, partage et protection des données personnelles.",
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
});

const { t } = useI18n()
</script>

<style scoped>
.container {
  @apply max-w-5xl mx-auto px-4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply mb-4;

  text-transform: none !important;
}

a {
  @apply text-green-600 font-medium underline;
}
</style>
