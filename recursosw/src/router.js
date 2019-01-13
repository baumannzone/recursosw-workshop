import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'home', component: 'Home' },
  { path: '/create', name: 'Create', component: 'Create' },
  { path: '/resources/:id', name: 'Resource', component: 'Resource' },
  { path: '/about', name: 'About', component: 'About' },
  { path: '/signin', name: 'Signin', component: 'Signin' },
  { path: '/signout', name: 'signout', component: 'signout' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.component}.vue`)
  }
})

const router = new Router({
  routes
})

export default router
