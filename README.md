# Pupitre de lecture

Un prompteur de lecture pour la classe : on y prépare un texte, on le règle (taille, espacement, couleurs, codage des sons), puis on le lit au tableau ou sur une tablette. Conçu pour des groupes de lecteurs fragiles (dyslexie, allophonie, décrochage scolaire), mais utilisable avec n'importe quelle classe.

## Fonctionnalités

- **Bibliothèque de textes** classés par niveau, avec import `.txt` / `.docx`.
- **Codage phonologique du texte** (syllabes, lettres muettes, liaisons, sons ciblés) grâce au moteur du projet [LireCouleur](https://lirecouleur.forge.apps.education.fr).
- **Préparer la lecture : élève → texte → réglage → lancer.** Un bloc réunit les trois choix d'une séance ; la barre de lancement, toujours visible (y compris sur tablette et téléphone), les rappelle à côté du bouton « Lancer ».
- **Réglages en cinq niveaux** : réglage rapide (quatre points de départ — standard, sans couleurs de syllabes, puis dyslexie, allophonie, décrochage — plus les vôtres, avec taille et espacement des lettres), typographie, couleurs (dont les quatre fonds), codage du texte, lecture. « Enregistrer ces réglages » n'apparaît qu'après un ajustement. Seul le premier est ouvert par défaut.
- **Pupitre en plein écran** : trois façons d'avancer (ligne par ligne, défilement continu, mot à mot), nombre de lignes en évidence, décompte de départ, commandes tactiles et raccourcis clavier. Le texte hors des lignes lues est atténué. La zone lue ne passe jamais sous la barre de commandes : si le nombre de lignes demandé ne tient pas à l'écran, il est réduit et un message le signale.
- **L'écran de lecture appartient à l'élève.** Il n'affiche ni chrono, ni durée, ni nombre d'erreurs, ni résultat, ni nom d'élève, ni message d'enregistrement. Une erreur marquée ne laisse aucune trace visible (sauf option, pour un écran que les élèves ne voient pas).
- **Durée mesurée en silence.** Il n'y a pas de chrono à lancer : Espace (ou « Démarrer ») donne le départ, après le décompte s'il est activé ; « Terminer » (touche T) arrête la mesure. Toutes les lectures sont enregistrées, avec ou sans élève.
- **Second écran (facultatif).** Avec un beamer en écran étendu, une fenêtre de projection n'affiche que le texte ; l'enseignante pilote depuis son propre écran (texte suivi, mots à cliquer pour marquer une erreur, résultat à la fin). Avec un écran dupliqué ou une tablette seule, tout se pilote sur le pupitre, discrètement.
- **Résultat après la séance.** En quittant le pupitre : « Lecture enregistrée », puis durée, MCM et erreurs sur demande. Une lecture de 2 à 10 secondes n'est enregistrée que sur confirmation ; sous 2 secondes, rien n'est gardé ; sous 30 secondes, le MCM est donné comme indicatif (« ≈ »).
- **Synthèse vocale** pour faire entendre un mot, une ligne ou un texte.
- **Suivi** : mots correctement lus par minute (MCM), dernières lectures de l'élève choisi, évolution par élève (MCM et erreurs séance après séance, filtrables par texte), tableau corrigeable, export CSV.
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
