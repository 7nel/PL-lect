# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pauline Lentes et ses collègues du Cycle d'orientation (CO, 9e–11e HarmoS, Valais) : enseignant·es de classe ressource et de groupes d'appui. Elles et ils préparent une lecture, puis la conduisent devant de petits groupes d'élèves lecteurs fragiles (dyslexie, allophonie, décrochage scolaire, parcours difficiles). L'usage principal est la projection au beamer depuis un ordinateur ; la tablette vient ensuite.

Deux personnes sont en jeu à chaque séance et leurs besoins diffèrent : l'enseignant·e prépare, règle et suit ; l'élève lit le pupitre et ne voit rien d'autre que le texte.

Les collègues utilisent l'outil sans formation préalable : la prise en main doit passer par le guide intégré, sans accompagnement.

## Product Purpose

Préparer un texte, le régler pour un lecteur précis, puis le lire en plein écran au tableau ou sur tablette, en mesurant la fluidité (mots correctement lus par minute) sans que l'élève en soit témoin. Il existe pour que le réglage d'affichage et le codage du texte puissent s'adapter à chaque lecteur en quelques gestes, devant la classe.

Succès : l'enseignant·e lance une lecture en quelques gestes, l'élève lit un texte qui lui convient, et la séance laisse une trace utilisable (durée, MCM, erreurs) pour suivre sa progression.

## Positioning

Deux choses qu'un prompteur ou un lecteur de texte ordinaire ne fait pas :

- **Codage phonologique du texte** (syllabes, lettres muettes, liaisons, sons ciblés) grâce au moteur LireCouleur, réglable pour chaque lecteur.
- **Réglages par profil** : des points de départ (Standard, Dyslexie, Allophonie, Décrochage), à ajuster selon l'élève, plus des réglages personnels enregistrés.

## Operating Context

- Une séance type : choisir l'élève, le texte et le réglage ; vérifier l'aperçu codé ; lancer le pupitre ; donner le départ ; terminer ; consulter le résultat à part.
- Beamer dans une salle de classe, élèves au fond : tailles et contrastes pensés pour la distance.
- Un second écran peut piloter la lecture pendant que les élèves ne voient que le texte.
- Fonctionne en double-clic sur `index.html` ou depuis GitHub Pages. Toutes les données (textes, réglages, élèves, séances) restent dans le navigateur de l'ordinateur utilisé.

## Capabilities and Constraints

- Bibliothèque de textes classés par niveau, avec import `.txt` et `.docx`.
- Aperçu codé en direct, à 50 % de la taille du pupitre.
- Pupitre plein écran : trois modes d'avance (ligne par ligne, continu, mot à mot), lignes en évidence, décompte, commandes tactiles et raccourcis clavier.
- Chronométrage et suivi par élève : MCM, erreurs, historique, export CSV.
- Synthèse vocale pour un mot, une ligne ou un texte.
- Guide d'utilisation intégré en deux onglets.
- **Pas de données nominatives d'élèves** : pseudonymes ou initiales, rien n'est envoyé vers un serveur.
- Le décodage des sons est automatique et peut se tromper (homographes, liaisons facultatives) : à vérifier avant une lecture importante.
- Licence GNU GPL v3, imposée par le moteur LireCouleur.
- Stade des décisions ouvertes : doublon du choix de texte et de réglage à deux endroits (liste de gauche et bloc du haut), polices chargées depuis Google Fonts.

## Brand Commitments

Nom : **PL-lect'** (préfixe de la suite PL, apostrophe typographique à l'affichage ; dépôt `PL-lect`). Fait partie de la suite d'outils PL de Pauline Lentes. Français de Suisse romande. Identité décrite dans `../CLAUDE.md` et `CLAUDE.md`.

## Evidence on Hand

- Moteur LireCouleur, de Marie-Pierre et Luc Brungard (licence GPL v3), intégré tel quel dans `index.html` ; voir `NOTICE.md`.
- Polices intégrées : Luciole (CC BY 4.0) et OpenDyslexic (SIL OFL).
- Textes d'exemple écrits pour l'outil, sans donnée d'élève.
- Le guide intégré cite Zorzi et al. (2012, *PNAS*, 109(28), 11455–11459) et Kuster et al. (2018, *Annals of Dyslexia*, 68(1), 25–42). Leur existence et leur contenu ont été vérifiés par la propriétaire du projet (PubMed Central) ; je ne les ai pas revérifiés. Zorzi : effet de l'espacement rapporté chez des enfants dyslexiques, mais non spécifique à la dyslexie selon un travail ultérieur. Kuster : la police Dyslexie n'apporte pas de bénéfice.
- Absences à ne pas combler : aucun témoignage, aucune étude d'efficacité de l'outil, aucune mesure d'usage.

## Product Principles

1. **Le pupitre appartient à l'élève** : rien d'évaluatif n'est visible à l'écran projeté, sauf option explicite de l'enseignant·e.
2. **Régler pour un lecteur, pas pour tous** : les profils sont des points de départ à ajuster, jamais une étiquette posée sur l'élève.
3. **Rien sans source** : aucune affirmation scientifique sans référence vérifiable ; signaler ce qui est automatique ou approximatif.
4. **Une prise en main sans accompagnement** : un·e collègue doit pouvoir lancer une première lecture seul·e, avec le guide intégré.
5. **Les données restent chez l'enseignant·e** : tout se passe dans le navigateur, sans compte ni serveur.

## Accessibility & Inclusion

Priorité du projet : contraste WCAG AA minimum, AAA visé pour le texte courant ; texte courant à 18 px au moins ; navigation au clavier et focus visible ; cibles de 44 px. Public élève : dyslexie, allophonie, décrochage. Vocabulaire simple et consignes courtes, pensés pour les élèves allophones.
