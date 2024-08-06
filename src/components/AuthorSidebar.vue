<script setup>
import { images } from "@/assets/images";
import { RouterLink } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBookmark, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="avatar">
        <img :src="images.avatar" />
        <h1>Quân Nguyễn</h1>
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
.wrapper {
  background-color: #fff;
  height: 400px;
  width: 20vw;
  border-radius: 30px;
}

.inner {
  height: 100%;
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.avatar {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 40%;
  margin-bottom: 40px;

  & img {
    border-radius: 50%;
    height: 100%;
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 2rem;
    font-weight: 600;
  }
}

.link {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;

  span {
    display: inline-block;
    padding: 12px;
  }

  span:hover {
    color: #ec711a;
  }
  .icon {
    margin-right: 5px;
  }

  .float-end {
    float: right;
  }
}

.router-link-active {
  color: #ec711a;
}
</style>
