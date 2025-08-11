<template>
  <div class="py-16 md:py-24">
    <section>
      <SectionsHeaderDefault title_min="CGU" title="Conditions générales d’utilisation" description="FUTA TRANS – Version 1.0" />
    </section>

    <section class="max-w-4xl mx-auto">

      <div class="container mt-10">
      

      <header class="mb-10">
        
        <p class="text-sm text-gray-500">Dernière mise à jour : 1 Août 2025</p>
        <p class="text-gray-700 mt-3 max-w-3xl">
          Les présentes Conditions Générales d’Utilisation régissent l’accès et l’utilisation de l’application mobile FUTA TRANS par tout utilisateur, qu’il soit usager (passager) ou conducteur (prestataire de transport).
        </p>
      </header>

      <div class="prose space-y-10">
        <section id="objet">
          <h2 class="text-2xl font-semibold">1. Objet</h2>
          <p>
            FUTA TRANS est une application mobile permettant aux usagers de payer leurs trajets de transport (motos-taxis, taxis…) et aux conducteurs d’encaisser ces paiements de manière sécurisée et traçable.
          </p>
        </section>

        <section id="acceptation">
          <h2 class="text-2xl font-semibold">2. Acceptation</h2>
          <p>
            En téléchargeant, installant ou utilisant l’application, vous acceptez sans réserve les présentes CGU.
          </p>
        </section>

        <section id="inscription">
          <h2 class="text-2xl font-semibold">3. Inscription</h2>
          <ul class="list-disc pl-6 space-y-1">
            <li>L’inscription est gratuite pour tous les utilisateurs.</li>
            <li>Chaque utilisateur s’engage à fournir des informations exactes et à jour (nom, téléphone, email…).</li>
            <li>Un seul compte est autorisé par utilisateur.</li>
          </ul>
        </section>

        <section id="usagers">
          <h2 class="text-2xl font-semibold">4. Utilisation par les usagers (passagers)</h2>

          <h3 class="text-xl font-semibold mt-4">4.1 Services proposés</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Recharger son portefeuille via Mobile Money ou carte bancaire.</li>
            <li>Payer un trajet via QR Code ou identifiant du conducteur.</li>
            <li>Consulter l’historique de ses paiements.</li>
            <li>Recevoir une preuve électronique de paiement.</li>
          </ul>

          <h3 class="text-xl font-semibold mt-4">4.2 Obligations de l’usager</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Ne pas falsifier ses informations ou effectuer de paiements frauduleux.</li>
            <li>Respecter les conditions de paiement définies par l’application.</li>
            <li>Utiliser le service de manière loyale et sécurisée.</li>
          </ul>
        </section>

        <section id="conducteurs">
          <h2 class="text-2xl font-semibold">5. Utilisation par les conducteurs</h2>

          <h3 class="text-xl font-semibold mt-4">5.1 Services proposés</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Encaisser un paiement via QR Code ou identifiant unique.</li>
            <li>Suivre ses revenus journaliers, hebdomadaires et mensuels.</li>
            <li>Retirer ses fonds via Mobile Money ou compte bancaire.</li>
            <li>Accéder à des programmes exclusifs (leasing, formation, etc.).</li>
            <li>Générer des relevés pour preuve de revenus.</li>
          </ul>

          <h3 class="text-xl font-semibold mt-4">5.2 Obligations du conducteur</h3>
          <ul class="list-disc pl-6 space-y-1">
            <li>Fournir des informations véridiques sur son identité et son activité.</li>
            <li>Utiliser l’application uniquement pour des prestations réelles de transport.</li>
            <li>Respecter les règles de conduite, de sécurité et de courtoisie envers les passagers.</li>
          </ul>
        </section>

        <section id="acces-suspension">
          <h2 class="text-2xl font-semibold">6. Accès et suspension des comptes</h2>
          <p>FUTA TRANS se réserve le droit de suspendre ou clôturer tout compte utilisateur en cas :</p>
          <ul class="list-disc pl-6 space-y-1">
            <li>D’usage frauduleux ou illicite de l’application.</li>
            <li>De manquement grave aux présentes CGU.</li>
            <li>De comportement menaçant, injurieux ou dangereux envers d’autres utilisateurs.</li>
          </ul>
        </section>

        <section id="disponibilite">
          <h2 class="text-2xl font-semibold">7. Disponibilité du service</h2>
          <p>
            L’application est accessible 24h/24, 7j/7, sauf cas de force majeure, maintenance ou incident technique indépendant de notre volonté. Aucune indemnité ne pourra être réclamée en cas d’interruption temporaire.
          </p>
        </section>

        <section id="responsabilite">
          <h2 class="text-2xl font-semibold">8. Responsabilité</h2>
          <p>
            FUTA TRANS ne peut être tenu responsable des litiges entre usagers et conducteurs hors de l’application.
          </p>
        </section>

        <section id="donnees">
          <h2 class="text-2xl font-semibold">9. Protection des données</h2>
          <p>
            Les données collectées sont traitées conformément à notre Politique de confidentialité. L’utilisateur peut à tout moment exercer ses droits d’accès, de modification ou de suppression de ses données.
          </p>
        </section>

        <section id="modifications">
          <h2 class="text-2xl font-semibold">10. Modification des CGU</h2>
          <p>
            FUTA TRANS peut modifier à tout moment les présentes CGU. Toute modification sera notifiée via l’application. En continuant d’utiliser l’application, l’utilisateur accepte les nouvelles conditions.
          </p>
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
    { name: 'description', content: 'Lisez les conditions générales d’utilisation de FUTA TRANS.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
.container { @apply max-w-5xl mx-auto px-4; }
h1, h2, h3, h4, h5, h6 {
  @apply mb-4;

  text-transform: none !important;
}
</style> 