<script>
//import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  setup () {
    const { result, loading, error } = useQuery(gql`
      query getCountries{
        countries {
  	        name
            code
            capital
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
<h2>Countries</h2>

  <ul>
    <li v-for="country of result.countries" v-bind:key="country.code">
      [ Country: {{ country.name }} <br> [&nbsp; &nbsp;Code: {{ country.code }}, <br> &nbsp;&nbsp;Capital: {{ country.capital }}&nbsp;&nbsp;] <br>]
    </li>
  </ul>
</template>