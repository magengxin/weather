import axios from 'axios';
import * as types from './types'

/*异步操作*/
export default {
  increment({commit}) {
    commit(types.INCREMENT)
  },
  decrement: ({commit}) => {
    commit(types.DECREMENT)
  },
  oddadd: ({commit, state}) => {
    if (state.count % 2 == 0) {
      commit(types.INCREMENT)
    }
  },
  runasync: ({commit}) => {
    new Promise((resolve) => {
      setTimeout(function () {
        commit(types.INCREMENT)
      }, 1000)
    })
  },
  getdata({commit, state}) {
    axios('https://bird.ioliu.cn/weather?city=' + state.city)
      .then(function (response) {
        let list = response.data.result.daily
        console.log(list);
        console.log(JSON.stringify(list));
        // console.log(JSON.parse(list));
        commit(types.GETDATA, list)
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}
