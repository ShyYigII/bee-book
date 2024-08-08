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
@import url("./BookUploaded.scss");
</style>
