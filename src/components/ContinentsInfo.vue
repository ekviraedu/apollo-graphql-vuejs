<script>
//import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup () {
    const { result, loading, error } = useQuery(gql`
      query getContinents{
        continents {
  	        name
            code
        }
    }
    `);

    return{
        result,
        loading,
        error
    }

  },
}
</script>

<template>
<h2>Continents</h2>

  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }}</div>

  <ul>
    <li v-for="continent of result.continents" v-bind:key="continent.code">
      [ Continent: {{ continent.name }} <br> &nbsp; &nbsp;Code: {{ continent.code }} &nbsp;&nbsp; <br>]
    </li>
  </ul>
  
</template>