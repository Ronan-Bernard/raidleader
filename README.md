#Raidleader

Projet-exercice pour utiliser React avec Redux.
L'idée de base était d'être dans la peau d'un leader dans une guilde de mmorpg, et de vous faire opérer des choix comme le recrutement de nouveaux joueurs, l'organisation de raids pour faire progresser la guilde, équiper les joueurs...

##Installation
Projet dépourvu de backend pour le moment, il suffit donc d'exécuter npm install
ou yarn install pour récupérer toutes les dépendances.
Pour l'instant, un npm start permettra d'avoir un mini serveur web pour accéder
à l'application.

##Notes techniques
l'API drag and drop de html5 ne fonctionne pas comme souhaité, elle est donc remplacée par des fonctions "maison" probablement moins optimisée, mais qui
font le taf.

##Stack utilisée
Ce n'est pas à proprement parler une "stack" puisqu'il y a juste un front, mais on trouvera :
- SASS pour gérer les styles
- lodash pour mieux gérer les tableaux
- Redux pour mettre en commun l'état de l'application
