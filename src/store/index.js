import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  count: 10,
  isOdd: '偶数',
  city: '兰州',
  weather: ''
}

export default new Vuex.Store({
  mutations,
  getters,
  state,
  actions
})
