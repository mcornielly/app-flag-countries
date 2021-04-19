<template>
  <div class="container">
    <h1 class="text-center my-3 text-upper">
      Lista de Países - Población
    </h1>
    <continents />
    <searcher />
    <card-list />
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Continents from './components/Continents.vue'
import Searcher from './components/Searcher.vue'
export default {
  name: 'App',
  components: {
    CardList,
    Continents,
    Searcher
  }
}
</script>
