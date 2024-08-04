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
        <RouterLink to="/author/profile" exactActiveClass>
          <span>
            <FontAwesomeIcon :icon="faUserCircle" class="icon" />
            Hồ sơ tác giả
          </span>
        </RouterLink>
        <RouterLink to="/author/myBook" exactActiveClass>
          <span
            ><FontAwesomeIcon :icon="faBookmark" class="icon" />
            Truyện của tôi
          </span>
        </RouterLink>
        <RouterLink to="/login" exactActiveClass>
          <span
            ><FontAwesomeIcon :icon="faArrowRightFromBracket" class="icon" />
            Đăng xuất
          </span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  height: 500px;
  width: 20vw;
  border-radius: 10px;
}

.inner {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.avatar {
  display: flex;
  align-items: center;
  flex-direction: column;

  & img {
    border-radius: 50%;
    height: 200px;
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  padding: 20px;

  span {
    font-size: 2.2rem;
    display: inline-block;
    padding: 12px;
  }

  span:hover {
    color: #ec711a;
  }
  .icon {
    font-size: 2.5rem;
  }
}

.router-link-active {
  color: #ec711a;
}
</style>
