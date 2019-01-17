import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

const routerOptions = [
  { path: '/', name: 'home', component: 'Home' },
  { path: '/create', name: 'Create', component: 'Create' },
  { path: '/resources/:id', name: 'Resource', component: 'Resource' },
  { path: '/about', name: 'About', component: 'About' },
  { path: '/signin', name: 'Signin', component: 'Signin' },
  { path: '/signout', name: 'Signout', component: 'Signout' }
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = store.getters.isAuthenticated
  if (requiresAuth && !isAuthenticated) {
    console.log('U NEED LOGIN ☝️!')
    next('/signin')
  } else {
    next()
  }
})

export default router
