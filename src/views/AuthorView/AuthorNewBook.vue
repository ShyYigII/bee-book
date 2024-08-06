<script setup>
import HeaderAuthor from "@/components/HeaderAuthor.vue";
import AuthorSidebar from "@/components/AuthorSidebar.vue";
import Footer from "@/components/Footer.vue";
import NewBook1 from "@/components/NewBook1.vue";
</script>

<template>
  <HeaderAuthor />
  <div class="content">
    <AuthorSidebar />
    <NewBook1 />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.content {
  background-color: var(--color-author-background);
  padding: 100px;
  display: flex;
  justify-content: space-between;
}
</style>
