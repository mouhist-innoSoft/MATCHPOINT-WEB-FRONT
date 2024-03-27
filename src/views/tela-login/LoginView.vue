<template>
  <div class="login-container">
    <padrao-card class="card">
      <h1 class="login-title">
        Login
      </h1>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username">Username</label>
          <p-inputtext v-model="form.email.value" id="username" />
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <p-password v-model="form.senha.value" id="password" toggleMask :feedback="false"/>
        </div>
      </div>
      <div class="button-container">
        <p-button label="Login" @click="login" class="login-button" />
      </div>
      <a href="/cadastrar-usuario">Não possui cadastro? Clique Aqui!</a>
    </padrao-card>
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
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/entradaTunel.jpg');
  background-size: cover;
  background-position: center;
}

.card {
  width: 60%; 
  max-width: 400px; 
  padding: 40px; 

}

a {
    color: #141d53;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

.login-title {
  margin-bottom: 20px; 
  text-align: center;
}

.p-field {
  margin-bottom: 20px; 
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.login-button {
  background-color: #141d53;
  border: none;
  border-radius: 10%;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.login-button:hover {
  background-color: #000000;
}
</style>
