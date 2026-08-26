# Portfolio — Baptiste Paul

Portfolio codé sur mesure (HTML / CSS / JS vanilla, sans framework ni build), pensé pour être hébergé
gratuitement sur **GitHub Pages**. Thème « cyber » marine/noir/blanc avec bascule clair/sombre,
fond animé en réseau de nœuds, et un gabarit de fiche projet réutilisable.

## 🚀 Mettre le site en ligne (GitHub Pages)

1. Crée un dépôt GitHub (public, gratuit) — par exemple `portfolio`.
2. Mets tout le contenu de ce dossier à la racine du dépôt (pas dans un sous-dossier).
3. Dans GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**,
   choisis la branche `main` et le dossier `/ (root)`.
4. Après 1-2 minutes, ton site est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/portfolio/`

Aucune installation, aucun serveur, aucun coût : GitHub Pages sert directement les fichiers statiques.

## 🧩 Structure du projet

```
index.html                     Page d'accueil (hero, à propos, parcours, projets, compétences, contact)
projet.html                    Gabarit unique pour toutes les fiches projet (contenu injecté par JS)
cv.html                        Page CV (aperçu PDF intégré + téléchargement)
numerique-responsable.html     Page dédiée numérique responsable
assets/
  css/style.css                Toute la feuille de style (variables de thème en haut du fichier)
  js/main.js                   Bascule de thème, menu mobile, animations au scroll
  js/network-bg.js             Animation du fond en réseau de nœuds (hero)
  js/projets-data.js           ⭐ Contenu des 4 fiches projet — c'est ici que tu édites tes projets
  js/projet-render.js          Injecte les données de projets-data.js dans projet.html
  img/                         Images placeholder (à remplacer par les tiennes)
  cv/                          Dépose ton fichier cv.pdf ici
```

## ✏️ Ce qu'il te reste à compléter

Tout ce qui est entre crochets `[ ... ]` dans le site est un espace à remplir. Deux façons de les repérer :

- **Sur les pages** : texte en italique sur fond bleu clair (`.placeholder-copy`), ou crochets directement dans le texte.
- **Dans le code** : cherche `[` dans les fichiers pour tout lister d'un coup.

### État actuel du contenu

La plupart du contenu réel est déjà en place : photo de profil, CV, texte « À propos » (PPP), parcours, réseaux
sociaux (LinkedIn/GitHub), 5 projets rédigés avec galeries complètes, compétences, et la page numérique responsable.

Ce qu'il reste, si tu veux aller plus loin :

1. **Vraies captures d'écran** — les projets Project Legions, Humanity et Base de données sécurisée utilisent
   pour l'instant des visuels reconstitués (logos officiels + mockups de code et de résultat stylisés), en
   remplacement de vraies captures que je n'ai pas pu récupérer sur internet. Si tu as de vrais screenshots
   (gameplay, musée virtuel, tableau SCRUM...), remplace les fichiers correspondants dans
   `assets/img/projects/*_code.jpg` et `*_result.jpg`, sans changer les noms de fichiers.
2. **Formulaire de contact** — volontairement retiré (site 100% statique, sans backend). Si tu en veux un plus
   tard, un service comme [formspree.io](https://formspree.io) (gratuit jusqu'à 50 messages/mois) permet d'en
   ajouter un sans serveur.
3. **Ajouter un 6e projet** (projet tutoré, ou autre) — voir la section suivante.
4. **Compétences graphiques** — la carte « Création 3D & jeu vidéo » liste Unreal Engine 5 / Unity / Blender ;
   ajuste si tu veux mettre en avant d'autres outils.

### Ajouter un 5e projet

Duplique une entrée dans `assets/js/projets-data.js` (copie-colle un bloc entier, donne-lui un nouvel `id`),
puis ajoute une nouvelle carte dans `index.html` (section `#projets`) avec
`href="projet.html?id=TON-NOUVEL-ID"`. Le gabarit s'occupe du reste automatiquement.

## 🎨 Personnaliser les couleurs

Toutes les couleurs sont centralisées en haut de `assets/css/style.css`, dans `:root` (thème sombre)
et `[data-theme="light"]` (thème clair). Change `--accent` pour changer la couleur d'accent partout
sur le site en une seule fois.

## ♿ Accessibilité

Le site respecte automatiquement la préférence système « réduire les animations »
(`prefers-reduced-motion`) : toutes les animations et le fond animé se coupent pour les personnes
qui l'ont activée dans leur système — un point explicitement mentionné dans la grille d'évaluation
du portfolio. Le contraste, la navigation au clavier (focus visible) et la structure des titres ont
aussi été pensés en ce sens.

## 🛠️ Développement local

Aucune installation nécessaire. Pour prévisualiser en local avant de mettre en ligne :

```bash
# Depuis ce dossier
python3 -m http.server 8080
# puis ouvre http://localhost:8080 dans ton navigateur
```
