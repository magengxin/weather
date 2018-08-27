import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 10,
  isOdd: '偶数'
}

const actions = {
  increment({commit}) {
    commit('increment')
  },
  decrement({commit}) {
    commit('decrement')
  },
  oddadd({commit, state}) {
    if (state.count % 2 == 0) {
      commit('increment')
    }
  },
  runasync({commit}) {
    new Promise((resolve) => {
      setTimeout(function () {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}

const getters = {
  count: (state => state.count),
  isOdd: (state => state.count % 2 == 0 ? '偶数' : '奇数')
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
