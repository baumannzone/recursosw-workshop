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
- Crear las vistas en `/views`
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

![view-create](./assets/img/view-create.png)


## Terminamos
Cuando terminemos, podemos pasar a la rama `step2.1_router`. 

![footer](./assets/img/footer.png)

