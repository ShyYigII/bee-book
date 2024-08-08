<script setup>
import { icons } from "@/assets/images";
import { useUserStore } from "@/stores/useUserStore";

const user = useUserStore();
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <span> <img :src="icons.penIconSolid" class="icon" />THÀNH TÍCH</span>
      <div class="archive">
        <div class="cell">
          <img :src="icons.redCircle" class="icon" />
          <p>Truyện đã đăng</p>
        </div>
        <div class="cell">
          <img :src="icons.list" class="icon" />
          <p>Chương đã đăng</p>
        </div>
        <div class="cell">
          <img :src="icons.heart" class="icon" />
          <p>Yêu thích</p>
        </div>
      </div>
      <span> <img :src="icons.penIconSolid" class="icon" />THÔNG TIN</span>
      <p><b>Tên hiển thị:</b> {{ user.name }}</p>
      <p><b>Giới thiệu:</b> Chưa cập nhật</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./AuthorProfile.scss");
</style>
