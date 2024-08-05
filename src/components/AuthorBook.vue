<script setup>
import { icons } from "@/assets/images";
import MyBook from "./MyBook.vue";
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="new-book">
        <span>
          <img :src="icons.penIconSolid" class="icon" /> TRUYỆN CỦA TÔI</span
        >
        <button>+ Thêm truyện mới</button>
      </div>
      <MyBook />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 80vh;
  width: 60vw;
  background-color: none;
  border-radius: 30px;
}

.inner {
  height: 100%;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
span {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: 600;
}

.new-book {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  button {
    padding: 15px 30px;
    background: #fb3a1a;
    border-radius: 30px;
    border: none;
    color: #fff;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
  }
}
</style>
