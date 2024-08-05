<script setup>
import HeaderViewer from "@/components/HeaderViewer.vue";
import Footer from "@/components/Footer.vue";
import { books } from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const books1 = [books.book1, books.book2, books.book5, books.book4];
</script>

<template>
  <HeaderViewer color="#fff" />
  <div class="content">
    <div class="panel">
      <div class="describe">
        <h1>Sách điện tử</h1>
        <h2>Hôm nay thiên kim lại đi vả mặt</h2>
        <p>
          Vừa tỉnh dậy, đại lão Doanh Tử Khâm trở thành cô con gái thất lạc mười
          lăm năm trời của nhà họ Doanh nhưng gia đình của cô đã nhận nuôi một
          đứa bé để thay thế cô. Đứa bé ấy dùng tên của cô, ngày sinh tháng đẻ
          của cô, hưởng thụ cả vật chất và tình yêu thương đáng lẽ thuộc về cô.
          Còn thứ Doanh Tử Khâm nhận được lại là sự cười nhạo, ghẻ lạnh vì cô
          không thông minh, giỏi giang và ngoan ngoãn như…
        </p>
        <div class="fav">
          <button class="fa-read">
            <FontAwesomeIcon :icon="faBook" class="icon" />Đọc sách
          </button>
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
  display: flex;
  background-color: var(--color-secondary);
  height: 400px;
  width: 100%;
  align-items: center;
  padding: 20px 100px;
  margin-bottom: 40px;
}

.describe {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 40px;
  }
  h2 {
    font-size: 2.3rem;
    font-weight: 700;
    padding-bottom: 10px;
  }

  p {
    font-size: 1.6rem;
    margin-left: 0;
    padding-right: 80px;
  }
}

.fav {
  height: 35px;
  display: flex;
}

button {
  font-size: 1.4rem;
  cursor: pointer;
  height: 100%;
}

.fa-heart {
  border: none;
  color: white;
  border-radius: 50%;
  border: 1px solid #cc8573;
  background: #f1b19e;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: 0px 4px 4px 0px #0000001c;

  &:hover {
    background-color: #fff;
    color: #cc8573;

    .icon {
      color: #cc8573;
    }
  }

  .icon {
    height: 15px;
    border: none;
    box-shadow: none;
    background-color: transparent;
  }
}

.fa-read {
  padding: 8px 13px;
  border-radius: 20px;
  color: #e07d45;
  border: none;
  background-color: #fff;
  margin-right: 20px;

  .icon {
    margin-right: 10px;
  }
}

.image {
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;

  img {
    height: 100%;
  }
}

.bookshelf {
  padding: 10px 10px;
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
  }
}
</style>
