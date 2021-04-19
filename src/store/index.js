import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    countriesFilter: []

  },
  mutations: {
    countries(state, payload) {
      state.countries = payload
    },
    countriesFilter(state, payload) {
      state.countriesFilter = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
