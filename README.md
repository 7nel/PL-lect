# Pupitre de lecture

Un prompteur de lecture pour la classe : on y prépare un texte, on le règle (taille, espacement, couleurs, codage des sons), puis on le lit au tableau ou sur une tablette. Conçu pour des groupes de lecteurs fragiles (dyslexie, allophonie, décrochage scolaire), mais utilisable avec n'importe quelle classe.

## Fonctionnalités

- **Bibliothèque de textes** classés par niveau, avec import `.txt` / `.docx`.
- **Codage phonologique du texte** (syllabes, lettres muettes, liaisons, sons ciblés) grâce au moteur du projet [LireCouleur](https://lirecouleur.forge.apps.education.fr).
- **Réglages d'affichage** : une seule liste de réglages enregistrés (trois points de départ — dyslexie, allophonie, décrochage — plus les vôtres) à ajuster, puis police, taille, espacement entre les lettres et les mots, interligne, couleurs, thème clair/sombre. Les sections avancées sont repliées par défaut.
- **Barre de lancement toujours visible** (choix du lecteur et bouton « Lancer »), y compris sur tablette et téléphone.
- **Pupitre en plein écran** : trois façons d'avancer (ligne par ligne, défilement continu, mot à mot), nombre de lignes en évidence, décompte de départ, commandes tactiles (dont « Annuler » et « Dernier mot lu ») et raccourcis clavier. Le texte hors des lignes lues est atténué en gris. Un coin chrono/erreurs est disponible en option ; par défaut, ils restent invisibles à l'écran projeté (aucun signal visuel lors d'une erreur marquée). La barre de commandes est en trois groupes de largeur stable, le bouton « Mode » règle l'avance et les lignes sans quitter le pupitre, et le bouton « ? » reste affiché dans le coin. Un message propose de choisir un élève au lancement.
- **Synthèse vocale** pour faire entendre un mot, une ligne ou un texte.
- **Chronométrage et suivi** : mots correctement lus par minute (MCM), historique par élève, export CSV. À l'arrêt du chrono, une carte confirme l'enregistrement ; le résultat n'apparaît que sur clic, et la durée n'apparaît que sur clic, et une lecture de moins de 10 secondes demande confirmation avant d'être enregistrée.
- **Guide d'utilisation intégré** en deux onglets (« Démarrer » : quatre étapes et six touches ; « Référence » : tout le détail), pensé pour une prise en main sans avoir vu l'outil avant.

Toutes les données (textes, réglages, élèves, séances) restent dans le navigateur de l'ordinateur utilisé ; rien n'est envoyé vers un serveur.

## Utilisation

Aucune installation n'est nécessaire.

- **En local** : téléchargez `index.html` et ouvrez-le avec un double-clic dans votre navigateur.
- **En ligne** : activez GitHub Pages sur ce dépôt (Settings → Pages → Deploy from branch → `main` → `/root`) pour obtenir une adresse partageable, par exemple pour l'ouvrir sur une tablette.

Le décodage des sons est automatique et peut se tromper, en particulier sur les homographes (*les poules couvent* / *le couvent*) et les liaisons facultatives : à vérifier avant une lecture importante.

L'icône (`icon-*.png`) et `manifest.json` permettent d'ajouter l'outil à l'écran d'accueil d'une tablette ou d'un téléphone (Safari : Partager → Sur l'écran d'accueil).

## Licence

Cette page intègre le moteur de décodage du projet **LireCouleur** (`module.js`), écrit par Marie-Pierre et Luc Brungard — <https://lirecouleur.forge.apps.education.fr> — sous licence **GNU General Public License v3**. L'ensemble de ce dépôt est donc distribué sous la même licence : voir [LICENSE](LICENSE).

Polices intégrées : voir [NOTICE.md](NOTICE.md) pour leurs licences respectives.

Ce projet n'est ni affilié ni soutenu par l'équipe de LireCouleur ; il en réutilise le moteur conformément à sa licence.
