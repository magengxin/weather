import Vue from 'vue'
import App from './App.vue'

import store from './store/'
import axios from 'axios'

Vue.prototype.axios = axios

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
