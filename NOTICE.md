# Composants tiers

Ce dépôt inclut du code et des polices qui ne sont pas de son autrice, chacun sous sa propre licence.

## Moteur de décodage — LireCouleur

- **Fichier concerné** : le premier bloc `<script>` d'`index.html`, tel qu'indiqué par ses commentaires.
- **Auteurs** : Marie-Pierre Brungard et Luc Brungard.
- **Projet** : <https://lirecouleur.forge.apps.education.fr>
- **Licence** : GNU General Public License v3.0. Le texte complet est dans [LICENSE](LICENSE) à la racine de ce dépôt.

Parce que ce fichier est GPL, l'ensemble formé avec le reste de la page (une œuvre combinée au sens de la GPL) est distribué sous la même licence.

## Polices intégrées (encodées en base64 dans `index.html`)

| Police | Auteurs | Licence | Source |
|---|---|---|---|
| Luciole | Laurent Bourcellier et Jonathan Perez | Creative Commons Attribution (CC BY) | <https://luciole-vision.com> |
| OpenDyslexic | Abbie Gonzalez (« antijingoist ») | SIL Open Font License 1.1 | <https://opendyslexic.org> |
| Atkinson Hyperlegible | Braille Institute of America | SIL Open Font License 1.1 | <https://fonts.google.com/specimen/Atkinson+Hyperlegible> |
| Andika | SIL Global | SIL Open Font License 1.1 | <https://fonts.google.com/specimen/Andika> |
| Lexend | Bonnie Shaver-Troup, Thomas Jockin et le projet Lexend | SIL Open Font License 1.1 | <https://fonts.google.com/specimen/Lexend> |

Atkinson Hyperlegible, Andika et Lexend sont intégrées en sous-ensemble latin (WOFF2, tel que servi par Google Fonts) : ces polices n'ont pas été modifiées. Les noms d'auteurs et licences ci-dessus sont ceux des fiches Google Fonts et sont à recouper avec les sources avant toute redistribution.

## Voix naturelle (dossier `voix/`)

| Composant | Auteurs | Licence | Source |
|---|---|---|---|
| Modèle `fr_FR-siwis-medium` (voix) | Projet Piper (Rhasspy) ; données d'entraînement SIWIS, Université d'Édimbourg | CC BY 4.0 (indiquée par la fiche du modèle) | <https://huggingface.co/diffusionstudio/piper-voices> ; <https://datashare.is.ed.ac.uk/handle/10283/2353> |
| Bibliothèque `piper-tts-web` (copie modifiée dans `voix/vendor/`) | Mintplex Labs, d'après `vits-web` de Diffusion Studio | MIT (d'après son `package.json`) | <https://github.com/Mintplex-Labs/piper-tts-web> |
| Phonétiseur `piper_phonemize` (dans `voix/wasm/`) | Diffusion Studio, d'après Piper et espeak-ng | MIT d'après le paquet ; les données espeak-ng sont à ma connaissance sous GPL v3 : à recouper | <https://www.npmjs.com/package/@diffusionstudio/piper-wasm> |
| Moteur de calcul `onnxruntime-web` 1.18.0 (dans `voix/ort/`) | Microsoft | MIT | <https://github.com/microsoft/onnxruntime> |

Ces fichiers sont copiés tels quels, sauf `voix/vendor/piper-tts-web.js` (adresses locales, un seul fil de calcul, stockage par service worker). Les licences ci-dessus sont celles indiquées par les sources et n'ont pas été recoupées une à une : à vérifier avant toute redistribution.

Ces polices restent sous leur licence d'origine, distincte de la GPL du moteur LireCouleur ; leur intégration dans cette page n'y change rien. Se référer aux sources ci-dessus pour le texte complet de chaque licence avant toute redistribution.
