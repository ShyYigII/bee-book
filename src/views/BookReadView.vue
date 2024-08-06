<script setup>
import HeaderViewer from "@/components/HeaderViewer.vue";
import { faCaretDown, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { books, icons } from "@/assets/images";
import { faComment, faEye } from "@fortawesome/free-regular-svg-icons";

const books1 = [books.book1, books.book2, books.book3, books.book6];
const aArray = [
  "Điều khoản",
  "Bảo mật",
  "Payment Policy",
  "Thiết lập",
  "Trợ giúp",
  "© 2024 Library",
];

const name = "Boss phản diện ngày ngày tìm đường chết";
const summary = `Vừa tỉnh dậy, đại lão Doanh Tử Khâm trở thành cô con gái thất lạc mười
          lăm năm trời của nhà họ Doanh nhưng gia đình của cô đã nhận nuôi một
          đứa bé để thay thế cô. Đứa bé ấy dùng tên của cô, ngày sinh tháng đẻ
          của cô, hưởng thụ cả vật chất và tình yêu thương đáng lẽ thuộc về cô.
          Còn thứ Doanh Tử Khâm nhận được lại là sự cười nhạo, ghẻ lạnh vì cô
          không thông minh, giỏi giang và ngoan ngoãn như…`;

const chapContent = `Nữ tác giả Trần Khê nổi tiếng chuyên viết truyện trên mạng đã tèo rồi cô đang cố gắng gắp dưa cải muối chua Phù Lăng vào trong trứng luộc nước trà thì xảy ra động đất. Có lẽ ông trời cảm thấy cô ăn uống quá xa hoa lãng phí nên đã nổi giận.
Nhờ sự dư thừa năng lượng do chứng hưng cảm, cô đã cứu được mười bảy người, khi đang lao vào cứu người thứ mười tám thì bị đá đập trúng.
Bị đập thành cái bánh nhân thịt không đúng nguyện vọng được chết một cách vẻ vang của cô, nhưng cứu được nhiều người như vậy, thôi cũng được.
Một giọng nói non nớt chợt vang lên trong đầu Trần Khê như thủy triều trào dâng.
[Liên kết với hệ thống sách best seller và có cơ hội sống lại. Chấp nhận/Từ chối?]
“Từ chối”
[Từ chối sẽ toang đấy.]
“Toang thì toang”.
Dọa ai chứ?
Khi phát bệnh, trong đầu cô từng vẽ ra hàng ngàn cách để chết, viết thành sách bán chạy như tôm tươi, thế nên cô không sợ chết.
[Thử đi mà.]
“Tôi không thích chinh phục tình cảm của người khác.” Cô chỉ muốn nắm giữ cuộc đời mình.
Nếu không được tự do thì thà chết còn hơn.
[Không nhất thiết phải chinh phục tình cảm của người khác. Bestseller không chỉ có tuyến tình cảm. Phong cách của chị là không để cảm xúc chi phối, đi theo mạch chuyện, tư tưởng đúng đắn, tiết tấu nhanh, cảm xúc sảng khoái, rất phù hợp với hệ thống bọn em.]
Hệ thống ra sức giới thiệu, Trần Khê cũng nghiêm túc lấy lệ
“Cảm ơn đã mời, không ký”
Lập trường khác nhau, không cần cố gắng thuyết phục.
[Tín hiệu không tốt cho lắm… Chị nói gì em nghe không rõ… A được rồi, chị đã đồng ý, ký kết thành công.]
Chẳng phải kiểu mặt dày trơ tráo này là mánh khóe cô thường dùng để nợ chương độc giả sao? Trần Khê nghĩ thầm.
[Dịch chuyển tức thời nhé?]
“Không”
[Sao lại không, dịch chuyển tức thời thời trúng…]
   `;

const lines = chapContent.split("\n");
console.log(lines);

const chapters = ["Chương 1: Đây không phải truyện niên đại"];
</script>

<template>
  <HeaderViewer color="#fff" />
  <div class="content">
    <div style="display: flex; justify-content: space-between; width: 100%">
      <button :class="['text-button', 'catalogue']">
        {{ name }}
        <FontAwesomeIcon :icon="faCaretDown" style="margin-left: 30px" />
      </button>

      <div style="display: flex; width: 15%; align-items: center">
        <div
          style="
            border-right: 2px solid #999999;
            height: 80%;
            display: flex;
            align-items: center;
            padding-right: 10px;
            justify-content: center;
          "
        >
          <button class="plus-button">
            <FontAwesomeIcon :icon="faPlus" />
          </button>
        </div>
        <div style="width: 70%; padding-left: 10px">
          <FontAwesomeIcon
            :icon="faStar"
            style="color: #787171; margin-right: 10px"
          />
          <p style="color: #ff7512; display: inline">Bình chọn</p>
        </div>
      </div>
    </div>
    <div class="panel">
      <img :src="books.book8" />
      <div style="margin-left: 20px">
        <p style="margin-bottom: 20px">BẠN ĐANG ĐỌC</p>
        <h1>{{ name.toUpperCase() }}</h1>
        <p class="see-more" style="margin: 10px 0">{{ summary }}</p>
        <p>Tác giả: Nữu Nữu Mẫn</p>
      </div>
    </div>
    <p>{{ chapters[0].toUpperCase() }}</p>
    <div
      style="
        margin: 15px auto;
        border-bottom: 3px solid #d2d0d0;
        width: 30%;
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
      "
    >
      <span style="color: #7e7b7b; margin-left: 20px"
        ><FontAwesomeIcon :icon="faEye" />14.4k</span
      >
      <span style="color: #7e7b7b; margin-left: 20px"
        ><FontAwesomeIcon :icon="faStar" />833</span
      >
      <span style="color: #7e7b7b; margin-left: 20px">
        <FontAwesomeIcon :icon="faComment" />80
      </span>
    </div>
    <div style="padding: 10px 40vh">
      <p v-for="(line, index) in lines" :key="index">{{ line }}</p>
    </div>
    <div
      style="
        margin-top: 20px;
        width: 30%;
        display: flex;
        justify-content: center;
      "
    >
      <button class="contained">Quay lại</button>
      <button class="contained">Đọc tiếp</button>
    </div>
    <div
      style="
        margin-top: 20px;
        width: 30%;
        display: flex;
        justify-content: space-between;
        border-bottom: 3px solid #d7d5d5;
        padding-bottom: 30px;
      "
    >
      <button class="text-button" style="color: #000">+ Thêm</button>
      <div class="share">
        <img :src="icons.facebook" />
        <img :src="icons.twitter" />
        <img :src="icons.pinterest" />
        <img :src="icons.tiktok" />
        <img :src="icons.more" />
      </div>
    </div>
    <p style="align-self: flex-start; margin: 20px auto 10px 100px">
      Có thể bạn sẽ thích
    </p>
    <div class="bookshelf">
      <div v-for="book in books1" :key="book.charAt(0)" class="compartment">
        <img :src="book" />
        <p>{{ book.charAt(book.length - 6) }}</p>
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: center;
        width: 50%;
        margin-top: 20px;
        margin-bottom: 10px;
      "
    >
      <div style="width: 100%; display: flex; justify-content: space-between">
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Library độc quyền</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Thử dùng gói cao cấp</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Tải ứng dụng</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Ngôn ngữ</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Các tác giả</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Hợp tác thương hiệu</a
        >
        <a
          style="font-size: 1.4rem; margin-right: 5px; font-weight: 600"
          href="#"
          >Công việc</a
        >
      </div>
    </div>
    <div>
      <a
        v-for="(a, index) in aArray"
        :key="index"
        style="font-size: 1.3rem; margin-right: 10px; color: #999999"
        href="#"
        >{{ a }}</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
}

.catalogue {
  padding: 20px 40px;
  color: black;
}

.panel {
  display: flex;
  background-color: var(--color-secondary);
  height: 270px;
  width: 100%;
  align-items: center;
  padding: 20px 50vh;
  margin-bottom: 40px;
  justify-content: center;

  img {
    height: 90%;
    object-fit: cover;
  }
}

.plus-button {
  border-radius: 10px;
  width: auto;
  background: #ff7512;
  color: #fff;
  border: none;
  cursor: pointer;
  aspect-ratio: 1/1;
  height: 90%;
}

.contained {
  border: none;
  color: white;
  background-color: black;
  padding: 10px 60px;
  border-radius: 30px;
  width: 47.5%;

  &:first-child {
    margin-right: 5%;
  }
}

.share {
  img {
    margin-left: 5px;

    &:hover {
      cursor: pointer;
    }
  }
}

.bookshelf {
  padding: 10px 20px;
  width: 80%;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
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
  height: 200px;
  width: 10%;

  img {
    height: 100%;
    border-radius: 10px;
  }
}
</style>
