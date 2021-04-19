<template>
  <div class="pb-2" v-for="country in countries" :key="country.name">
    <card :country="country"/>
  </div>
</template>

<script>
import Card from './Card.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { Card },
  setup() {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('getCountries')
      await store.dispatch('filterRegion','Americas')
    })

    const countries = computed(() => {
      return store.getters.topCountriesPopulation
      // return store.state.countries
    })

    return { countries }

  }
}
</script>
