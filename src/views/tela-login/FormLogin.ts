import { ReactiveFormControl } from "@/components/form/reactive-form-control";
import Validators from "@/components/validator/validator";

export class FormLogin {
    public email: ReactiveFormControl;
    public senha: ReactiveFormControl;


    constructor() {
        this.email = new ReactiveFormControl("", [Validators.required]);
        this.senha = new ReactiveFormControl("", [Validators.required])
    }

    reset(): void {
        this.email.reset();
        this.senha.reset();
    }

    valid(): boolean {
        return (
            this.email.valid &&
            this.senha.valid
        )
    }

    // values(): LoginDto {
    //     const login = new LoginDto();
    //     login.email = this.email.value;
    //     login.senha = this.senha.value;
    // }

}