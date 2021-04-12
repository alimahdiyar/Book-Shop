<template>
  <h2>{{ msg }}</h2>
</template>

<script>
export default {
  name: 'H2',
  props: {
    msg: String
  }
}
</script>

<style>
h2 {
  text-align: right;
  padding-bottom: 10px;
  border-bottom: 2.5px black solid;
}
</style>