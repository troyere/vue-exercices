## Questions JavaScript

### Si on veut comparer une égalité, quel est l'opérateur à utiliser ?

L'opérateur `===`.

### Quels sont les 6 types de données primitives en JavaScript (ES6) ?

`string`, `number`, `boolean`, `null`, `undefined` et `symbol`.

### Pouvez-vous citer quelques fonction de traitement de tableau ?

`find`, `map`, `filter`, `reduce`, `slice`, etc

### Que fait un `slice` ?

Produit une portion du tableau d'origine, et retourne une shallow copy. Le tableau d'origine n'est pas modifié.

### Que fait un `sort` ?

Tri le tableau en cours. Retourne le tableau trié. Le tableau d'origine est modifié.

### Comment à la fois filtrer et modifier un tableau en une seule boucle ?

```const reducedArray = anArray.reduce(fn, startAcc);```

### Quel opérateur permet de connaître le type d’une variable ?

L'opérateur est `typeof`.

### Pourquoi on dit que JS est faiblement typé ?

Les valeurs sont typées mais pas les variables.  
On peut changer le type d'une variable sans erreur de la part du moteur JS.

### Qu'est-ce qu'une Promise ?

L'objet Promise (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone.  
Une promesse représente une valeur qui peut être disponible maintenant, dans le futur, voire jamais.

### Quels mots clés introduit dans les nouvelles versions de JS (ECMAScript 2017) permet de simplifier encore plus l'écriture des opérations asynchrones ?

`async` et `await`.

### L'avantage des `Promise` par rapport à l'ancienne méthode avec les callbacks ?

- Lisibilité pour éviter le "callback hell"
- Avec les callbacks, le programme principal délègue à une fonction ce qui doit être effectué avec les résultats d'une opération asynchrone (ce qu'on appelle l'inversion de contrôle)
- Avec les promises, le programme principal reprend le contrôle lorsque l'opération asynchrone est terminé car il reçoit un object Promise qui contient la futur valeur de l'opération asynchrone

### Quel est la liste des méthodes de l'objet Promise ?

`then`, `catch`, `finally`, `resolve`, `reject`, `allSettled`, `all`, `race`

### Avez-vous déjà fait des tests unitaires en JS ? Si oui avec quelles librairies ?

## Questions Vue

### Quel est l'équivalent de la syntaxe `v-model` ?

Le couple suivant : l'attribut `:value` et l'événement `@input`.

### Quelle est la différence entre les méthodes et les computed ?

- Les méthodes sont de simples fonctions. Elle peuvent prendre des arguments
- Les computed sont des accesseurs calculés. Son résultat est est recalculé à chaque fois qu'un des éléments de l'instance du composant dont elle est dépendante change

### Quels sont les frameworks les plus indispensables de l'ecosystème Vue ?

- Pour Vue 2 : `VueX`, `Vue Router`, etc
- Pour Vue 3 : `Pinia`, `Vue Router`, etc

### Comment découpez vous vos composants ?

### Comment marche la réactivité vue 2 (observable) ? vue 3 (proxy) ?

### Avez-vous un github ? Avez-vous déjà fait un package npm ?

### A quoi sert vue-loader ?

A avoir des fichiers `.vue` avec les balises `template`, `script` et `styles`. Ce loader fonctionne avec webpack.  
