<script>
//import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup () {
    const { result, loading, error } = useQuery(gql`
      query getIndiaInfo{
        country(code : "IN") {
          name
          capital
          currency
          native
        }
      }
    `)

    return{
        result,
        loading,
        error
    }

  },
}
</script>

<template>
<h2>{{ result.country.name }}</h2>
<p>
  [ Currency: {{ result.country.currency }} <br> 
  Capital: {{ result.country.capital }}  <br>
  Native name: {{ result.country.native }}]
</p>
  
</template>