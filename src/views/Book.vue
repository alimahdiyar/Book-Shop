<template>
  <div class="book">
  <Header msg='Description of 1' />
    <h3>{{ $store.state.books[0].text }}</h3>
    <h4>{{ $store.state.books[0].price }}</h4>
    <p>{{ $store.state.books[0].description }}</p>
    <router-link to="./Checkout.vue"><button class="btn">Checkout</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Book'
}
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>