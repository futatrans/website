<template>
  <main class="py-16 md:py-24">
    <section>
      <SectionsHeaderDefault
        :title_min="t('faq.header.titleMin')"
        :title="t('faq.header.title')"
        :description="t('faq.header.description')"
      />
    </section>
    <section>
      <div class="container">
        <header class="mb-10 max-w-3xl mx-auto mt-10">
          <h1 class="sr-only">FAQ – Questions Fréquentes</h1>
          <p class="text-gray-700">
            {{ t('faq.intro') }}
          </p>
        </header>

        <div class="max-w-3xl mx-auto space-y-0 faq-accordion">
          <details class="faq-item" v-for="(key, idx) in faqKeys" :key="key">
            <summary>
              {{ idx + 1 }}. {{ t('faq.questions.' + key + '.question') }}
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              <template v-if="key === 'q9'">
                {{ t('faq.questions.q9.answerPrefix') }} <a href="mailto:support@futatrans.com" class="underline">support@futatrans.com</a>.
              </template>
              <template v-else>
                {{ t('faq.questions.' + key + '.answer') }}
              </template>
            </div>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useI18n()

const faqKeys = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10']
const faqEntities = faqKeys.map((key) => ({
  '@context': undefined,
  '@type': 'Question',
  name: t('faq.questions.' + key + '.question'),
  acceptedAnswer: {
    '@type': 'Answer',
    text: key === 'q9' ? t('faq.questions.q9.answerPrefix') + ' support@futatrans.com' : t('faq.questions.' + key + '.answer')
  }
}))

definePageMeta({
  alias: ["/questions-frequentes", "/aide", "/support"],
});

useHead({
  title: 'FAQ — FUTA TRANS',
  meta: [
    { name: 'description', content: "Questions fréquentes sur FUTA TRANS : paiements, sécurité, retraits, conducteurs et usagers." },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: 'FAQ — FUTA TRANS' },
    { property: 'og:description', content: "Réponses rapides sur les paiements, la sécurité et l'usage de l'application FUTA TRANS." },
    { property: 'og:url', content: 'https://futatrans.com/faq' },
    { property: 'og:image', content: '/cover.png' },
    { property: 'og:locale', content: 'fr_FR' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'FAQ — FUTA TRANS' },
    { name: 'twitter:description', content: "Questions fréquentes : paiements, sécurité, retraits, disponibilité et assistance." },
    { name: 'twitter:image', content: '/cover.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://futatrans.com/faq' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqEntities
      })
    }
  ]
});

import { onMounted, onBeforeUnmount } from 'vue'

function animateOpen(detailsEl) {
  const content = detailsEl.querySelector('.answer')
  if (!content) return
  content.style.willChange = 'height'
  content.style.transition = 'height 300ms ease'
  content.style.height = '0px'
  // force reflow
  void content.offsetHeight
  content.style.height = content.scrollHeight + 'px'
  content.style.opacity = '1'
  content.style.transform = 'translateY(0)'
  const onEnd = (e) => {
    if (e.propertyName === 'height') {
      content.style.transition = ''
      content.style.height = 'auto'
      content.removeEventListener('transitionend', onEnd)
    }
  }
  content.addEventListener('transitionend', onEnd)
}

function animateClose(detailsEl) {
  const content = detailsEl.querySelector('.answer')
  if (!content) return
  content.style.willChange = 'height'
  content.style.transition = 'height 300ms ease'
  // set explicit current height
  content.style.height = content.scrollHeight + 'px'
  // force reflow
  void content.offsetHeight
  content.style.height = '0px'
  content.style.opacity = '0'
  content.style.transform = 'translateY(-6px)'
}

if (process.client) {
  const onToggle = (e) => {
    const current = e.target
    if (!current || !(current instanceof HTMLDetailsElement)) return

    // Close others first
    if (current.open) {
      document.querySelectorAll('.faq-item[open]').forEach((el) => {
        if (el !== current) {
          el.removeAttribute('open')
          animateClose(el)
        }
      })
      // Animate open of current
      animateOpen(current)
    } else {
      // Animate close
      animateClose(current)
    }
  }

  onMounted(() => {
    document.addEventListener('toggle', onToggle, true)
    // Ensure pre-opened items are visually correct
    document.querySelectorAll('.faq-item[open] .answer').forEach((el) => {
      el.style.height = 'auto'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('toggle', onToggle, true)
  })
}
</script>

<style scoped>
.container {
  @apply max-w-5xl mx-auto px-4;
}

.faq-accordion {
  @apply divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white;
}

.faq-item {
  @apply px-4 md:px-6 py-4;
}

.faq-item > summary {
  @apply  text-gray-500 flex items-start justify-between gap-4 text-base md:text-base font-medium cursor-pointer select-none;
  list-style: none;
  transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  border-radius: 8px;
}

.faq-item[open] > summary {
  color: #0A3A3C;
}

.faq-item > summary::-webkit-details-marker {
  display: none;
}

.faq-item .icon {
  @apply inline-flex items-center justify-center w-5 h-5 text-gray-800;
  position: relative;
  transition: transform 0.3s ease, color 0.25s ease;
}

.faq-item[open] .icon {
  color: #01B180;
  transform: rotate(0deg);
}

.faq-item .icon::before,
.faq-item .icon::after {
  content: "";
  position: absolute;
  background-color: currentColor;
  border-radius: 1px;
  transition: transform 0.2s ease;
}

/* horizontal bar */
.faq-item .icon::before {
  width: 14px;
  height: 2px;
}

/* vertical bar */
.faq-item .icon::after {
  width: 2px;
  height: 14px;
}

/* when open -> show minus */
.faq-item[open] .icon::after {
  transform: scaleY(0);
}

.answer {
  @apply text-gray-700 leading-relaxed mt-2;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

a {
  @apply text-green-600 font-medium underline;
}
</style>
