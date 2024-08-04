<script setup>
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="logo">BEEBOOK</div>
      <div class="books-category">
        <a href="a">Sách điện tử</a>
        <a href="a">Sách nói</a>
        <a href="a">Sách tóm tắt</a>
        <a href="a">Sách thể loại</a>
      </div>
      <div class="actions">
        <div class="search">
          <input type="text" placeholder="search stories or poeple" />
          <FontAwesomeIcon :icon="faSearch" class="fa-search" />
        </div>
        <button class="register"><a href="register">Đăng ký</a></button>
        <button class="login"><a href="login">Đăng nhập</a></button>
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
  z-index: 1000;
}

.inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
}

.books-category {
  a {
    padding: 10px 30px;
    color: #000;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 500;
    display: inline-block;
    &:hover {
      color: #fff;
    }
  }
}

.actions {
  display: flex;
}

.search {
  position: relative;
}

.fa-search {
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 70%;
  color: var(--color-font-search);
}

input {
  border: 1px solid var(--color-secondary-bold);
  border-radius: 15px;
  padding: 5px 10px;
  padding-left: 20px;
  outline: none;
  &::placeholder {
    color: var(--color-font-search);
  }
}

button {
  border-radius: 15px;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid;
  font-size: 1.4rem;
  &.register {
  }

  &.login {
    border-color: var(--color-primary-bold);
    background-color: var(--color-primary);
  }
}
</style>
