<template>
  <div>
    <!-- <home></home> -->
    <if-test></if-test>
  </div>
</template>

<script>
// import Home from './page/ExHome.vue'
import IfTest from './page/IfTest.vue'
export default {
  name: 'App',
  components: {
    // Home,
    IfTest,
  }
}
</script>
<style>
  html, body{
    margin: 0px;
  }
</style>
