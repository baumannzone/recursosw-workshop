# #3 Firebase Auth + Vuex

En este paso vamos a trabajar en el `store` de nuestra app.

![vuex-store](./assets/img/vuex-store.png)

###### Chuleta:
```
Componente  => Acción   : this.$store.dispatch('NombreAccion')
Acción      => Mutación : commit('NombreMutacion')
Mutación    => Estado   : state.variable = value
```  
Desde los componentes vamos a llamar a las acciones (`dispatch`) 
que van a llamar a las mutaciones (`commit`)
que son las encargadas de mutar el estado.

###### Datos para store.js  

```
  state: {
    userData: null,
    user: null,
    error: null,
    loading: false
  }
```

En nuestro editor de texto, vamos al archivo `store.js`. Podemos ver que tiene las instrucciones de lo que hay que hacer.  
Vamos a ello! 💪

---

Cuando terminemos podemos ir a la rama `step3.3_auth`

--- 

![footer](./assets/img/footer.png)
