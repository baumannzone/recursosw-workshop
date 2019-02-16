# #5 Cloud Firestore + Cloud Storage

Ahora ya disponemos de los recursos en la home

A continuación vamos a crear la vista de detalle

## VueFire
https://github.com/vuejs/vuefire


Dentro del componente, vuefire nos permite crear un bloque llamado `firebase` y igual que en el la rama step5.1_firestore, podemos referenciar a un documento de firestore.

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

De esta forma sencilla disponemos del recurso en la variable `resource`

et voilà!

---
Vamos a la rama `step5.1A_firestore`

---
![footer](./assets/img/footer.png)
