<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>

</style>