<script>
import HeaderViewer from "@/components/HeaderViewer/HeaderViewer.vue";

export default {
  data: () => ({
    rating: 3,
  }),
};
</script>

<template>
  <HeaderViewer />
  <div class="content">
    <div class="sidebar"></div>
    <!-- <div class="read-history"></div> -->
    <v-rating v-model="rating" active-color="blue" color="#000"></v-rating>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  display: flex;
  padding-bottom: 40px;
  background: #099;
}

.sidebar {
  width: 30vw;
  height: 80vh;
  background-color: antiquewhite;
}
</style>
