<script setup>
import HeaderViewer from "@/components/HeaderViewer/HeaderViewer.vue";
import Footer from "@/components/Footer/Footer.vue";
import { books } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const books1 = [books.book1, books.book2, books.book5, books.book4];
const summary = `Vừa tỉnh dậy, đại lão Doanh Tử Khâm trở thành cô con gái thất lạc mười
          lăm năm trời của nhà họ Doanh nhưng gia đình của cô đã nhận nuôi một
          đứa bé để thay thế cô. Đứa bé ấy dùng tên của cô, ngày sinh tháng đẻ
          của cô, hưởng thụ cả vật chất và tình yêu thương đáng lẽ thuộc về cô.
          Còn thứ Doanh Tử Khâm nhận được lại là sự cười nhạo, ghẻ lạnh vì cô
          không thông minh, giỏi giang và ngoan ngoãn như…`;
</script>

<template>
  <HeaderViewer color="#fff" />
  <div class="content">
    <div class="panel">
      <div class="describe">
        <h1>Sách điện tử</h1>
        <h2>Hôm nay thiên kim lại đi vả mặt</h2>
        <p>
          {{ summary }}
        </p>
        <div class="fav">
          <a href="/book/1">
            <button class="fa-read">
              <span
                ><FontAwesomeIcon :icon="faBook" class="icon" />Đọc sách</span
              >
            </button>
          </a>
          <button class="fa-heart">
            <FontAwesomeIcon :icon="faHeart" class="icon" />
          </button>
        </div>
      </div>

      <div class="image"><img :src="books.book7" /></div>
    </div>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
      </div>
    </div>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import url("./EBook.scss");
</style>
