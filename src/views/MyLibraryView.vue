<script setup>
import HeaderViewer from "@/components/HeaderViewer.vue";
</script>

<template>
  <HeaderViewer />
  <div class="content">
    <div class="sidebar"></div>
    <div class="read-history"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
  display: flex;
  padding-bottom: 40px;
}

.sidebar {
  width: 30vw;
  height: 80vh;
  background-color: antiquewhite;
}

.stepper {
  width: 600px;
  height: 600px;
}
</style>
