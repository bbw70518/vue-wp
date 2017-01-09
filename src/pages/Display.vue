<template>
  <div id="app">
    <img src="../assets/logo.png">
    <f-b></f-b>
  </div>
</template>

<script>
import Hello from '../components/Hello'

import FB from '../components/FB'

export default {
  name: 'app',
  components: {
    FB
  }
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
</style>
