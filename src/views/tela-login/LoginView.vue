<template>
  <div class="login-container">
    <h1>Login</h1>
    <div class="p-fluid">
      <div class="p-field">
        <label for="username">Username</label>
        <p-inputtext v-model="form.email.value" />
      </div>
      <div class="p-field">
        <label for="password">Password</label>
        <p-password v-model="form.senha.value" />
      </div>
    </div>
    <p-button label="Login" @click="login()" />
  </div>
</template>

<script lang="ts">
import { FormLogin as Formulario } from './FormLogin'
import { Vue } from 'vue-class-component'

export default class LoginView extends Vue {
  public form = new Formulario()

  login() {
    if (!this.form.valid()) {
      if (!this.form.email.valid) console.log('CAMPO EMAIL É OBRIGATÓRIO')
      if (!this.form.senha.valid) console.log('CAMPO SENHA É OBRIGATÓRIO')
      return
    }
    console.log('Username:', this.form.email.value)
    console.log('Password:', this.form.senha.value)
  }
}
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  width: 300px;
  padding: 20px;
}
</style>
