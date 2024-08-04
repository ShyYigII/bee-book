<script setup></script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="logo"></div>
      <div class="books-category">
        <a href="a">Sách điện tử</a>
        <a href="a">Sách nói</a>
        <a href="a">Sách tóm tắt</a>
        <a href="a">Sách thể loại</a>
      </div>
      <div class="actions">
        <input type="text" />
        <button class="register">Đăng ký</button>
        <button class="login">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 60px;
  background-color: var(--color-secondary);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
}

a {
  padding: 10px;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
}

input {
  outline: none;
  border: 1px solid var(--color-secondary-bold);
}

button {
  border-radius: 15px;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid;

  &.register {
  }

  &.login {
    border-color: var(--color-primary-bold);
    background-color: var(--color-primary);
  }
}
</style>
