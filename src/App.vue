<template>
  <div id="app">
    
      <app-header />
    
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  export default {
    name: 'app',
    components: {
      'app-header': Header
    }
  }
</script>

<style lang="scss">
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
