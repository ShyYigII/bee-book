<script setup>
import { images } from "@/assets/images";
import { ref } from "vue";

const url = ref(null);

const handleFileChange = (e) => {
  const inputFile = e.target.files[0];
  console.log(e.target.files[0]);
  url.value = URL.createObjectURL(inputFile);
};
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <v-stepper
        :items="['Thông tin truyện', 'Đăng truyện', 'Hoàn thành']"
        alt-labels
        class="stepper"
        next-text="Tiếp theo"
        prev-text="Quay lại"
      >
        <template v-slot:item.1>
          <div class="new-book-form">
            <div class="choose-image">
              <img :src="url ? url : images.solidColor" />
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                id="input-file"
                @change="handleFileChange"
              />
              <label class="outlined-button" for="input-file"
                ><span> + CHỌN ẢNH BÌA</span></label
              >
            </div>
            <div class="form-info">
              <label for="book-name">Tên truyện <span>*</span></label>
              <input id="book-name" type="text" placeholder="Nhập tên truyện" />
              <p>Tác giả</p>
              <input type="text" class="length-6" />
              <div class="grid-cols-2">
                <div style="display: flex">
                  <p class="length-6">Trạng thái</p>
                  <p style="margin-left: 6%">Thể loại</p>
                </div>
                <div>
                  <input
                    type="text"
                    class="length-6"
                    style="margin-right: 6%"
                  />
                  <input type="text" class="length-4" />
                </div>
              </div>
              <p>Giới hạn độ tuổi</p>
              <input type="text" class="length-6" />
              <p>Ghi chú tác giả</p>
              <textarea />
              <p>Giới thiệu truyện</p>
              <textarea />
              <div>
                <button
                  class="outlined-button"
                  style="width: 48%; margin-right: 4%"
                >
                  Hủy
                </button>
                <button class="orange-button" style="width: 48%">
                  Tiếp theo
                </button>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:item.2>
          <div class="new-chapter-form">
            <p>Chương số</p>
            <input type="text" />
            <p>Tên chương</p>
            <input type="text" />
            <p>Nội dung</p>
            <input type="file" accept=".doc, .docx" />
          </div>
        </template>
        <template v-slot:item.3>
          <div class="complete-form">
            <img :src="images.upBook" />
            <h1>ĐĂNG TRUYỆN THÀNH CÔNG</h1>
            <p>Bạn có quyền chỉnh sửa và thêm chương theo ý muốn của mình</p>
          </div>
        </template>
      </v-stepper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./NewBook.scss");
</style>
