<template>
  <div>
    <header v-if="isAuthenticated">
      <h1>Meu App</h1>
    </header>
  </div>
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