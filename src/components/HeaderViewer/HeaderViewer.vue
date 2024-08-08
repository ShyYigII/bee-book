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
@import url("./HeaderViewer.scss");
</style>
