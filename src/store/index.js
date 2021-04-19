import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: [],
    countriesFilter: []

  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    },
    setCountriesFilter(state, payload) {
      state.countriesFilter = payload
    }
  },
  actions: {
    async getCountries({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        commit('setCountries', data)
      } catch (error) {
        console.error(error)
      }
    },
    filterRegion({commit, state}, region) {
      const filter = state.countries.filter(country => {
        return country.region.includes(region)
      })
      commit('setCountriesFilter', filter)
    },
    filterCountry({commit, state}, country) {
      const textCountry = country.toLowerCase()
      const filter = state.countries.filter(country => {
        const textApi = country.name.toLowerCase()
        if(textApi.includes(textCountry)) {
          return country
        }
       })
       commit('setCountriesFilter', filter)
    }
  },
  getters: {
    topCountriesPopulation(state) {
      return state.countriesFilter.sort((a,b) => 
        a.population < b.population ? 1 : -1
      )
    }
  },
  modules: {
  }
})
