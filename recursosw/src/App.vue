<template>
  <v-app>
    <!--SideBar-->
    <v-navigation-drawer v-model="drawer" fixed app disable-resize-watcher>
      <v-list dense>
        <!--Nav items-->
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

    <!--Navigation Bar-->
    <v-toolbar app temporary fixed class="elevation-0">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
      <v-toolbar-title class="headline text-uppercase cursor" @click="goHome">
        <span>Recurs<span class="font-weight-light">OSW</span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!--Nav items-->
        <template v-for="(item, idx) in menuItems">
          <v-btn flat
            v-if="show(item)"
            :to="item.path"
            :key="idx">{{ item.displayName }}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <!-- component matched by the route will render here -->
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
      // Array de objetos con los elementos del menu de navegación
      menuItems: [
        /*
          TODO: Crear los enlaces que se verán en el navigation bar y el side bar
          Los objetos tienen las siguientes propiedades:
          - DisplayName: Nombre a mostrar
          - Icon: Nombre del icono (Los sacamos de `https://material.io/tools/icons/?style=baseline`)
          - Path: Ruta de la vista que hemos definido en el `router.js`
        */
      ]
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    show (item) {
      return true
    },
    onSearch () {
      return true
    }
  }
}
</script>
