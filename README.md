# Raidleader

Projet-exercice pour utiliser React avec Redux.
L'idée de base était d'être dans la peau d'un leader dans une guilde de mmorpg, et de vous faire opérer des choix comme le recrutement de nouveaux joueurs, l'organisation de raids pour faire progresser la guilde, équiper les joueurs...


## Installation
Projet dépourvu de backend pour le moment, il suffit donc d'exécuter npm install
ou yarn install pour récupérer toutes les dépendances. Le node utilisé sur mon environnement est en 6.11, je n'ai pas testé sur d'autres versions.
Pour l'instant, un npm start permettra d'avoir un mini serveur web pour accéder
à l'application.

## Notes techniques
l'API drag and drop de html5 ne fonctionne pas comme souhaité, je m'appuie sur elle mais le "drop" est géré manuellement, ce qui donne quelques bizarreries dans le code gérant cette partie (on se base sur le dragEnd mais celui-ci est déclenché après le dragLeave, ce qui est source de sérieux maux de crâne).

## Stack utilisée
Ce n'est pas à proprement parler une "stack" puisqu'il y a juste un front, mais on trouvera :
- SASS pour gérer les styles
- Lodash pour mieux gérer les tableaux
- Redux pour mettre en commun l'état de l'application
- JSStore comme wrapper IndexedDB
