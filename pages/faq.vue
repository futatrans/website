<template>
  <main class="py-16 md:py-24">
    <section>
      <SectionsHeaderDefault
        title_min="FAQ"
        title="Questions fréquentes"
        description="FUTA TRANS – Version 1.0"
      />
    </section>
    <section>
      <div class="container mt-10">
        <header class="mb-10 max-w-3xl mx-auto">
          <h1 class="sr-only">FAQ – Questions Fréquentes</h1>
          <p class="text-gray-700">
            Trouvez rapidement des réponses aux questions les plus posées sur FUTA TRANS.
          </p>
        </header>

        <div class="max-w-3xl mx-auto space-y-0 faq-accordion">
          <details class="faq-item">
            <summary>
              1. Comment payer un trajet ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Scannez le QR Code du conducteur ou saisissez son identifiant. Confirmez le montant, et c’est réglé !
            </div>
          </details>

          <details class="faq-item">
            <summary>
              2. Je suis conducteur. Comment encaisser ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Créez un compte FUTA TRANS, générez votre QR code ou votre code unique, et commencez à encaisser vos paiements.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              3. Mon argent est-il en sécurité ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Oui. Tous les paiements sont sécurisés avec des partenaires agréés (Mobile Money, banques). Vos données sont cryptées.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              4. Puis-je retirer l’argent reçu ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Oui. À tout moment, vous pouvez transférer votre solde vers votre compte bancaire ou portefeuille Mobile Money.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              5. Comment recharger mon portefeuille ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Vous pouvez recharger votre portefeuille FUTA TRANS en toute sécurité via :
              <ul class="list-disc pl-6 mt-2">
                <li>Mobile Money (M-Pesa, Orange Money, Airtel Money…)</li>
                <li>Carte bancaire (VISA, MasterCard)</li>
              </ul>
            </div>
          </details>

          <details class="faq-item">
            <summary>
              6. FUTA TRANS est disponible où ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Nous sommes présents à Kinshasa et en phase de déploiement dans d'autres grandes villes de la RDC.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              7. Est-ce que FUTA TRANS fonctionne sans Internet ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Une connexion Internet est nécessaire pour utiliser l’application. Cependant, certaines fonctions hors-ligne (historique, solde) sont accessibles temporairement.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              8. Puis-je annuler un paiement après envoi ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Non. Une fois le paiement confirmé, il est irréversible. Veuillez toujours vérifier les détails avant validation.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              9. Comment signaler un problème avec un conducteur ou un passager ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Utilisez la fonction de signalement dans l'application ou écrivez-nous à <a href="mailto:support@futatrans.com" class="underline">support@futatrans.com</a>.
            </div>
          </details>

          <details class="faq-item">
            <summary>
              10. FUTA TRANS propose-t-il une assistance clientèle ?
              <span class="icon" aria-hidden="true"></span>
            </summary>
            <div class="answer">
              Oui. Notre service client est joignable par email ou téléphone du lundi au samedi, de 8h à 18h.
            </div>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  alias: ["/questions-frequentes", "/aide", "/support"],
});

useHead({
  title: "FAQ — FUTA TRANS",
  meta: [
    {
      name: "description",
      content: "Questions fréquentes sur l’application FUTA TRANS.",
    },
    { name: "robots", content: "index, follow" },
  ],
});

import { onMounted, onBeforeUnmount } from 'vue'

if (process.client) {
  const onToggle = (e) => {
    const current = e.target;
    if (!current || !(current instanceof HTMLDetailsElement)) return;
    if (current.open) {
      document.querySelectorAll('.faq-item[open]').forEach((el) => {
        if (el !== current) el.removeAttribute('open');
      });
    }
  };

  onMounted(() => {
    document.addEventListener('toggle', onToggle, true);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('toggle', onToggle, true);
  });
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

.faq-item + .faq-item {
  /* handled by divide-y */
}

.faq-item > summary {
  @apply flex items-start justify-between gap-4 text-base md:text-lg font-medium cursor-pointer select-none;
  list-style: none;
}

.faq-item > summary::-webkit-details-marker {
  display: none;
}

.faq-item .icon {
  @apply inline-flex items-center justify-center w-5 h-5 text-gray-600;
  position: relative;
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
  @apply text-gray-700 leading-relaxed;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.faq-item[open] .answer {
  max-height: 500px; /* sufficient for typical answers */
  margin-top: 0.5rem;
}
</style>
