import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
