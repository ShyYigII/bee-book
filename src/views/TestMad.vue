<script setup>
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref } from "vue";
const isDisplay = ref(false);

const toggleDisplay = () => {
  isDisplay.value = !isDisplay.value;
};
</script>

<template>
  <form class="forrm">
    <div class="input-container">
      <input :type="isDisplay ? 'text' : 'password'" style="width: 100%" />
      <button class="fa-eye" type="button" @click="toggleDisplay">
        <FontAwesomeIcon :icon="isDisplay ? faEye : faEyeSlash" />
      </button>
    </div>
  </form>
</template>

<style scoped>
.forrm {
  background-color: antiquewhite;
}

.input-container {
  position: relative;
}
.fa-eye {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  background-color: transparent;
  color: #ccc;
  border: none;
  cursor: pointer;
}
.fa-eye:hover {
  color: #000;
}
</style>
