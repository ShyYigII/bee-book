<script setup>
import { icons } from "@/assets/images";
import BookUploaded from "../BookUploaded/BookUploaded.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="new-book">
        <span>
          <img :src="icons.penIconSolid" class="icon" /> TRUYỆN CỦA TÔI</span
        >
        <RouterLink to="newbook"><button>+ Thêm truyện mới</button></RouterLink>
      </div>
      <BookUploaded />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./AuthorBook.scss");
</style>
