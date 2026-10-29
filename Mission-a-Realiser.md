Missions a realiser : 

- Transformer le projet en react : 
100% React et 0% jQuery

Convertir l'un des quatre plugins jQuery actuels en React. Remplacer les 3 plugins jQuery restants par des composants React que tu coderas toi-même, ou que tu peux importer depuis des libraires existantes si tu manques de temps. 



## Pour le projet en JQUERY

- Tu devras faire une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Tu devras ajouter un système de gestion d'état (la version actuelle utilise un stockage local).
- Tu dois aussi t'assurer que tout est cohérent au niveau du style. Pour cela, tu n'es pas obligé de refaire le design de l'application, mais si tu veux changer le style pour quelque chose de plus moderne, tu es le bienvenu.  
- Si tu as le temps, tu peux tester le code React avec une suite de tests unitaires. Sinon, seuls des tests manuels sont nécessaires. 

## Conversion des plugins

(Voir Dossier Probleme-a-corriger dans Docs)

Je dois : 
- Créer 1 plugin qui doit être converti en composant React réutilisable, documenté et publié sur npm ou GitHub Packages ;

- les 3 autres peuvent être codés à la main ou remplacés par des librairies React existantes.
(attention, lors de la conversion d'un plugin jQuery en un composant React, il faut garder à l'esprit de ne convertir que le code qui traite de la fonctionnalité réelle de l'interface utilisateur du plugin. Par exemple, si un plugin jQuery inclut du code AJAX, tu n’as pas besoin de le convertir. Si tu convertis un plugin jQuery pour une fenêtre modale, concentre-toi sur la création d'un composant React qui fonctionne comme une fenêtre modale, et rien d'autre)

- Créer sa propre bibliothéque

! attention pas utiliser de classes ! 
! Function doit être plus petit pour que se soit modulable ! 

## Tests de performance

- A Réaliser :
tests de performance + fournisses des rapports.
( Lighthouse en comparant l'ancienne et la nouvelle application)

Un sur l'ancien projet (HRnet actuelle), puis un autre une fois sur l'application et le plugin jQuery choisi seront convertis en React.

!  Tu dois faire le build de l'application avant de faire ton audit !

## Document ton conposant React !

Tu dois écrire le Readme sur ton Plugin créer 

! chaque accessoire est destiné et comment il est utilisé !

-------


C'est tout ! Une fois que l'application HRnet en React fonctionne, tu peux publier le composant React sur npm sous forme de package et partager le lien pour que nous puissions l'utiliser si nécessaire. Si tu as du mal avec npm, tu peux utiliser les paquets GitHub comme alternative.


# Bonus 

Utiliser Redux Persist


