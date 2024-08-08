<script setup>
import { images } from "@/assets/images";
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBookmark, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import { useUserStore } from "@/stores/useUserStore";

const user = useUserStore();
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="avatar">
        <img :src="images.avatar" />
        <h1>{{ user.name }}</h1>
      </div>
      <div class="link">
        <RouterLink to="/author/profile">
          <span>
            <FontAwesomeIcon :icon="faUserCircle" class="icon" />
            Hồ sơ tác giả
          </span>
          <span class="float-end"> > </span>
        </RouterLink>
        <RouterLink to="/author/myBook">
          <span
            ><FontAwesomeIcon :icon="faBookmark" class="icon" />
            Truyện của tôi
          </span>
          <span class="float-end"> > </span>
        </RouterLink>
        <RouterLink to="/login" activeClass>
          <span
            ><FontAwesomeIcon :icon="faArrowRightFromBracket" class="icon" />
            Đăng xuất
          </span>
          <span class="float-end"> > </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./AuthorSidebar.scss");
</style>
