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
      <div class="progress">Progress</div>
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
              <input type="text" class="length-6" style="margin-right: 6%" />
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
            <button class="orange-button" style="width: 48%">Tiếp theo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 130vh;
  width: 60vw;
  background-color: #fff;
  border-radius: 30px;
  overflow-y: scroll;
}

.inner {
  height: 100%;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  input[type="text"],
  textarea {
    background-color: var(--color-author-background);
    border: none;
    border-radius: 30px;
    padding: 15px;
    outline: none;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  textarea {
    border-radius: 10px;
    height: 120px;
    resize: none;
  }

  .length-6 {
    width: 58%;
  }
  .length-4 {
    width: 36%;
  }
}

.new-book-form {
  display: grid;
  grid-template-columns: 4fr 6fr;
  margin-top: 20px;
}

.progress {
  padding: 20px;
}

.choose-image {
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: cover;
    width: 100%;
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
  }
}

input[type="file"] {
  display: none;
}

.form-info {
  display: flex;
  flex-direction: column;
}

.grid-cols-2 {
  display: flex;
  flex-direction: column;

  p {
    display: flex;
  }
}
</style>
