<template>
  <div id="nav">
    <router-view style="margin-bottom:30px;" />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <Footer />
  </div>
  
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #dea509;
}
</style>
