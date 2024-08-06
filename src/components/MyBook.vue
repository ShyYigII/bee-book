<script setup>
import { books } from "@/assets/images";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const date = "27/2/2024";
</script>

<template>
  <div class="book-wrapper">
    <div class="book-inner">
      <div class="book-cover"><img :src="books.book8" /></div>
      <div class="book-info">
        <h1>Công chúa đến rồi, quần thần cẩn thận</h1>
        <p>Cập nhật: {{ date }}</p>
        <div class="chapter">
          <div class="grid-1">
            <span><FontAwesomeIcon :icon="faBars" class="icon" />Chương</span>
            <p>5</p>
          </div>
          <div class="grid-2">
            <span><FontAwesomeIcon :icon="faEye" class="icon" />Lượt đọc</span>
            <p>2</p>
          </div>
        </div>
        <div class="status">
          <p>Trạng thái</p>
          <button class="new-book">Hoàn thành</button>
        </div>
      </div>
      <div class="edit-book">
        <button class="outline-button">Chỉnh sửa</button>
        <button class="outline-button">Danh sách chương</button>
        <hr />
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
  grid-template-columns: auto auto auto;
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

.book-info {
  height: 100%;
  border-right: 2px solid #bab0b0;
  padding-right: 20px;
  width: 50%;
}

.chapter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
}

.grid-1 {
  border-right: 3px solid #bab0b0;
  .icon {
    margin-right: 10px;
  }
}

.grid-2 {
  padding-left: 10px;

  .icon {
    margin-right: 10px;
  }
}

.status {
  margin-top: 10px;
  display: flex;
  align-items: center;

  p {
    margin-right: 20px;
  }

  button {
    margin-top: 0px;
    padding: 7px 15px;
    color: #fb3a1a;
    background: #ffbfaa;
  }
}

.edit-book {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
}
.outline-button {
  padding: 10px 20px;
  color: #fb3a1a;
  border-radius: 30px;
  border: 1px solid #fb3a1a;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  margin-bottom: 10px;
}

.new-book {
  padding: 10px 20px;
  background: #fb3a1a;
  border-radius: 30px;
  border: none;
  color: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  margin-top: 20px;
}
</style>
