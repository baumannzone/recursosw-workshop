<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <v-list dense>
        <v-list-tile v-for="(item, idx) in menuItems" :key="idx" :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.displayName }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app temporary fixed class="elevation-0">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title class="headline text-uppercase cursor" @click="goHome">
        <span>Recurs<span class="font-weight-light">OSW</span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="(item, idx) in menuItems">
          <v-btn flat
            v-if="show(item)"
            :to="item.path"
            :key="idx">{{ item.displayName }}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
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
}
</script>
