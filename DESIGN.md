---
name: PL-lect'
description: Un pupitre de lecture calme et sobre, qui s'efface devant le texte et devant l'élève.
colors:
  sage: "#2f6f63"
  sage-on: "#ffffff"
  sage-soft: "#dee8e6"
  sage-light: "#6fbfae"
  sage-light-on: "#182422"
  paper-grey: "#eff2f0"
  card-white: "#ffffff"
  wash-grey: "#e4e9e6"
  hairline: "#d7ddda"
  hairline-strong: "#c3cbc7"
  deep-ink: "#253433"
  quiet-ink: "#52635f"
  reading-yellow: "#FFD83D"
  alert-brick: "#a8402f"
  alert-brick-light: "#d98070"
  night-green: "#182422"
  night-card: "#202f2c"
  night-wash: "#24322f"
  night-hairline: "#33443f"
  night-ink: "#eaf1ee"
  night-quiet-ink: "#9fb0ac"
typography:
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
  headline:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  display:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  figure:
    fontFamily: "Lexend, Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  field: "10px"
  control: "14px"
  panel: "16px"
  card: "24px"
  pill: "999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "18px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-on}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
    height: "44px"
  button-launch:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-on}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 26px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.wash-grey}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
    height: "44px"
  button-danger:
    backgroundColor: "{colors.wash-grey}"
    textColor: "{colors.alert-brick}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
    height: "44px"
  card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.card}"
    padding: "18px 22px"
  panel-inset:
    backgroundColor: "{colors.paper-grey}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.panel}"
    padding: "13px 16px"
  field:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.deep-ink}"
    rounded: "{rounded.field}"
    padding: "7px 10px"
    height: "44px"
  profile-chip:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "44px"
  profile-chip-active:
    backgroundColor: "{colors.sage-soft}"
    textColor: "{colors.sage}"
  nav-tab:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "48px"
  nav-tab-active:
    backgroundColor: "{colors.sage-soft}"
    textColor: "{colors.sage}"
---

# Design System: PL-lect'

## Overview

**Creative North Star: "Le pupitre de l'atelier"**

PL-lect' est un outil de travail posé sur un établi calme : des surfaces unies, un seul vert, des coins larges et rassurants, rien qui réclame l'attention. L'interface de préparation s'efface devant ce qui compte, le texte de l'élève, et le pupitre plein écran s'efface devant la lecture. Le geste de l'enseignante doit être sûr, jamais décoratif.

Le système tient en deux écrans qui n'ont pas la même loi. L'écran de préparation est dense mais rangé : trois colonnes de cartes douces sur un fond gris-vert, où l'on règle, choisit et lance. Le pupitre est son opposé : un fond uni choisi par l'enseignante, le texte en très grand, une bande de lecture, et c'est tout. Tout ce que l'élève voit au beamer appartient au texte, pas à l'interface.

La douceur est le ton : bords arrondis, bordures d'un pixel, ombre légère, peu de contraste entre surfaces voisines, mais un contraste franc pour tout ce qui se lit. L'interface est claire ou sombre selon le système, au choix de l'enseignante, avec les mêmes rapports de valeur.

**Key Characteristics:**
- Un seul vert d'interface, rare ; le jaune et le rouge restent des signaux.
- Cartes à 24 px, boutons en pilule, contrôles à 14 px : une famille de formes douces.
- Texte courant à 18 px, légendes à 16 px au minimum, cibles de 44 px.
- Le pupitre ne montre que le texte et la bande de lecture.
- Atkinson Hyperlegible pour l'interface, Lexend pour les chiffres, la police de lecture choisie par l'enseignante pour le texte.

## Colors

Un vert sauge posé sur des gris tirant sur le vert. L'ensemble est calme et tamisé, sans couleur secondaire d'interface.

