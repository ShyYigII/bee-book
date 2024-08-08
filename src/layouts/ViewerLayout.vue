<template>
  <HeaderViewer color="var(--color-secondary)" />
  <router-view />;

  <Footer />
</template>

<script setup>
import HeaderViewer from "@/components/HeaderViewer/HeaderViewer.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>
