<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import Vuetify from 'vuetify'
export default {
  name: 'app',
  data: function() {
    return {
      cbu: ''
    }
  },
  vuetify: new Vuetify(),
  components: {
    Navbar
  },
  methods: {
    abrirCuenta() {
      $("#exampleModal").modal('show')
    },
    guardarCuenta() {

    }
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