### Primary
- **Sauge** (#2f6f63) : la couleur d'action. Bouton « Lancer », onglet et choix actifs (en fond doux), focus, curseurs, liens. En mode sombre elle devient **Sauge clair** (#6fbfae) avec une encre sombre (#182422) dessus.
- **Sauge doux** (#dee8e6, mélange de 16 % de sauge sur la carte) : fond d'un choix actif ou sélectionné. Le texte et le contour restent en sauge.

### Secondary
- **Jaune repère** (#FFD83D) : la bande de lecture sur le pupitre et le marqueur de mots dans le texte codé. Il est appliqué en transparence (45 % en clair, 30 % en sombre) sur le fond du pupitre, d'où un jaune pâle à l'écran. Il n'est jamais utilisé comme couleur d'interface.

### Tertiary
- **Brique d'alerte** (#a8402f ; #d98070 en sombre) : actions destructrices (« Supprimer », « Retirer ») et lecture en cours d'enregistrement. Jamais pour décorer.

### Neutral
- **Gris papier** (#eff2f0) : le fond de page et l'intérieur des sections repliables.
- **Blanc carte** (#ffffff) : les cartes et les champs.
- **Gris lavé** (#e4e9e6) : les boutons secondaires et les fonds de contrôle.
- **Filet** (#d7ddda) et **Filet renforcé** (#c3cbc7) : bordures de 1 px.
- **Encre profonde** (#253433) : texte principal.
- **Encre discrète** (#52635f) : texte secondaire, libellés, légendes ; 5,2:1 sur gris lavé.
- **Vert nuit** (#182422), **Carte nuit** (#202f2c), **Lavis nuit** (#24322f), **Filet nuit** (#33443f), **Encre nuit** (#eaf1ee), **Encre discrète nuit** (#9fb0ac) : les équivalents du mode sombre, aux mêmes rapports de valeur.

### Named Rules
**The One Green Rule.** Le sauge est la seule couleur d'interface. Le jaune appartient au repère de lecture, le rouge au danger et à l'enregistrement. Une deuxième teinte d'accent est un défaut.

**The Reading Palette Rule.** Les couleurs du texte codé (syllabes rouges et bleues, lettres muettes grises, sons) sont des palettes de lecture, séparées des tokens d'interface : un jeu pour fond clair, un pour fond sombre, choisi automatiquement. Elles ne servent jamais ailleurs.

**The Contrast Floor Rule.** Texte courant au moins 4,5:1 ; le texte projeté vise 7:1 et l'interface prévient quand le contraste du pupitre est plus faible.

## Typography

**Display Font:** Atkinson Hyperlegible (avec Segoe UI, system-ui)
**Body Font:** Atkinson Hyperlegible (avec Segoe UI, system-ui)
**Figures Font:** Lexend (chiffres, minuteurs, MCM)
**Reading Font (le texte lu par l'élève) :** au choix de l'enseignante, Luciole par défaut, puis Atkinson Hyperlegible, Andika, Lexend, Arial, Verdana ou OpenDyslexic.

**Character:** Une famille unique pour toute l'interface, dessinée pour la lisibilité ; la hiérarchie vient du poids et de la taille, pas du changement de police. Lexend ne sert qu'aux chiffres, en graisse 700, avec chiffres tabulaires.

### Hierarchy
- **Display** (700, `clamp(1.7rem, 3.4vw, 2.5rem)`, 1.1) : le nom de l'outil dans l'en-tête.
- **Headline** (700, 1.25rem, 1.2) : titres des cartes (« Textes », « Préparer la lecture », « Réglages »). 1,5rem pour le titre du guide.
- **Title** (700, 1rem) : titres des sections repliables et libellés de champs.
- **Body** (400, 18px, 1.5) : texte courant. Le guide monte à 1,125rem et se limite à 68 caractères par ligne.
- **Label** (700, 1rem) : boutons, onglets, légendes de réglages, en-têtes de tableau.
- **Figure** (Lexend 700, 34px pour les cartes de résultats, 18px dans les tableaux) : MCM et durées.
- **Reading** (police au choix, 64 px par défaut, interligne 1,9, 0,08 em entre les lettres) : le texte projeté. Taille réglable de 24 à 160 px.

### Named Rules
**The Sixteen Rule.** Aucun texte sous 16 px dans l'interface. Les légendes secondaires descendent à 16 px, jamais plus bas.

**The Plain Case Rule.** Pas de majuscules espacées, pas d'italique pour des passages, pas de texte justifié. La hiérarchie passe par le poids et la taille.

## Layout

La préparation est une grille de trois colonnes : bibliothèque de textes (260 px), centre souple, réglages (380 px), séparées de 18 px. Sous 1220 px, la bibliothèque passe au-dessus du reste ; sous 860 px, tout s'empile sur une colonne, et la barre de lancement devient une barre fixe en bas de l'écran, avec la zone sûre de l'appareil. Le rythme intérieur est de 18 à 22 px pour les cartes, 12 px entre champs, 6 à 8 px dans un groupe serré.

Le pupitre est un autre espace : une colonne de texte centrée, avec une marge minimale de 24 à 72 px selon la taille, la zone lue placée en haut, au tiers ou au milieu de l'écran, et une barre de commandes flottante, jamais recouvrante pour la zone lue.

Points de rupture : 620 px, 860 px, 1220 px. L'interface s'adapte à la hauteur : sous 800 px, les sous-titres du guide disparaissent.

## Elevation & Depth

Les surfaces sont posées sur un fond uni, séparées par un filet de 1 px et une ombre douce à deux couches. La profondeur est un murmure : la carte se détache du fond, sans flotter. Le mode sombre garde la même structure avec une ombre plus dense. Aucune ombre dure, aucun halo coloré.

### Shadow Vocabulary
- **Carte** (`box-shadow: 0 1px 2px rgba(37,52,51,.06), 0 10px 24px rgba(37,52,51,.08)`) : cartes, modales, barre de commandes du pupitre. En sombre : `0 1px 2px rgba(0,0,0,.35), 0 12px 28px rgba(0,0,0,.35)`.

### Named Rules
**The Hairline-and-Soft Rule.** Le filet de 1 px et l'ombre douce vont ensemble sur les cartes : c'est le choix du système, assumé, pas un oubli.

**The Flat Content Rule.** Le contenu à l'intérieur d'une carte (sections repliables, aperçu, tableaux) reste plat : seul le fond gris papier le distingue, jamais une ombre.

## Shapes

Une famille de coins larges, du plus intime au plus généreux : **champs** à 10 px, **contrôles** à 14 px (profils, onglets, liste de textes), **panneaux** intérieurs à 16 px, **cartes** à 24 px, **pilules** à 999 px pour les boutons, choix et étiquettes. Les cartes d'écran ont une bordure d'un pixel. Les touches clavier gardent un bord inférieur plus épais (`2px`) pour imiter une touche.

Rien n'est anguleux. Les icônes sont des traits arrondis, de 1,8 px, en une seule graisse.

## Components

### Buttons
- **Shape:** pilule (999 px), hauteur minimale de 44 px, et de 56 px pour le lancement.
- **Primary:** fond sauge, texte blanc (encre sombre en mode sombre), police 1rem 700 ; « Lancer au pupitre » monte à 1,25rem avec un padding de 14 px 26 px.
- **Hover / Focus:** le contour passe au sauge au survol ; le bouton primaire s'éclaircit légèrement. Le focus est un anneau de 3 px sauge avec 2 px de marge ; sur le bouton primaire, l'anneau passe à l'encre pour rester visible.
- **Secondary:** fond gris lavé, filet de 1 px, texte encre profonde.
- **Danger:** fond rouge très doux, texte rouge mêlé d'encre, contour rouge atténué. Un bouton « ghost » sans fond ni bordure existe pour les liens d'action discrets.

### Chips and Segmented Controls
- **Profils de réglage :** boutons à 14 px de rayon, fond blanc et filet ; l'actif prend le sauge doux, un contour sauge et un texte sauge, signalé aussi par `aria-pressed`.
- **Segments :** une piste en pilule gris papier avec 3 px de marge ; le segment actif prend le même traitement doux.
- **Étiquettes de niveau :** petites pilules « N1 », « N3 », contour sauge atténué, chiffres tabulaires.

### Cards / Containers
- **Corner Style:** 24 px.
- **Background:** blanc carte (carte nuit en sombre).
- **Shadow Strategy:** ombre « Carte », avec un filet de 1 px (voir Elevation).
- **Border:** `1px solid` Filet.
- **Internal Padding:** 18 px 22 px pour l'en-tête, 22 px sur les côtés pour le contenu.
- **Sections repliables:** fond gris papier, 16 px de rayon, chevron de 8 px qui pivote à 0,15 s.

### Inputs / Fields
- **Style:** fond blanc, filet de 1 px, 10 px de rayon, hauteur de 44 px, texte en 700.
- **Focus:** anneau de 3 px sauge ; le champ de titre sans bordure fait apparaître un filet pointillé au survol.
- **Curseurs:** `accent-color` sauge, 28 px de haut (44 px au toucher) ; la valeur est affichée en chiffres tabulaires.
- **Error / Disabled:** les erreurs sont écrites en toutes lettres près du champ, jamais par la seule couleur.

### Navigation
- **Style:** onglets en 14 px de rayon, 48 px de haut, avec icône de 22 px et libellé écrit. L'onglet actif prend le sauge doux ; les outils (Aide, Thème) sont séparés par un filet vertical. Sous 860 px, les onglets se resserrent et passent à la ligne si besoin.

### Pupitre (composant signature)
Le plein écran de lecture : un fond uni (Papier, Crème, Sombre ou Noir, au choix), le texte en très grand, la bande de lecture (surligneur jaune ou cadre) sur 1 à 3 lignes, le reste du texte atténué en gris. La barre de commandes flottante est une carte de 22 px de rayon, en trois groupes de largeur stable, qui se masque ; les boutons y font 44 à 52 px. Le décompte occupe tout l'écran en Lexend. Une carte de fin de lecture confirme l'enregistrement sans montrer le résultat.

## Do's and Don'ts

### Do:
- **Do** utiliser les variables CSS (`--accent`, `--surface`, `--line`…) pour tout fond, bordure et texte d'interface.
- **Do** garder le sauge pour l'action et le choix actif, et le jaune uniquement pour le repère de lecture.
- **Do** donner 44 px de haut à toute cible, avec un libellé écrit à côté de chaque icône.
- **Do** distinguer un état actif par plus que la couleur : fond doux, contour et `aria-pressed`.
- **Do** respecter `prefers-reduced-motion` : couper la transition de 0,38 s du pupitre, sans supprimer le changement d'état.
- **Do** tester le rendu à 1440 px et à 500 px, en clair et en sombre.

### Don't:
- **Don't** ajouter une seconde couleur d'accent ni de dégradé.
- **Don't** descendre sous 16 px de texte, ni utiliser majuscules espacées ou italiques pour des passages.
- **Don't** mettre de chrono, de score, de nom ni d'indicateur d'erreur à l'écran projeté, sauf option explicite.
- **Don't** transmettre une information par la seule couleur, y compris dans le texte codé.
- **Don't** utiliser d'ombre dure, de halo coloré ni de bordure d'accent épaisse sur une carte.
- **Don't** écrire de couleur en dur dans un composant : les palettes de lecture sont l'unique exception, et elles restent dans le moteur de rendu du texte.
