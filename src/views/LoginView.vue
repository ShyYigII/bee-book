<script setup>
import image from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const handleSubmit = () => {};
</script>

<template>
  <div class="wrapper">
    <img :src="image.loginImage" class="loginImage" />
    <div class="login-page">
      <h1>Đăng Nhập</h1>
      <p>Chào mừng bạn đến với BeeBook!</p>
      <form @submit.prevent="handleSubmit" class="login-form">
        <label for="email"> Email hoặc số điện thoại(*) </label>
        <input type="text" id="email" placeholder="abcd@gmail.com" />
        <label for="password"> Mật khẩu </label>
        <input type="password" id="password" placeholder="********" />
        <button><FontAwesomeIcon :icon="faEye" /></button>

        <div>
          <span>Chưa có tài khoản?</span
          ><span><a href="register">Đăng ký ngay</a></span>
        </div>
        <div>
          <hr />
          Hoặc
          <hr />
        </div>
        <div>
          <button class="facebook">
            <img :src="image.facebookIcon" class="icon" />Đăng nhập với Facebook
          </button>
          <button>
            <img :src="image.googleIcon" class="icon" />Đăng nhập với Facebook
          </button>
        </div>
        <div class=""><button class="login">Đăng nhập</button></div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
h1 {
  color: var(--color-font-bold);
  font-weight: 600;
}

.loginImage {
  width: 100%;
  height: auto;
  max-height: 100vh;
}
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input {
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
}

input:focus {
  border-color: #3b82f6;
}

input[type="password"] {
  position: relative;
}

.fa-eye {
  position: absolute;
}

hr {
  display: inline-block;
  width: 30px;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin: 5px;
}

button.login {
  background-color: var(--color-primary);
  font-weight: 400;
  width: 30%;
}

.icon {
  object-fit: contain;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
  padding: 2px;
}

.facebook {
  color: #3b82f6;
}

a {
  color: var(--color-primary);
}
</style>
