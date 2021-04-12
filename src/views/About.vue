<template>
  <div class="about">
    <Header msg='Welcome to About Page' />
    <p>This is a sample project that I did to practice Vue.js.</p>
    <a class="web-link" href="https://alireza-safari.ir" target="_blank">Contact Me</a>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'About',
  components: {
  Header
  }
}
</script>

<style scoped>

</style>