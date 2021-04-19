<template>
  <div class="container">
    <h1 class="text-center my-3 text-upper">
      Lista de Países - Población
    </h1>
    <continents />
    <card-list />
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Continents from './components/Continents.vue'
export default {
  name: 'App',
  components: {
    CardList,
    Continents
  }
}
</script>
