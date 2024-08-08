<template>
  <HeaderAuthor />
  <div class="content">
    <AuthorSidebar />
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import HeaderAuthor from "@/components/HeaderAuthor/HeaderAuthor.vue";
import Footer from "@/components/Footer/Footer.vue";
import AuthorSidebar from "@/components/AuthorSidebar/AuthorSidebar.vue";
</script>

<style scoped lang="scss">
.content {
  background-color: var(--color-author-background);
  padding: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
