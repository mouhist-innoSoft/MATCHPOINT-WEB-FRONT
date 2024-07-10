<template>
  <div class="cadastro-container">
    <padrao-card>
      <h1 class="cadastro-title">
        Cadastro
      </h1>
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
          <p-calendar v-model="form.dataNascimento.value" id="dataNascimento" />
        </div>
        <div class="p-field mt-2">
          <label for="username">CPF</label>
          <p-inputMask mask="999.999.999-99" v-model="form.cpf.value" id="cpf" />
        </div>
        <div class="p-field mt-2">
          <label for="password">Senha</label>
          <p-password v-model="form.senha.value" id="senha" toggleMask />
        </div>
        <div class="p-field mt-2">
          <label for="passwordConfirm">Confirmar Senha</label>
          <p-password :disabled="!form.senha.value" v-model="passwordConfirm" id="passwordConfirm" toggleMask />
        </div>
      </div>
      <div class="button-container mt-4">
        <p-button label="Fazer Login" @click="routTelaLogin()" />
        <p-button label="Cadastrar" @click="cadastrar()" />
      </div>
      
    </padrao-card>
  </div>
</template>
  
  <script lang="ts">
import { FormCadastroUsuario as Formulario } from './FormCadastroUsuario';
import { Vue } from 'vue-class-component';
import UsuarioService from '@/services/Usuario.service';
import { useRouter } from 'vue-router';
import { alertaSucesso, alertaErro } from '../../components/alert/AlertComponent';

export default class CdastroUsuarioView extends Vue {
  public form = new Formulario()
  router = useRouter();
  passwordConfirm = "";

  cadastrar() {
    
    if (!this.form.valid()) {
      if (!this.form.nome.valid) console.log('CAMPO NOME É OBRIGATÓRIO');
      if (!this.form.email.valid) console.log('CAMPO EMAIL É OBRIGATÓRIO');
      if (!this.form.dataNascimento.valid) console.log('CAMPO DATA DE NASCIMENTO É OBRIGATÓRIO');
      if (!this.form.cpf.valid) console.log('CAMPO CPF É OBRIGATÓRIO');
      if (!this.form.senha.valid) console.log('CAMPO SENHA É OBRIGATÓRIO');
      return
    }

    if (!this.passwordConfirm) {
      return console.log('CAMPO CONFIRMAR SENHA É OBRIGATÓRIO');
    }

    if (this.passwordConfirm !== this.form.senha.value) {
      return console.log('AS SENHAS NÃO SÃO IGUAIS');
    }
    
    UsuarioService.incluir(this.form.values())
    .then(() => {
      alertaSucesso("Cadastrado com sucesso").then(() => {
        this.$router.push("/");
      })
    }).catch((error) => {
      alertaErro("Atenção!", error);
    })
  }

  routTelaLogin() {
    this.$router.push("/");
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

  .cadastro-container .p-field {
  display: inline-block;
  width: calc(50% - 50px); /* Coloca os campos lado a lado */
  margin-right: 20px; /* Espaçamento entre os campos */
  margin-left: 20px;
}




.p-field mt-2 {
  margin-top: 5rem;
}

  .cadastro-title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }


  .button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

  .p-button {
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

.p-button:hover {
  background-color: #000000;
}


</style>
  