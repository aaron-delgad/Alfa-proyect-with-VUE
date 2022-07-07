import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   permiUserMetas: false,
   permiUserReport: true,
  },
  getters: {
    userMetas(state) {
      return state.permiUserMetas;
    },
    userReport(state) {
      return state.permiUserReport;
    }
  },
  mutations: {
   
  },
  actions: {

  },
  modules: {
  }
})
