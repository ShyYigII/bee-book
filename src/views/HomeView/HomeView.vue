<script setup>
import { images, books, authors, news } from "@/assets/images";
import { ref } from "vue";

const books1 = [books.book1, books.book2, books.book5, books.book4];
const authors1 = [
  authors.author1,
  authors.author2,
  authors.author3,
  authors.author4,
];

const counter = ref(1);

const news1 = [news.new1, news.new2, news.new3];

setInterval(() => {
  counter.value++;

  if (counter.value > 3) {
    counter.value = 1;
  }
  console.log(counter);
}, 4000);
</script>

<template>
  <div class="content">
    <div class="slider">
      <div class="slides">
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          :checked="counter === 1"
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          :checked="counter === 2"
        />
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          :checked="counter === 3"
        />

        <div class="panel first"><img :src="images.panel" /></div>
        <div class="panel"><img :src="images.panel2" /></div>
        <div class="panel"><img :src="images.panel3" /></div>

        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
        </div>
      </div>

      <div class="navigation-mannual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
      </div>
    </div>

    <p>Sách miễn phí</p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <a href="/book/1"> <img :src="book" /></a>
        <p>{{ book.charAt(book.length - 6) }}</p>
      </div>
    </div>

    <p>Mới nhất</p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
        <p>{{ book.charAt(book.length - 6) }}</p>
      </div>
    </div>

    <p>Tác phẩm kinh điểm</p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
        <p>{{ book.charAt(book.length - 6) }}</p>
      </div>
    </div>
    <p>Tác giả nổi bật</p>
    <div class="bookshelf">
      <div
        v-for="author in authors1"
        :key="author.charAt(author.length - 6)"
        class="author"
      >
        <img :src="author" />
        <p>{{ author.charAt(author.length - 6) }}</p>
      </div>
    </div>

    <p>Tin mới nhất</p>
    <div class="news">
      <div v-for="new1 in news1" :key="new1.charAt(new1.length - 6)">
        <img :src="new1" class="news-cell" />
        <p>{{ new1.charAt(new1.length - 6) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("HomeView.scss");
</style>
