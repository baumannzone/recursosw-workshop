import Vue from 'vue'
import Vuex from 'vuex'
// Import router
// Import the firebase services that we have enabled before (config/index.js)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // State here
  },
  mutations: {
    setUser (state, payload) {
      // mutation here
    },
    setError (state, payload) {
      // mutation here
    },
    setLoading (state, payload) {
      // mutation here
    },
    setUserData (state, payload) {
      // mutation here
    }
  },
  actions: {
    userSignInGithub ({ commit, dispatch }, payload) {
      // Loading true
      // Use signInWithPopup + github
      /* OK:
      *   - setUser data
      *   - setLoading false
      *   - setError null
      *   - redirect 'Home'
      * */
      /* KO:
      *   - setError null
      *   - setLoading false
      *   - redirect 'Home'
      * */
    },
    userSignOut ({ commit }) {
      // Auth SignOut
      // Resetear state.user
      // Resetear state.userData
      // Redirect to 'Home'
    }
  }
})
