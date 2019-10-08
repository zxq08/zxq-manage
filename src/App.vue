<template>
  <login></login>
</template>
<script>
import Login from './pages/login/login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>
<style lang="stylus">
*
  margin 0
html,body
  height 100%
</style>
