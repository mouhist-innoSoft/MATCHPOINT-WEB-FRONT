<template>
  <div class="coll-12 d-grid">
    <div class="flex flex-wrap justify-content-center gap-2 p-fluid mb-2 mt-2">
      <div class="col-6">
        <padrao-card> teste card 1 </padrao-card>
      </div>
      <div class="col-4">
        <padrao-card> teste card 2</padrao-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class MeuPerfilView extends Vue {}
</script>

<style lang="scss">
</style>