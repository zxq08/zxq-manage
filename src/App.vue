<template>
  <div class="body">
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app'
}
</script>
<style lang="stylus">
*
  margin 0
html,body
  height 100%
  .body
    height 100%
</style>
