/*import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

createApp(App).mount('#app')*/

import App from "./App.vue";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com/"
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App)
});

app.mount("#app");
