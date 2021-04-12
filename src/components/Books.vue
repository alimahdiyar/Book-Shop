<template>
 <div class="books">
  <H2 msg='لیست کتاب ها '/>
  <div :key="book.id" v-for="book in $store.state.books">
      <router-link to="../views/Book.vue">{{ book.text }}</router-link>
      <h4>{{ book.price }}</h4>
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
import H2 from '../components/H2'
  export default {
    name: 'Books',
    components: {
      H2
    }
  }
</script>

<style scoped>
.books {
  font-size: 19px;
  text-align: right;
}
p {
  border-bottom: 5px dotted black;
  padding-bottom: 20px;
}
</style>