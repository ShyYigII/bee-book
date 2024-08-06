<script setup>
import HeaderViewer from "@/components/HeaderViewer.vue";
import Footer from "@/components/Footer.vue";
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
  <HeaderViewer color="var(--color-secondary)" />
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

//slider

.slider {
  height: 400px;
  overflow: hidden;
  width: 100%;
}

.slides {
  height: 400px;
  display: flex;
  width: 300%;

  input {
    display: none;
  }
}

.panel {
  width: 33.34%;
  transition: 2s;

  img {
    width: 100%;
  }

  /* img {
    object-fit: cover;
    height: 100%;
    overflow: hidden;
  } */
}

//navigtion manual
.navigation-mannual {
  display: flex;
  justify-content: center;
  position: relative;
  top: -40px;
}

/* .manual-btn {
  border: 2px solid black;
  padding: 5px;
  border-radius: 10px;
  display: none;
} */
.manual-btn:not(:last-child) {
  margin-right: 10px;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -33.34%;
}
#radio3:checked ~ .first {
  margin-left: -66.67%;
}

//navigation auto
.navigation-auto {
  position: absolute;
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
