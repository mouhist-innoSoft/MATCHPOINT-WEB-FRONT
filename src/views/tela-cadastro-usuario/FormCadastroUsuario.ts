import { ReactiveFormControl } from '@/components/form/reactive-form-control';
import Validators from '@/components/validator/validator';
import { UsuarioDTO } from './../../models/dto/usuario-dto';

export class FormCadastroUsuario {
    public nome: ReactiveFormControl;
    public email: ReactiveFormControl;
    public senha: ReactiveFormControl;
    public dataNascimento: ReactiveFormControl;
    public cpf: ReactiveFormControl;


    constructor() {
        this.nome = new ReactiveFormControl("", [Validators.required]);
        this.email = new ReactiveFormControl("", [Validators.required]);
        this.senha = new ReactiveFormControl("", [Validators.required]);
        this.dataNascimento = new ReactiveFormControl("", [Validators.required]);
        this.cpf = new ReactiveFormControl("", [Validators.required]);
    }

    reset(): void {
        this.nome.reset();
        this.email.reset();
        this.senha.reset();
        this.dataNascimento.reset();
        this.cpf.reset();
    }

    valid(): boolean {
        return (
            this.nome.valid &&
            this.email.valid &&
            this.senha.valid &&
            this.dataNascimento.valid &&
            this.cpf.valid
        )
    }

    values(): UsuarioDTO {
        const login = new UsuarioDTO();
        login.nome = this.nome.value;
        login.email = this.email.value;
        login.senha = this.senha.value;
        login.dataNascimento = this.dataNascimento.value;
        login.cpf = this.cpf.value;
        return login;
    }


}