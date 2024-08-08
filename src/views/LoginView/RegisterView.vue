<script setup>
import { images } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
const handleSubmit = () => {};

const isDisplay = ref(false);

const toggleDisplay = () => {
  isDisplay.value = !isDisplay.value;
};
</script>

<template>
  <div class="wrapper">
    <div class="grid-left">
      <img :src="images.library" class="library-icon" />

      <img :src="images.loginImage" class="loginImage" />
    </div>
    <div class="login-page">
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="small-form">
          <h1>Đăng Ký</h1>
          <p>Chào mừng bạn đến với BeeBook!</p>
          <label for="email"> Email hoặc số điện thoại(*) </label>
          <input type="text" id="email" placeholder="abcd@gmail.com" />
          <label for="password"> Mật khẩu </label>
          <div class="input-container">
            <input
              :type="isDisplay ? 'text' : 'password'"
              id="password"
              placeholder="********"
            />
            <button class="fa-eye" type="button" @click="toggleDisplay">
              <FontAwesomeIcon :icon="isDisplay ? faEye : faEyeSlash" />
            </button>
          </div>
          <label for="re-password">Nhập lại mật khẩu </label>
          <div class="input-container">
            <input
              :type="isDisplay ? 'text' : 'password'"
              id="re-password"
              placeholder="********"
            />
            <button class="fa-eye" type="button" @click="toggleDisplay">
              <FontAwesomeIcon :icon="isDisplay ? faEye : faEyeSlash" />
            </button>
          </div>

          <div class="register-now">
            <span>Bạn đã có tài khoản?</span
            ><span><a href="login">Đăng nhập ngay</a></span>
          </div>
          <div class="hr">
            <hr />
            Hoặc
            <hr />
          </div>
        </div>
        <div class="facebook-google">
          <button class="facebook">
            <img :src="images.facebookIcon" class="icon" />Đăng nhập với
            Facebook
          </button>
          <button class="google">
            <img :src="images.googleIcon" class="icon" />Đăng nhập với Google
          </button>
        </div>
        <div class=""><button class="login">Đăng ký</button></div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./Login.scss");
</style>
