# vuejs-cours

## Cours du 09/02/2022

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

**@click=""**

Appel une fonction lors du clique

**{{variable}}**

Permet d'utiliser dans le code html, des variables initialisées au préalable

