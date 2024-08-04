<script setup>
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import images from "@/assets/images/index";
</script>

<template>
  <div class="wrapper">
    <div class="info-section">
      <div>
        <p>
          <span class="icon"><FontAwesomeIcon :icon="faPhoneVolume" /></span
          >0346909582
        </p>
        <p>
          <span class="icon"> <FontAwesomeIcon :icon="faEnvelope" /></span
          >Bee@book.vn
        </p>
      </div>
      <div>
        <p class="info-bold">Về chúng tôi</p>
        <p>Giới thiệu</p>
        <p>Cơ cấu tổ chức</p>
        <p>Lĩnh vực hoạt động</p>
      </div>
      <div>
        <p class="info-bold">Công việc</p>
        <p>Cơ hội đầu tư</p>
        <p>Tuyển dụng</p>
        <p>Liên hệ</p>
      </div>
      <div>
        <p class="info-bold">Thông tin hữu ích</p>
        <p>Thỏa thuận sử dụng dịch vụ</p>
        <p>Quyền lợi</p>
        <p>Quy định riêng tư</p>
      </div>
      <div>
        <p class="info-bold">Tin tức</p>
        <p>Tin dịch vụ</p>
        <p>Review sách</p>
        <p>Lịch phát hành</p>
      </div>
    </div>
    <div class="download-section">
      <a href="download"><img :src="images.downloadAppStoreButton" /></a>
      <a href="download"> <img :src="images.dowloadGooglePlayButton" /></a>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--color-background-footer);
  border-top: 15px solid var(--color-secondary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-section {
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 50px;
}

.info-bold {
  font-weight: 700;
}

.icon {
  padding: 5px;
}
.download-section {
  padding-top: 40px;
  width: 30%;
  justify-content: space-between;
  display: flex;
}

img {
  object-fit: cover;
  height: 50px;
}
</style>
