<template>
  <main class="py-24">
    <div class="container text-center">
      <p class="text-sm text-gray-500 mb-3">{{ statusCode }}</p>
      <h1 class="text-4xl md:text-5xl font-semibold">
        {{ statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}
      </h1>
      <p class="text-gray-700 mt-4 max-w-2xl mx-auto">
        {{ statusCode === 404
          ? "Désolé, la page que vous cherchez n’existe pas ou a été déplacée."
          : message || 'Veuillez réessayer ou revenir à l’accueil.' }}
      </p>

      <div class="mt-10 flex items-center justify-center gap-4">
        <button class="theme-btn" @click="goHome">
          <span>Retour à l’accueil</span>
        </button>
        <NuxtLink to="/#contact" class="text-green-700 hover:text-green-800 underline">
          Besoin d’aide ? Contactez-nous
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const statusCode = computed(() => props.error?.statusCode || 500)
const message = computed(() => props.error?.statusMessage || props.error?.message || '')

const goHome = () => {
  clearError({ redirect: '/' })
}

useHead(() => ({
  title: statusCode.value === 404
    ? 'Page non trouvée — FUTA TRANS'
    : 'Erreur — FUTA TRANS'
}))
</script>

<style scoped>
.container { @apply max-w-3xl mx-auto px-4; }
.theme-btn span { @apply flex items-center gap-2; }
</style> 