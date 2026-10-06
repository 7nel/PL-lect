# PL-lect' — règles du projet

Complète `../CLAUDE.md` (charte commune des sites PL). En cas de conflit, ce fichier prévaut pour PL-lect'.

## Contexte

Prompteur de lecture pour la classe : on prépare un texte, on le règle, puis on le lit au beamer (ou sur tablette) devant des lecteurs fragiles. Un seul fichier `index.html` autonome, hébergé sur GitHub Pages (dépôt `PL-lect`, compte `7nel`).

## Licence

GNU GPL v3, parce que la page intègre le moteur LireCouleur (voir `NOTICE.md` et `README.md`). Ne pas changer de licence sans retirer ce moteur.

## Tokens propres à PL-lect'

Ils s'ajoutent aux tokens de la charte commune. Ne pas en inventer d'autres sans les déclarer ici.

| Token | Rôle | Pourquoi il existe |
|---|---|---|
| `--danger`, `--danger-soft` | Action destructrice, chrono en cours (rouge) | La charte prévoit `--warn` (ambre) ; ici le rouge distingue « Supprimer » et l'enregistrement en cours. |
| `--ok` | Confirmation (même vert que `--accent`) | Nom sémantique pour les états réussis. |
| `--ink-3` | Texte tertiaire | Aujourd'hui identique à `--ink-2` ; gardé pour pouvoir l'éclaircir sans toucher aux composants. Contraste AA minimum. |
| `--display` | Titres | Identique à `--ui` (Atkinson Hyperlegible) ; gardé pour pouvoir distinguer les titres plus tard. |
| `--c-*` | Couleurs du texte codé (syllabes, arcs, muettes, liaisons, repère de ligne…) | Écrites en JavaScript selon le fond (jeu clair ou sombre). |
| `--st-*` | Couleurs du pupitre plein écran | Le pupitre a son propre fond et sa propre encre, réglables par l'enseignante. |

Polices : Atkinson Hyperlegible, Andika et Lexend sont intégrées en base64 dans `index.html` (sous-ensemble latin), à la place du lien Google Fonts que prescrit la charte commune. Raison : l'outil doit fonctionner hors ligne et sur un réseau d'école qui bloque `googleapis.com`. Les autres polices de lecture suivent la même règle (voir `NOTICE.md`).

Écart assumé avec la charte : `--accent-soft` utilise 16 % comme la charte ; `--ink-2` est un peu plus foncé (#52635f en clair) pour tenir 4,5:1 sur `--surface-2`.

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
