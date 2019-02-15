# #3 Firebase Auth + Vuex

- Implementamos el getter isAuthenticated para poder usarlo en la vista App.vue

```
  data () {
    return {
      search: '',
      drawer: false,
      menuItems: [
        { displayName: 'Create', icon: 'add', path: '/create', requireAuth: true },
        { displayName: 'Login', icon: 'contact_mail', path: '/signin' },
        { displayName: 'Logout', icon: 'contact_mail', path: '/signout', requireAuth: true }
      ]
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    show (item) {
      if (item.path === '/signin') {
        return !this.$store.getters.isAuthenticated
      } else if (item.requireAuth) {
        return this.$store.getters.isAuthenticated
      }
      return true
    },
    onSearch () {
      return true
    }
  }
```

![firebase](./assets/img/footer.png)
