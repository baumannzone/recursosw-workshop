# #5 Cloud Firestore + Cloud Storage

Ahora ya disponemos de la vista `Create.vue` funcional.

A continuación listaremos recursos de la coleción `resources` de Cloud Firestore.

## VueFire

Usaremos vuefire. Lo que vuefire hace por nosotros es la gestión automática de las referencias de la base de datos y los callbacks inyectando la información en la variable que le indicamos.

> ¿eh? 🤨🧐🤔

Dentro del componente, vuefire nos permite crear un bloque llamado `firebase`.


```js
  data () {
    return {
      resource: {}
    }
  },
  computed: {
    ...
  },
  methods: {
    ...
  },
  firestore () {
    return {
      resource: db.doc(`resources/${this.$route.params.id}`)
    }
  }
```


---
Vamos a la rama `step5.1A_firestore`

---
![footer](./assets/img/footer.png)
