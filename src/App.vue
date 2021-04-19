<template>
  <div class="container">
    <h1 class="text-center my-3 text-upper">
      Lista de Países - Población
    </h1>
    <card-list />
  </div>
</template>

<script>
import CardList from './components/CardList'
export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>
