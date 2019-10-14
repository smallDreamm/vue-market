<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view/>
    <footNav></footNav>
  </div>
</template>

<script>
import headerNav from'./components/header-nav'
import footNav from'./components/foot-nav'
export default {
  name: 'app',
  components:{
    headerNav,
    footNav
  }
}
</script>

<style>

</style>
