<template>
  <div class="login-wrap">
    <div class="login-body">
      <p>zxq后台管理系统</p>
      <div class="login-content">
        <input v-model="userName" type="text" name="" placeholder="用户名">
        <input v-model="passWord" type="password" name="" placeholder="密码">
        <div class="login-btn" @click="checkin">
          {{btnText}}
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      btnText: '登录',
      userName: '',
      passWord: '',
      loginState: 0
    }
  },
  create () {
    this.btnText = '登录'
  },
  methods: {
    checkit () {
      axios('/api/login').then(this.getUserInfoSucc)
    },
    getUserInfoSucc (res) {
      res = res.data.data
      console.log(res)
      if () {
        this.loginState = 1
        if (localStorage.loginState) {
          localStorage.loginState = this.loginState
        } else {
          localStorage.setItem("loginState", this.loginState)
        }
      }
      console.log(localStorage.loginState)
    },
    checkin () {
      var validate = this.checkUser()
      if (validate) {
        this.btnText = '登录中...'
      }
    },
    checkUser () {
      if (this.userName === '') {
        console.log('用户名不能为空！')
        return false
      }
      if (this.passWord === '') {
        console.log('密码不能为空！')
        return false
      }
      this.checkit()
      return true
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-wrap
  display flex
  align-items center
  justify-content center
  background-color #324057
  height 100%
  width 100%
  .login-body
    width 20%
    color #fff
    font-size 34px
    text-align center
    .login-content
      margin-top 60px
      background-color #fff
      padding 10px 20px
      border-radius 5px
      input
        display block
        height 36px
        line-height 36px
        border-radius 5px
        border 1px solid #aaa
        width 96%
        margin-top 10px
        padding 0 2%
      .login-btn
        margin-top 20px
        margin-bottom 20px
        width 100%
        height 36px
        line-height 36px
        border-radius 5px
        font-size 24px
        background-color #20a0ff
        cursor pointer
</style>
