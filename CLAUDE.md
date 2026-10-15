# PL-lect’ — règles du projet

Complète `../CLAUDE.md` (charte commune des sites PL). En cas de conflit, ce fichier prévaut pour PL-lect’.

## Contexte

Prompteur de lecture pour la classe : on prépare un texte, on le règle, puis on le lit au beamer (ou sur tablette) devant des lecteurs fragiles. Un seul fichier `index.html` autonome, hébergé sur GitHub Pages (dépôt `PL-lect`, compte `7nel`).

## Licence

GNU GPL v3, parce que la page intègre le moteur LireCouleur (voir `NOTICE.md` et `README.md`). Ne pas changer de licence sans retirer ce moteur.

## Tokens propres à PL-lect’

Ils s'ajoutent aux tokens de la charte commune (v2.2, fond chaud). `--danger`, `--danger-soft`, `--ok`, `--line-ctl`, `--mark` et `--mark-ink` sont des tokens de la charte : ils ne sont plus déclarés ici. Ne pas en inventer d'autres sans les déclarer ici.

| Token | Rôle | Pourquoi il existe |
|---|---|---|
| `--ink-3` | Texte tertiaire | Aujourd'hui identique à `--ink-2` ; gardé pour pouvoir l'éclaircir sans toucher aux composants. Contraste AA minimum. |
| `--display` | Titres | Identique à `--ui` (Atkinson Hyperlegible) ; gardé pour pouvoir distinguer les titres plus tard. |
| `--c-*` | Couleurs du texte codé (syllabes, arcs, muettes, liaisons, repère de ligne…) | Écrites en JavaScript selon le fond (jeu clair ou sombre). |
| `--st-*` | Couleurs du pupitre plein écran | Le pupitre a son propre fond et sa propre encre, réglables par l'enseignante. |

Polices : Atkinson Hyperlegible, Andika et Lexend sont intégrées en base64 dans `index.html` (sous-ensemble latin), au lieu de fichiers `.woff2` séparés dans `fonts/`, parce que l'outil tient en un seul fichier `index.html`. La charte commune interdit Google Fonts et autorise cette intégration en base64 pour un fichier unique. Les autres polices de lecture suivent la même règle (voir `NOTICE.md`).

## Écarts assumés avec la charte commune

État au 2026-10-15 : la palette de la charte v2.2 (fond chaud, sombre `#1e2220`) est reportée dans `DESIGN.md`, mais pas encore appliquée au code de `index.html`, qui porte encore l'ancienne palette (par exemple `--danger` `#a8402f`). Ces écarts valent jusqu'à l'application, qui se décide à part.

| Variable | Valeur | Raison |
|---|---|---|
| `--danger` (code actuel) | `#a8402f` (clair), `#d98070` (sombre) | Ancienne valeur : la charte donne `#a03a2a` et `#eb9b8b`. À aligner à l'application. |
| Jaune `--mark` (surligneur de lecture) | `#FFD83D`, translucide (45 % en clair, 30 % en sombre) | Exception déclarée de la charte : plusieurs éléments à la fois (bande de lecture, marqueur de mots), texte en encre par-dessus. |
| `--st-*`, palettes de lecture `--c-*` | réglables par l'enseignante | Le pupitre et le texte codé ont leurs propres fonds et encres ; hors palette commune. |
| Anciennes valeurs du fond et des neutres | `#eff2f0`, `#e4e9e6`, `#d7ddda`, `#c3cbc7`, `#ffffff` | Remplacées par la charte à l'application. `--ink-2` `#52635f` est déjà la valeur de la charte. |

Les accents `--accent-soft` (16 %) et `--ink-2` (`#52635f`) sont alignés sur la charte : ce ne sont plus des écarts.

## Voix naturelle (dossier `voix/`)

- `voix/` pèse environ 93 Mo (modèle, phonétiseur, moteur ONNX, bibliothèque modifiée). Ne pas le modifier à la légère : chaque version s'ajoute à l'historique git.
- `sw.js` (à la racine) garde ces fichiers dans le cache `pl-lect-voix-v1` pour le hors ligne. Si un fichier de `voix/` change, changer le nom du cache dans `sw.js`, dans `voix/vendor/piper-tts-web.js` et dans `index.html` (`PIPER_CACHE`).
- La voix naturelle exige `https` ou `localhost` (service worker) : elle n'existe pas quand `index.html` est ouvert directement depuis un fichier.
- La voix du système reste le repli : une erreur de Piper ne doit jamais empêcher d'entendre un mot.

## Règles propres au projet

- **Le pupitre appartient à l'élève.** Aucun chrono, score, nom ou signal d'erreur visible à l'écran projeté, sauf option explicite de l'enseignante.
- **Le réglage « Standard » reste sobre** : pas de couleurs de syllabes, de lettres muettes ni de liaisons par défaut. Les couleurs viennent des profils (Allophonie) ou des choix de l'enseignante.
- Texte courant ≥ 18 px, légendes ≥ 16 px, cibles tactiles ≥ 44 px, y compris à la souris.
- Aucune donnée d'élève dans le code, les textes d'exemple ou les captures. Les séances restent dans le navigateur (`localStorage`, toujours dans un `try/catch`).
- Quand une fonctionnalité change : mettre à jour le guide intégré (« Démarrer » et « Référence ») et le `README.md`.
- Vérifier le rendu à 1440 px et à 500 px, en clair et en sombre, avant de proposer un commit. Le pupitre se teste à la main : plein écran, clavier, tactile.
