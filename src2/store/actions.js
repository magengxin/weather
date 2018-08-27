import * as types from './types'

export default {
  increment: ({commit}) => {
    commit(types.INCREMENT)
  },
  decrement: ({commit}) => {
    commit(types.DECREMENT)
  },
  oddadd: ({commit, state}) => {
    if (state.mutations.count % 2 == 0) {
      commit(types.INCREMENT)
    }
  },
  runasync: ({commit, state}) => {
    var flag = true;
    if (flag) {
      flag = false;
      new Promise((resolve) => {
        setTimeout(function () {
          commit(types.INCREMENT)
        }, 1000)
      })
      flag = true
    }
  }
}

