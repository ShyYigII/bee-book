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
          <h1>Đăng Nhập</h1>
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

          <div class="register-now">
            <span>Chưa có tài khoản?</span
            ><span><a href="register">Đăng ký ngay</a></span>
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
        <div class=""><button class="login">Đăng nhập</button></div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 4fr 6fr;
}

.grid-left {
  position: relative;
}

.library-icon {
  position: absolute;
  height: 20%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 100%;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  align-items: center;

  h1 {
    color: var(--color-font-bold);
    font-weight: 600;
    font-size: 3rem;
    padding-bottom: 10px;
  }

  p {
    padding-bottom: 40px;
    font-size: 1.7rem;
  }

  .small-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 20px;
  }
}
label {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.8rem;
}

input {
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
}

.input-container {
  position: relative;
  padding: 0;

  input {
    width: 100%;
  }

  .fa-eye {
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
    right: 4px;
    background-color: transparent;
    color: #ccc;
    border: none;
    cursor: pointer;
  }
}

hr {
  display: inline-block;
  width: 100px;
  vertical-align: middle;
  margin: 20px;
  font-size: 1.7rem;
}

.register-now {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  /* font-size: 1.7rem; */
}

.hr {
  align-self: center;
}

button {
  background-color: transparent;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin: 5px;

  &.login {
    background-color: var(--color-primary);
    font-weight: 600;
    padding: 10px 30px;
    border: none;
    margin-top: 20px;
  }

  &.facebook {
    border: 1px solid var(--color-border);
    margin-right: 30px;
    padding: 10px;
  }
  &.google {
    border: 1px solid var(--color-border);
    padding: 10px;
  }
}

.facebook-google {
  display: flex;
  justify-content: space-between;
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

@media (max-width: 1350px) {
  hr {
    display: none;
  }
}

@media (max-width: 800px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .grid-left {
    display: none;
  }
}
</style>
