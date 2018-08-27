<template>
  <div id="app">
    <h3>this is vue-demo1</h3>
    <input type="button" value="增1" @click="increment">
    <input type="button" value="减1" @click="decrement">
    <input type="button" value="偶数增1" @click="oddadd">
    <input type="button" value="异步执行增1" @click="runasync">
    <input type="button" value="获取天气" @click="getdata">
    <div>
      当前数字：{{count}} ,他是 {{isOdd}}
    </div>
    <h3>下面是{{city}}天气状况</h3>
    <ul>
      <li v-for="v in weather">
        <p>{{v.date}}{{v.week}}</p>
        <p>白天</p>
        <p>{{v.day.temphigh}}°C<br>{{v.day.weather}}<br>{{v.day.winddirect}}<br>{{v.day.windpower}}</p>
        <p>''</p>
        <p> </p>
        <p>夜晚</p>
        <p>{{v.night.templow}}<br>{{v.night.weather}}<br>{{v.night.winddirect}}<br>{{v.night.windpower}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters([
      'count',
      'isOdd',
      'city',
      'weather'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'oddadd',
      'runasync',
      'getdata'
    ])
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
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
</style>
