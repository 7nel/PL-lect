# Pupitre de lecture

Un prompteur de lecture pour la classe : on y prépare un texte, on le règle (taille, espacement, couleurs, codage des sons), puis on le lit au tableau ou sur une tablette. Conçu pour des groupes de lecteurs fragiles (dyslexie, allophonie, décrochage scolaire), mais utilisable avec n'importe quelle classe.

## Fonctionnalités

- **Bibliothèque de textes** classés par niveau, avec import `.txt` / `.docx`.
- **Codage phonologique du texte** (syllabes, lettres muettes, liaisons, sons ciblés) grâce au moteur du projet [LireCouleur](https://lirecouleur.forge.apps.education.fr).
- **Réglages d'affichage** : police, taille, espacement entre les lettres et les mots, interligne, couleurs, thème clair/sombre.
- **Pupitre en plein écran** : trois façons d'avancer (ligne par ligne, défilement continu, mot à mot), nombre de lignes en évidence, décompte de départ, commandes tactiles et raccourcis clavier.
- **Synthèse vocale** pour faire entendre un mot, une ligne ou un texte.
- **Chronométrage et suivi** : mots correctement lus par minute (MCM), historique par élève, export CSV.
- **Guide d'utilisation intégré**, pensé pour une prise en main sans avoir vu l'outil avant.

Toutes les données (textes, réglages, élèves, séances) restent dans le navigateur de l'ordinateur utilisé ; rien n'est envoyé vers un serveur.

## Utilisation

Aucune installation n'est nécessaire.

- **En local** : téléchargez `index.html` et ouvrez-le avec un double-clic dans votre navigateur.
- **En ligne** : activez GitHub Pages sur ce dépôt (Settings → Pages → Deploy from branch → `main` → `/root`) pour obtenir une adresse partageable, par exemple pour l'ouvrir sur une tablette.

Le décodage des sons est automatique et peut se tromper, en particulier sur les homographes (*les poules couvent* / *le couvent*) et les liaisons facultatives : à vérifier avant une lecture importante.

## Licence

Cette page intègre le moteur de décodage du projet **LireCouleur** (`module.js`), écrit par Marie-Pierre et Luc Brungard — <https://lirecouleur.forge.apps.education.fr> — sous licence **GNU General Public License v3**. L'ensemble de ce dépôt est donc distribué sous la même licence : voir [LICENSE](LICENSE).

Polices intégrées : voir [NOTICE.md](NOTICE.md) pour leurs licences respectives.

Ce projet n'est ni affilié ni soutenu par l'équipe de LireCouleur ; il en réutilise le moteur conformément à sa licence.
