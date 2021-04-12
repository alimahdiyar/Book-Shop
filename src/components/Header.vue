<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
* {
  margin-top: 0px;
  padding-top: 0px;
  
}
h1 {
  background-color: #dea509;
  color: black;
  text-align: center;
  border: 10px solid #dea509;
}
</style>