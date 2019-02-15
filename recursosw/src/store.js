import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import { auth, ghProvider } from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Definimos nuestro estado
    userData: null,
    user: null,
    error: null,
    loading: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setUserData (state, payload) {
      state.userData = payload
    }
  },
  actions: {
    userSignInGithub ({ commit, dispatch }, payload) {
      commit('setLoading', true)
      auth.signInWithPopup(ghProvider)
        .then(firebaseUser => {
          if (firebaseUser.user) {
            commit('setUser', {
              id: firebaseUser.user.uid,
              uid: firebaseUser.user.uid,
              name: firebaseUser.user.displayName,
              email: firebaseUser.user.email
            })
            commit('setLoading', false)
            commit('setError', null)
            router.push({ name: 'Home' })
          } else {
            throw new Error('Error credentials')
          }
        })
        .catch(error => {
          commit('setError', error.message)
          commit('setLoading', false)
        })
    },
    userSignOut ({ commit }) {
      console.log('[routerPush]')
      auth.signOut()
      commit('setUser', null)
      commit('setUserData', null)
      router.push('/')
    }
  },
  getters: {
    isAuthenticated (state) {
      return !!state.user
    }
  }
})
