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
    // getweather();

    function getweather() {
      axios('https://bird.ioliu.cn/weather?city=' + state.city)
        .then(function (response) {
          console.log(response);
          let list = response.data.result.daily;
          commit(types.GETDATA, list)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  getApi({}) {
    axios.post('http://dcms.thedream.cc/snh48/gift/stat?callback=jQuery112408395746072642423_1535016626831&_=1535016626832',
      'content:232323'
      // {
      //   content: '测试信息'
      // },
      // {
      //   headers: {
      //     'content-type': 'application/x-www-form-urlencoded'
      //   }
      // }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

