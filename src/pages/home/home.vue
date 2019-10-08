<template>
  <div>
    <el-container class="home-body">
      <el-aside class="home-menu">aside</el-aside>
      <el-container class="home-main">
        <el-header class="home-header">header</el-header>
        <el-main class="home-content">main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Home'
}
</script>
<style lang="stylus" scoped>
.home-body
  color #bfcbd9
  .home-menu
    background-color rgb(50, 64, 87)
  .home-header
    background-color #eff2f7
    color #96a7be
</style>
