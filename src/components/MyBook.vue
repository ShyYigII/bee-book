<script setup>
import { books } from "@/assets/images";

const date = "27/2/2024";
</script>

<template>
  <div class="book-wrapper">
    <div class="book-inner">
      <div class="book-cover"><img :src="books.book8" /></div>
      <div class="book-info">
        <h1>Công chúa đến rồi, quần thần cẩn thận</h1>
        <p>Cập nhật: {{ date }}</p>
      </div>
      <div class="edit-book">
        <button>Chỉnh sửa</button>
        <button>Danh sách chương</button>
        <button class="new-book">Thêm chương</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-wrapper {
  background-color: #fff;
  height: 200px;
  width: 50vw;
  border-radius: 30px;
}

.book-inner {
  height: 100%;
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 5fr 3fr;
  grid-column-gap: 15px;
  display: flex;
  align-items: center;
}

.book-cover {
  height: 150px;

  justify-content: center;

  img {
    height: 100%;
  }
}

.edit-book {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

button {
  .new-book {
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
