<script setup>
import { faBars, faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";

const props = defineProps({ color: String });
const isShowSideBarList = ref(true);
const isShowSideBar = ref(false);

const showSideBar = () => {
  isShowSideBar.value = !isShowSideBar.value;
};
</script>

<template>
  <div class="wrapper" :style="{ backgroundColor: props.color }">
    <div class="inner">
      <div>
        <a href="/" class="logo-libraby">LIBRARY</a>
      </div>
      <div class="books-category">
        <a href="/ebook">Sách điện tử</a>
        <a href="a">Sách nói</a>
        <a href="a">Sách tóm tắt</a>
        <a href="a">Thể loại</a>
      </div>

      <div style="position: relative">
        <div class="books-category-sidebar" v-if="isShowSideBar">
          <a href="#" @click="showSideBar"><FontAwesomeIcon :icon="faX" /></a>
          <a href="/ebook">Sách điện tử</a>
          <a href="a">Sách nói</a>
          <a href="a">Sách tóm tắt</a>
          <a href="a">Thể loại</a>
        </div>
        <a href="#" @click="showSideBar">
          <FontAwesomeIcon
            :icon="faBars"
            v-if="isShowSideBarList"
            class="list-icon"
          />
        </a>
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
  /* background-color: var(--color-secondary); */
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

.logo-libraby {
  font-family: "Inknut Antiqua", "IBM Plex Sans";
  font-weight: 700;
  font-size: 2.5rem;
}

.books-category {
  a {
    padding: 10px 30px;
    color: #000;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    display: inline-block;

    &:hover {
      /* color: #fff; */
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
    font-size: smaller;
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

.books-category-sidebar {
  position: absolute;
  left: 100%;
  top: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10%);
  height: auto;
  width: 200px;
  background-color: var(--color-secondary);
  z-index: 1001;
  color: #000;
  box-shadow: 0px 4px 4px 0px #00000040;

  a {
    padding: 10px 30px;
    color: #000;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    display: inline-block;
  }
}

.list-icon {
  display: none;
}

@media (max-width: 1190px) {
  .books-category {
    a {
      padding: 5px 5px;
    }
  }
}

@media (max-width: 990px) {
  .books-category {
    display: none;
  }
  .list-icon {
    display: block;
  }
}
</style>
