<script setup>
import { books, images } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { ref } from "vue";

const name = "Boss phản diện ngày ngày tìm đường chết";

const books1 = [books.book1, books.book2, books.book5, books.book4];

const isNotOpen = ref(true);

const handleOpen = () => {
  isNotOpen.value = !isNotOpen.value;
};
</script>

<template>
  <div class="content">
    <p><a href="/">Trang chủ</a> > {{ name }}</p>
    <div class="container">
      <div class="image"><img :src="books.book7" /></div>
      <div class="book-info">
        <h1>{{ name }}</h1>
        <!-- <div class="star">
          <p style="margin-right: 10px">5.0</p>
          <font-awesome-icon
            v-for="star in 5"
            :key="star"
            :icon="faStar"
            class="icon"
          />
        </div> -->

        <div class="grid-3">
          <div>
            <p>Tác giả</p>
            <p>Nữu Nữu Mật</p>
          </div>
          <div>
            <p>Thể loại</p>
            <p>Ngôn tình</p>
          </div>
          <div>
            <p>Nhà xuất bản</p>
            <p>NXB Lao động</p>
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            margin-top: 10px;
            width: 40%;
            margin-bottom: 20px;
          "
        >
          <p style="margin-right: 10px">Chọn loại sách</p>
          <div
            class="orange-button"
            style="
              background: #787171;
              border: none;
              margin-bottom: 0;
              width: 70%;
              text-align: center;
            "
          >
            Sách điện tử
          </div>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            margin-top: 10px;
            width: 45%;
          "
        >
          <p style="margin-right: 10px">Chọn nội dung</p>
          <div
            class="orange-button"
            style="
              background: #787171;
              border: none;
              margin-bottom: 0;
              width: 50%;
              text-align: center;
            "
          >
            Đầy đủ
          </div>
        </div>
        <a href="/read/1">
          <button
            class="orange-button"
            style="
              background: #fead32;
              margin-top: 30px;
              width: 25%;
              box-shadow: 0px 4px 4px 0px #00000040;
            "
          >
            <FontAwesomeIcon :icon="faBookOpen" style="margin-right: 10px" />
            Đọc sách
          </button>
        </a>
        <div>
          <FontAwesomeIcon :icon="faHeart" class="fa-heart" />
        </div>
        <p :class="isNotOpen ? 'see-more' : null" style="width: 70%">
          Hệ thống nói chỉ cần cô ấy tăng doanh số thì sẽ được sống lại, vì vậy,
          Trần Khê xắn tay áo lên Sau khi trải qua n thế giới, hệ thống cảm thấy
          gì đó sai sai, sao bộ chuyện tình tiết vô lý lại đùng đùng trở thành
          best seller được Trần Khê nhìn lên trời rầu rris: do đồng nghiệp làm
          nền cho cả đấy hệ thống cảm thấy gì đó sai sai, sao bộ chuyện tình
          tiết vô lý lại đùng đùng trở thành best seller
        </p>
        <button class="text-button" @click="handleOpen">
          {{ isNotOpen ? "Xem thêm" : "Thu gọn" }}
        </button>
      </div>
    </div>

    <div class="comment-rate">
      <h1>Độc giả nói gì vê {{ name }}</h1>
      <div>
        <div style="margin-top: 20px; margin-bottom: 20px">
          <button class="text-button">Bình luận(1)</button>
          <button class="text-button" style="margin-left: 10px; color: #000">
            Đánh giá và nhận xét(1)
          </button>
        </div>
        <div
          style="
            background-color: #787171;
            border-radius: 10px;
            padding: 15px 30px;
            color: #fff;
          "
        >
          <div style="display: flex; align-items: center">
            <img
              :src="images.solidColor"
              style="
                height: 40px;
                width: 40px;
                border-radius: 50%;
                margin-right: 10px;
              "
            />
            <a href="#" style="color: #fff; text-decoration: none">
              Nguyễn Thị Hồng Thắm</a
            >
          </div>
          <p style="margin-left: 50px">1/1/2024 14h22</p>
        </div>
      </div>
    </div>
    <p style="margin-top: 60px">Cùng tác giả</p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
        <p>{{ book.charAt(book.length - 6) }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("./BookInfoView.scss");
</style>
