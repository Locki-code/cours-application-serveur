# vuejs-cours

## Cours du 09/02/2022

### let app = Vue.createApp({});

Permet de créer une vue

### app.component('name',{})

Créer un composant pour être utiliser dans la vue

**template**

Permet d'insérer de l'html dans le composant

**data()**

Retourne des données lorsque le composant sera monté

**methods**

Contient les méthodes susceptible d'être appelé dans les balise html du composant

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

