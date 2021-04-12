<template>
  <div class="home">
    <Header msg="Welcome to Sample Book Shop"/>
    <Books />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Books from '../components/Books'

export default {
  name: 'Home',
  components: {
    Header,
    Books
  }
}
</script>
