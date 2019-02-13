# #2 Router
> 🚦 The official router for Vue.js. http://router.vuejs.org/  

## Empezamos

###### Rutas:
```
  { path: '/', name: 'home', component: 'Home' },
  { path: '/create', name: 'Create', component: 'Create' },
  { path: '/resources/:id', name: 'Resource', component: 'Resource' },
  { path: '/about', name: 'About', component: 'About' }
``` 

###### Tareas:
- Crear las vistas en `/views` (Create.vue, About.vue y Resource.vue)
- Agregar las rutas en `router.js`
- Agregar los links al navbar/sidebar en `App.vue`

> El `template` de las vistas tiene que ser algo sencillo como esto:

```
<template>
  <div>
    <h1>Hola desde NOMBRE_PAG</h1>
  </div>
</template>
```

> los links quedará algo así:
```
{ displayName: 'Create', icon: 'add', path: '/create', requireAuth: true },
{ displayName: 'About', icon: 'info', path: '/about' },
{ displayName: 'Resource', icon: 'info', path: '/resources/123' }
```

![view-create](./assets/img/view-create.png)


---

Cuando terminemos, podemos pasar a la rama `step2.1_router`.

Ahora comprobamos que tenemos las siguientes vistas funcionando:

- http://localhost:8080/#/about
- http://localhost:8080/#/create
- http://localhost:8080/#/resources/1 _(1 es el id)_

---  

![footer](./assets/img/footer.png)

