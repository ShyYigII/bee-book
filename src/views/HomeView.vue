<script setup>
import HeaderViewer from "@/components/HeaderViewer.vue";
import Footer from "@/components/Footer.vue";
import { images, books, authors, news } from "@/assets/images";

const books1 = [books.book1, books.book2, books.book5, books.book4];
const authors1 = [
  authors.author1,
  authors.author2,
  authors.author3,
  authors.author4,
];

const news1 = [news.new1, news.new2, news.new3];

console.log(authors.author1);
</script>

<template>
  <HeaderViewer color="var(--color-secondary)" />
  <div class="content">
    <div class="panel"><img :src="images.panel" /></div>

    <p>Sách miễn phí</p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
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
  <Footer />
</template>

<style scoped lang="scss">
.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  & p {
    align-self: flex-start;
    margin-left: 40px;
    margin-top: 20px;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
.panel {
  width: 100%;

  img {
    object-fit: cover;
    width: 100%;
  }
}

.bookshelf {
  padding: 10px 20px;
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-bottom: 40px;

  & p {
    align-self: flex-start;
    margin-top: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 20px;
    margin-left: 0;
  }
}

.compartment {
  height: 300px;

  img {
    height: 100%;
    border-radius: 10px;
  }
}

.author {
  height: 200px;
  width: 200px;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}

.news {
  padding: 10px 20px;
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 30px;

  img {
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }
}
</style>
