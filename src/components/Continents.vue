<template>
<div class="text-center">
    <h2>Filtrar por Continentes</h2>
    <div class="btn-group text-center pb-2">
        <button type="button" class="btn btn-dark" @click="filter('Americas')">AM</button>
        <button type="button" class="btn btn-dark" @click="filter('Europe')">EU</button>
        <button type="button" class="btn btn-dark" @click="filter('Asia')">AS</button>
        <button type="button" class="btn btn-dark" @click="filter('Oceania')">OC</button>
        <button type="button" class="btn btn-dark" @click="filter('Africa')">AF</button>
        <button type="button" class="btn btn-dark" @click="filter('')">ALL</button>
    </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        const filter = (region) => {
            store.dispatch('filterRegion', region)
        }

        return { filter }
    }
}
</script>

<style>

</style>