export class ReactiveFormControl {
    /**
     * @return boolean
     * @message retorna 'true' se o item está válido, dependendo dos matchs dos validators informados
     */
    get valid(): boolean {
      return !this.validate();
    }
  
    /**
     * @return boolean
     * @message retorna 'true' se o item está inválido, dependendo dos matchs dos validators informados
     */
    get invalid(): boolean {
      return this.validate();
    }
  
    get errors(): Array<string> {
      return this.getErrors();
    }
  
    constructor(
      public value: any = "",
      private validators: any[] = [],
      private formatters: any[] = []
    ) { }
  
    /**
     * @return void
     * @message reseta o valor do form control para vazio
     */
    public reset(value?: any): void {
      this.value = value === undefined ? "" : value;
    }
  
    public format(): CallableFunction {
      return (value: any) =>
        this.formatters.reduce(
          (res, formatter) => formatter.call(null, res),
          value
        );
    }
  
    private validate(): boolean {
      return !this.validators.every((validator) =>
        validator?.call(null, this.value)
      );
    }
  
    private getErrors(): Array<string> {
      return this.validators
        .map((validator) => {
          if (!validator.call(null, this.value)) return validator.name;
        })
        .filter((error) => error != undefined && error != "");
    }
  }