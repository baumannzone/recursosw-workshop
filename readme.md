# #5 Cloud Firestore + Cloud Storage

Ahora ya disponemos de la vista `Create.vue` funcional.

A continuación vamos a obtener todos los recursos de nuestra coleción `resources` de Cloud Firestore.

## VueFire
🔥 Firebase bindings for Vue.js - https://github.com/vuejs/vuefire

> ¿Por qué VueFire?  

Usaremos vuefire. Lo que vuefire hace por nosotros es la gestión automática de las referencias de la base de datos y los callbacks inyectando la información en la variable que le indicamos.

> ¿eh? 🤨🧐🤔

Dentro del componente, vuefire nos permite crear un bloque llamado `firebase`.


```js
  data: () => ({
    resources: []
  }),
  firestore: {
    resources: db.collection('resources').limit(PAGE)
  }
```

De esta forma sencilla disponemos de los recursos en el array `resources`

---
Vamos a la rama `step5.1A_firestore`

---
![footer](./assets/img/footer.png)
