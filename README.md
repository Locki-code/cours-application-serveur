# vuejs-cours

## Cours du 09/02/2022 - 01/03/2022

### let app = Vue.createApp({});

Permet de créer une vue

**data() {}**

Il est possible de créer des variables pour être utilisé après de la façon suivante :
```javascript
data () {
  return {
    inventory: {
      carrots: 0,
      pineaplles: 0,
      cherries: 0
    },
    cart: {
      carrots: 0,
      pineaplles: 0,
      cherries: 0
    }
  }
}
```

**methods: {}**

```javascript
methods: {
  addToCart(type) {
    this.cart[type] += quantity
  }
}
```

**mounted() {}**

Lu lorsque le composant est monté, il peut servir à récupérer un fichier json de la façon suivante :

```javascript
async mounted() {
  const res = await fetch('./food.json')
  const data = await res.json()
  this.inventory = data
}
```


### app.component('name',{})

Créer un composant pour être utiliser dans la vue

**template**

Permet d'insérer de l'html dans le composant

**data()**

Retourne des données lorsque le composant sera monté

**methods**

Contient les méthodes susceptible d'être appelé dans les balise html du composant

```javascript
methods: {
  addToCart(type) {
    this.cart[type] += quantity
  }
}
```

### app.mount('#app');

Monte la vue de l'application pour l'affichage

``` html
<div id="app" v-cloak>
    <button @click="toggleBox">Toggle Box</button>
    <login-form v-if="isVisible" />
    <test-box v-if="isVisible" />
</div>
```

En testant cette configuration d'appel, entre le composant "login-form" et "test-box", il n'y a que le premier composant d'affiché

**@click="fonction()"**

Appel une fonction lors du clique

**{{variable}}**

Permet d'utiliser dans le code html, des variables initialisées au préalable


# DOM

Le virtual DOM est une version moins lourde du DOM traditionnel, il se situe entre le DOM et l'instance de la vue, permettant de re-render uniquement les parties de la page ayant et non l'ensemble.

Lors d'un changement, au départ les DOM sont identique, puis le virtual DOM est midifié modifiant l'affichage, puis c'est au DOM de récupérer le changement pour que les deux redeviennent identique.

## Optimisation

L'objectif de l'optimiseur est de parcourir l'AST généré et de détecter les sous-arbres qui sont purement statiques.
Une fois qu'il a détecté les sous-arbres statiques, Vue les hissera dans des constantes, de sorte que Vue ne créera pas de nouveaux nœuds pour eux à chaque nouveau rendu.

## Observateur

Un observateur est créé pour chaque composant lorsqu'une application Vue est initialisée. Il analyse une expression, collecte les abonnés et déclenche un rappel lorsque la valeur de l'expression change.

source : [https://blog.logrocket.com/how-the-virtual-dom-works-in-vue-js/](https://blog.logrocket.com/how-the-virtual-dom-works-in-vue-js/)