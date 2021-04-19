<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">{{ country.name }}</h4>
        </div>
        <div class="card-body">
            <p class="text-center">
                <img class="img-fluid rounded w-50 border p-1" :src="country.flag" :alt="`bandera-${country.name}`">
            </p>
            <span class="badge badge-dark d-block mb-1">Nombre Nativo: {{ country.nativeName }}</span>
            <span class="badge badge-info d-block p-3 mb-1">Población: {{ formatNumber(country.population) }}</span>
            <span class="badge badge-dark d-block mb-1">Capital: {{ country.capital }}</span>
            <span class="badge badge-dark d-block mb-1">Región: {{ country.region}}</span>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props:['country'],
    setup() {
        const formatNumber = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return { formatNumber }
    }

}
</script>

<style>

</style>