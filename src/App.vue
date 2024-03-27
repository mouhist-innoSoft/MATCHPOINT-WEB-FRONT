<template>
  <div id="app">
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
</script>

<style scoped>
@import "style.scss";
</style>
