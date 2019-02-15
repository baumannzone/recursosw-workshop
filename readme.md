# #5 Cloud Firestore + Cloud Storage

En este apartado ya disponemos de la vista Create.vue funcional.

A continuación listaremos recursos de la colleción `resources` de firestore.

## VueFire

Usaremos vuefire. Lo que vuefire hace por nosotros es la gestión automática de las referencias de la base de datos y los callbacks inyectando la información en la variable que le indicamos.

¿eh?

Dentro del component, vuefire nos permite crear un atributo llamado firebase.


```js
  data () {
    return {
      resource: {}
    }
  },
  computed: {
  },
  methods: {
  },
  firestore () {
    return {
      resource: db.doc(`resources/${this.$route.params.id}`)
    }
  }
```


---
Vamos a la rama `step5.1_firestore`

---
![footer](./assets/img/footer.png)
