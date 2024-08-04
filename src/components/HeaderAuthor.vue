<script setup>
import { images } from "@/assets/images";
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="logo">
        <p>Kênh cho tác giả</p>
      </div>
      <div class="actions">
        <a href="aaa">Trang chủ cộng đồng</a>
        <button><img :src="images.avatar" /><span>Quân Nguyễn</span></button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 70px;
  background-color: #fff;
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

.actions {
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    object-fit: cover;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
</style>
