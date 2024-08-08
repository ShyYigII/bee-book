<script setup>
import { images, icons } from "@/assets/images";

const props = defineProps({ color: String });
import { useUserStore } from "@/stores/useUserStore";

const user = useUserStore();
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
        <button>
          <img :src="images.avatar" /><span>{{ user.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./HeaderAuthor.scss");
</style>
