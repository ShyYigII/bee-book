<script setup>
import { icons } from "@/assets/images";
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
      <p><b>Tên hiển thị:</b> Quân Nguyễn</p>
      <p><b>Giới thiệu:</b> Chưa cập nhật</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 80vh;
  width: 60vw;
  background-color: #fff;
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

.archive {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
  grid-column-gap: 20px;
  margin-bottom: 30px;
  margin-left: 50px;

  .cell {
    background-color: var(--color-author-background);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
  }

  p {
    font-weight: 600;
    margin-left: 20px;
  }
}
p {
  margin-left: 50px;
  margin-bottom: 20px;
}
</style>
