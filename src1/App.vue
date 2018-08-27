<template>
  <div id="app">
    <h3>this is vue-demo1</h3>
    <input type="button" value="增1" @click="increment">
    <input type="button" value="减1" @click="decrement">
    <input type="button" value="偶数增1" @click="oddadd">
    <input type="button" value="异步执行" @click="runasync">
    <div>
      当前数字：{{count}} - {{isOdd}}
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters([
      'count',
      'isOdd'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'oddadd',
      'runasync'
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
