let defaultLoginState = 0 // 默认登录状态为0，0为未登录，1为已登录
try {
  if (localStorage.loginState) {
    defaultLoginState = localStorage.loginState
  }
} catch (e) {}
export default {
  loginState: defaultLoginState
}
