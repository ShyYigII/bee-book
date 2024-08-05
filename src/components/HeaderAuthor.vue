<script setup>
import { images, icons } from "@/assets/images";

const props = defineProps({ color: String });
</script>

<template>
  <div class="wrapper" :style="{ backgroundColor: props.color }">
    <div class="inner">
      <div class="logo">
        <img :src="images.library" />
        <p>KÊNH CHO TÁC GIẢ</p>
      </div>
      <div class="actions">
        <a href="/">
          <img :src="icons.penIconSolid" class="icon" /><span
            >Trang chủ cộng đồng</span
          >
        </a>
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

.logo {
  height: 100%;
  display: flex;
  align-items: center;

  img {
    object-fit: cover;
    height: 200%;
    width: 100px;
  }
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

  a {
    display: inline-block;
    display: flex;
    align-items: center;
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
