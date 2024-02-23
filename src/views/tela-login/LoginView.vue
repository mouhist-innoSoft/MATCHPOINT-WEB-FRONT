<template>
  <div class="login-container">
      <h1>Login</h1>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username">Username</label>
          <p-inputtext v-model="username" id="username" />
        </div>
        <div class="p-field">
          <label for="password">Password</label>
          <p-password v-model="password" id="password" />
        </div>
      </div>
      <p-button label="Login" @click="login" />
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class LoginView extends Vue {
  username: string = '';
  password: string = '';

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
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
