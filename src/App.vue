<template>
  
  <Continents />
  <India />
  <Countries />
</template>

<script>

import CountriesInfo from "./components/CountriesInfo.vue"
import ContinentsInfo from "./components/ContinentsInfo.vue"
import IndiaInfo from "./components/IndiaInfo.vue"

export default {
  name: 'App',
  components: {
    Continents: ContinentsInfo,
    Countries: CountriesInfo,
    India: IndiaInfo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
