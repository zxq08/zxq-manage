<template>
  <div class="login-wrap">
    <div class="login-body">
      <p>zxq后台管理系统</p>
      <div class="login-content">
        <input v-model="userName" type="text" name="" placeholder="用户名">
        <input v-model="passWord" type="password" name="" placeholder="密码">
        <div ref="loginBtn" class="login-btn" @click="checkUser">
          {{btnText}}
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      btnText: '登录',
      userName: '',
      passWord: ''
    }
  },
  create () {
    this.btnText = '登录'
  },
  methods: {
    checkin () {
      axios('/api/login').then((res) => {
        this.getUserInfoSucc(res)
      })
    },
    getUserInfoSucc (res) {
      res = res.data.data
      if (this.userName === res.userName && this.passWord === res.passWord) {
        console.log(this.$refs.loginBtn)
        this.$refs.loginBtn.disable = true
        this.btnText = '登录中...'
        // loginState表示登录状态，1为登录，0为未登录
        this.$store.dispatch('changeLoginState', 1)
        setTimeout(() => {
          this.$store.dispatch('changeLoginState', 0)
        }, 300000)
        this.$router.push('/home')
      } else {
        alert('账号或密码错误！请重新输入！')
      }
    },
    checkUser () {
      if (this.userName === '') {
        alert('用户名不能为空！')
        return false
      }
      if (this.passWord === '') {
        alert('密码不能为空！')
        return false
      }
      this.checkin()
      return true
    },
    ...mapMutations(['changeLoginState'])
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
    font-size 1.875vw
    text-align center
    .login-content
      margin-top 60px
      background-color #fff
      padding 10px 20px
      border-radius 5px
      input
        display block
        height 1.875vw
        line-height 1.875vw
        border-radius 5px
        border 1px solid #aaa
        width 96%
        margin-top 10px
        padding 0 2%
      .login-btn
        margin-top 20px
        margin-bottom 20px
        width 100%
        height 1.875vw
        line-height 1.875vw
        border-radius 5px
        font-size 1.25vw
        background-color #20a0ff
        cursor pointer
</style>
