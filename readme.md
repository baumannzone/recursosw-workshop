# #3 Firebase Auth + Vuex

Veamos los cambios que hemos hecho en el paso anterior:


###### App.vue
```
  menuItems: [
    { displayName: 'Create', icon: 'add', path: '/create', requireAuth: true },
    { displayName: 'Login', icon: 'contact_mail', path: '/signin' },
    { displayName: 'Logout', icon: 'contact_mail', path: '/signout', requireAuth: true }
  ]
```
```
  show (item) {
    if (item.path === '/signin') {
      return !this.$store.getters.isAuthenticated
    } else if (item.requireAuth) {
      return this.$store.getters.isAuthenticated
    }
    return true
  },
```

###### store.js
```
  getters: {
    isAuthenticated (state) {
      return !!state.user
    }
  }
```

--- 

Cambiamos de rama: `step3.5_auth`

--- 

![footer](./assets/img/footer.png)
