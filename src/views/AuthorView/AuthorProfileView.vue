<script setup>
import HeaderAuthor from "@/components/HeaderAuthor.vue";
import AuthorSidebar from "@/components/AuthorSidebar.vue";
import Footer from "@/components/Footer.vue";
import AuthorProfile from "@/components/AuthorProfile.vue";
</script>

<template>
  <HeaderAuthor />
  <div class="content">
    <AuthorSidebar />
    <AuthorProfile />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.content {
  height: 100vh;
  background-color: var(--color-author-background);
  padding: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
