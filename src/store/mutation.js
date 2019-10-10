export default {
  changeLoginState (state, loginState) {
    this.state.loginState = loginState
    try {
      localStorage.loginState = loginState
    } catch (e) {}
  }
}
