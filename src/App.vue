<template>
  <div id="app" :style="{ background: backgroundImage }"> 
    <header-component v-if="true" />
    <div class="main-container">
      <menu-component v-if="true" />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const backgroundImage = computed(() => {
  switch (route.path) {
    case '/rota1':
      return 'url(@/assets/profile-image.jpg)';
    default:
      return 'url(caminho/para/imagem-padrão.jpg)';
  }
});
</script>

<style scoped>
@import "style.scss";
</style>
