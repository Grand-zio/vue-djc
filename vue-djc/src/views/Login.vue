<template>
  <div class="container">
    <div id="containerLogin" class="container-login">
      <div id="loginPic" class="login-pic">
        <img class="loginImg" src="@/assets/loginImg/03.png" />
        <label for="loginPic">
          <h2>测试管理平台</h2>
        </label>
      </div>

      <div id="wrapLogin" class="wrap-login">
        <form id="loginForm" class="login-form">
          <div class="login-input">
            <input class="email" type="text" name="email" placeholder="邮箱" />
          </div>

          <div class="login-input">
            <input
              class="password"
              type="password"
              name="pass"
              placeholder="密码"
            />
          </div>

          <div id="forgetPassWord" class="forget-password">
            <a href="https://www.baidu.com/"> 忘记密码？ </a>
          </div>

          <div id="containerLoginFormBtn" class="container-login-form-btn">
            <button id="loginBtn" class="login-form-btn">
              <span>登 录</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style lang="scss" scoped>
// scoped 本文件有效
.container {
  padding: 0;
  overflow: hidden;
  background-color: #55b9f3;
  height: 100vh;
  font-family: "Microsoft soft";
}

.loginImg {
  height: 100px;
  width: 100px;
}

.container-login {
  width: 600px;
  height: 800px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: -380px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-color: rgba(255, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  box-shadow: rgb(255, 255, 255) 0px 0px 6px 1px;
  border-radius: 8px;
  font-size: 14px;
  padding: 0px;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  opacity: 1;
}

.login-pic {
  margin-top: 85px;
}

.wrap-login {
  margin-top: 100px;
}

.login-input {
  margin: 10px;
}

.email {
  border: 1px solid rgb(222, 222, 228);
  border-radius: 5px;
  outline-style: none;
  width: 340px;
  padding: 15px 10px;
  font-size: 12px;
  font-weight: 500;
}

.password {
  /* background-color: rgb(222, 222, 228); */
  outline-style: none;
  border: 1px solid rgb(222, 222, 228);
  border-radius: 5px;
  width: 340px;
  padding: 15px 10px;
  font-size: 12px;
  font-weight: 500;
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

.forget-password {
  /* background-color: rgb(222, 222, 228); */
  width: 480px;
  padding: 10px 5px;
}

a {
  color: #525e71;
  text-decoration: none;
  font-size: 10px;
  display: block;
  text-align: right;
}

.login-form-btn {
  width: 200px;
  margin-top: 40px;
  padding: 15px 0px;
  background-color: #55b9f3;
  border-width: 0px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  color: white;
}
</style>
