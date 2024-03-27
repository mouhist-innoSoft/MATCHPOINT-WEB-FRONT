<template>
  <p-megaMenu>
    <template #start>
      <h1>Meu App</h1>
    </template>
    <template #end>
      <p-avatar label="P" class="mr-2" size="large" shape="circle" />
    </template>
  </p-megaMenu>
</template>

  
  <script lang="ts">
import { Vue } from 'vue-class-component'

export default class HeaderComponent extends Vue {
  isAuthenticated: boolean = true
}
</script>
  
<style lang="scss">
header {
  background-color: #333;
  color: white;
  padding: 5px;
}
</style>