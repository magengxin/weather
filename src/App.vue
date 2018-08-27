<template>
  <div id="app">
    <h3>{{message}}的天气情况</h3>
    <input type="text" placeholder="请输入你想知道的天气位置" class="weather" v-model="message" @keyup.enter="getweather">
    <input type="button" value="获取天气" @click="setWeather"><br>

    <!--<input type="text" v-model="message">-->
    <!--{{reversedMessage}}-->

    <!--<input type="button" value="增1" @click=increment>-->
    <!--<input type="button" value="减1" @click="decrement">-->
    <!--<input type="button" value="偶数增1" @click="oddadd">-->
    <!--<input type="button" value="异步执行增1" @click="runasync">-->
    <!--<div>当前数字：{{count}} ,他是 {{isOdd}}</div>-->

    <ul>
      <li v-for="v in weather">
        <p>{{v.date}}{{v.week}}</p>
        <p>白天</p>
        <p>{{v.day.temphigh}}°C<br>{{v.day.weather}}<br>{{v.day.winddirect}}<br>{{v.day.windpower}}</p>
        <p>''</p>
        <p></p>
        <p>夜晚</p>
        <p>{{v.night.templow}}<br>{{v.night.weather}}<br>{{v.night.winddirect}}<br>{{v.night.windpower}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from "vuex";

  export default {
    data() {
      return {
        message: '上海',
        weather: []
      }
    },
    computed: {
      ...mapGetters([
        "count",
        "isOdd",
        "city",
        // "weather"
      ]),
      ...mapState(['city']),
      reversedMessage: function () {
        return this.message++
      }
    },
    watch: {
      'message': {
        deep: true,
        handler(value) {
          this.$store.commit('CITY', value)
        }
      }
    },
    /*在组件中观察*/
    mounted() {/*生命周期*/
      // this.increment(); // 点击事件不需要一开始就执行
      this.setWeather()
      // this.getApi()
      // 豆瓣项目中生命周期可以不用定义，就可以直接使用，但是这里不行，回来看下问题
      // 回来了，继续看问题
      // 解决：因为默认是10，刷新已经是11了，说明已经变化了，只是不再有绑定事件了，所以点击没反应，而且把获取天气的事件加上就立马出来了
    },
    methods: {
      /*映射数据*/
      ...mapActions([
        "increment",
        "decrement",
        "oddadd",
        "runasync",
        "getdata",
        // "setWeather",
        'getApi'
      ]),
      setWeather() {
        let eleVal = document.getElementsByClassName('weather')[0].value;
        var that = this;
        if (!eleVal) {
          return
        }
        this.axios('https://bird.ioliu.cn/weather?city=' + eleVal)
          .then(function (response) {
            let list = response.data.result.daily;
            that.weather = list
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      getweather() {
        this.setWeather()
      }
    }
  };
  /*自定义天气查询*/
  /*映射数据之后就可以继续methods的设置了，可以与映射数据同级添加*/
  /*映射数据：methods:{...mapActions([])}*/
  /*能获取输入框的值，不能给city设置，不能给全局状态设置值，没法修改全局状态的值*/
  /*使用v-model同步状态的值，但是不能修改，一修改就报错*/
  /*这是因为在vuex中定义的值，不能在组件中直接使用，使用会报错have no setter*/
  /*用了第一种方法，一点击就触发，不会保存v的值，行不通！！！*/
  /*mutations更改了状态city，怎么执行actions函数*/
  /*可以修改状态的值，但是不能触发actions函数*/
  /*修改state的值，然后重新执行axios的函数*/

  /*不在state中写，可以完成天气查询*/

  /**
   * 天气查询功能：
   * 1. 输入框输入天气，点击按钮进行天气查询
   * 2. 输入框回车查询天气
  */

  /*我监听组件中的一个输入框的值，通过它的改变this.$store.commit('CITY',value)，将value提交给mutations，在mutations中修改vuex中的state的值，然后执行actions里面的函数，显示我组件中监听的哪个值不是函数*/


</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .weather {
    width: 300px;
    padding: 2px 8px;
    box-sizing: border-box;
  }
</style>
