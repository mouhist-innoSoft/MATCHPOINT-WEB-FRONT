<template>
  <div class="cadastro-container">
    <padrao-card>
      <h1>Cadastro</h1>
      <div class="p-fluid">
        <div class="p-field">
          <label for="username">Nome</label>
          <p-inputtext v-model="form.nome.value" id="nome" />
        </div>
        <div class="p-field mt-2">
          <label for="username">E-mail</label>
          <p-inputtext v-model="form.email.value" id="email" />
        </div>
        <div class="p-field mt-2">
          <label for="username">Data de Nascimento</label>
          <p-inputtext v-model="form.dataNascimento.value" id="dataNascimento" />
        </div>
        <div class="p-field mt-2">
          <label for="username">CPF</label>
          <p-inputtext v-model="form.cpf.value" id="cpf" />
        </div>
        <div class="p-field mt-2">
          <label for="password">Senha</label>
          <p-password v-model="form.senha.value" id="senha" />
        </div>
      </div>
      <div class="mt-4">
        <p-button label="Login" @click="cadastrar()" />
      </div>
    </padrao-card>
  </div>
</template>
  
  <script lang="ts">
import { FormCadastroUsuario as Formulario } from './FormCadastroUsuario';
import { Vue } from 'vue-class-component';
import UsuarioService from '@/services/Usuario.service';
import { useRouter } from 'vue-router';

export default class CdastroUsuarioView extends Vue {
  public form = new Formulario()
  router = useRouter();

  cadastrar() {
    console.log("entrou no cadastrar");
    
    if (!this.form.valid()) {
      if (!this.form.nome.valid) console.log('CAMPO NOME É OBRIGATÓRIO');
      if (!this.form.email.valid) console.log('CAMPO EMAIL É OBRIGATÓRIO');
      if (!this.form.dataNascimento.valid) console.log('CAMPO DATA DE NASCIMENTO É OBRIGATÓRIO');
      if (!this.form.cpf.valid) console.log('CAMPO CPF É OBRIGATÓRIO');
      if (!this.form.senha.valid) console.log('CAMPO SENHA É OBRIGATÓRIO');
      return
    }

    console.log("Validou");
    
    UsuarioService.incluir(this.form.values())
    .then(() => {
      console.log("requisitou");
      
      this.$router.push("/")
    }).catch((error) => {
      console.log(error);
    })
  }
}
</script>
  
  <style lang="scss">
.cadastro-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/entradaTunel.jpg');
  background-size: cover;
  background-position: center;
}


</style>
  