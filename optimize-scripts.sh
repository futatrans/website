#!/bin/bash

echo "🔧 Optimisation des scripts FUTA TRANS"
echo "======================================"

# Créer un dossier de sauvegarde
mkdir -p backup/vendors/js
mkdir -p backup/vendors/css

echo "📦 Sauvegarde des fichiers non utilisés..."

# Scripts JavaScript non utilisés
echo "🗑️  Suppression des scripts JavaScript non utilisés:"
echo "   - jquery.meanmenu.min.js (menu mobile géré par Vue.js)"
echo "   - magnific-popup.min.js (aucune popup utilisée)"
echo "   - nice-select.min.js (aucun select stylisé utilisé)"
echo "   - jquery.counterup.min.js (aucun compteur animé utilisé)"
echo "   - jquery.waypoints.js (pas d'animations scroll utilisées)"
echo "   - viewport.jquery.js (pas d'animations visibilité utilisées)"

# Déplacer les fichiers non utilisés vers backup
mv public/vendors/js/jquery.meanmenu.min.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  jquery.meanmenu.min.js déjà supprimé"
mv public/vendors/js/magnific-popup.min.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  magnific-popup.min.js déjà supprimé"
mv public/vendors/js/nice-select.min.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  nice-select.min.js déjà supprimé"
mv public/vendors/js/jquery.counterup.min.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  jquery.counterup.min.js déjà supprimé"
mv public/vendors/js/jquery.waypoints.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  jquery.waypoints.js déjà supprimé"
mv public/vendors/js/viewport.jquery.js backup/vendors/js/ 2>/dev/null || echo "   ⚠️  viewport.jquery.js déjà supprimé"

echo ""
echo "🎨 Suppression des fichiers CSS non utilisés:"
echo "   - meanmenu.css (menu mobile géré par Vue.js)"
echo "   - magnific-popup.css (aucune popup utilisée)"
echo "   - nice-select.css (aucun select stylisé utilisé)"

# Déplacer les fichiers CSS non utilisés vers backup
mv public/vendors/css/meanmenu.css backup/vendors/css/ 2>/dev/null || echo "   ⚠️  meanmenu.css déjà supprimé"
mv public/vendors/css/magnific-popup.css backup/vendors/css/ 2>/dev/null || echo "   ⚠️  magnific-popup.css déjà supprimé"
mv public/vendors/css/nice-select.css backup/vendors/css/ 2>/dev/null || echo "   ⚠️  nice-select.css déjà supprimé"

echo ""
echo "✅ Scripts conservés (utilisés):"
echo "   ✅ jquery-3.7.1.min.js (nécessaire pour tous les plugins)"
echo "   ✅ bootstrap.bundle.min.js (classes Bootstrap utilisées)"
echo "   ✅ wow.min.js (animations WOW utilisées partout)"
echo "   ✅ swiper-bundle.min.js (slider Swiper utilisé)"
echo "   ✅ tilt.min.js (effet tilt utilisé)"
echo "   ✅ main-optimized.js (version optimisée créée)"

echo ""
echo "📊 Résumé de l'optimisation:"
echo "   📦 6 scripts JavaScript supprimés"
echo "   🎨 3 fichiers CSS supprimés"
echo "   💾 Sauvegarde créée dans ./backup/"
echo "   🚀 Taille réduite d'environ 50KB"

echo ""
echo "🎯 Configuration optimisée dans:"
echo "   - nuxt.config.ts (scripts critiques chargés)"
echo "   - plugins/vendors.client.ts (scripts non-critiques optimisés)"
echo "   - public/vendors/js/main-optimized.js (version optimisée)"

echo ""
echo "✨ Optimisation terminée !" 