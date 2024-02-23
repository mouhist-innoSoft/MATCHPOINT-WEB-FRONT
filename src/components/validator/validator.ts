export default class Validators {
    /**
     * @param value array, string, number, boolean, object, null e undefined
     * @return boolean
     * @message Verifica se o objeto informado está presente, retornando 'true' caso sim, e 'false' caso não
     */
    static required(value: any): boolean {
      if (value === undefined || value === null) {
        return false;
      } else if (Array.isArray(value)) {
        return value.length > 0;
      } else if (typeof value === "object") {
        if (Object.keys(value).length > 0) {
          return Object.values(value).some((v) => Validators.required(v));
        } else return false;
      } else if (Number.isInteger(value)) {
        return value != null && value != undefined;
      } else return value as boolean;
    }
  
    static maxLength(length: number): any {
      return (value: string): boolean => {
        return value.length > length ? false : true;
      };
    }
    static minSize(length: number): any {
      return (value: Array<any>): boolean => {
        return value.length < length ? false : true;
      };
    }
  
    static between(min: number, max: number): any {
      return (value: string): boolean => {
        value = value.toString(); // Garante que o valor é uma string
        return value.length >= min && value.length <= max;
      };
    }
  
    static isValidDate(value: string): any {
      // First check for the pattern
      if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) return false;
  
      // Parse the date parts to integers
      const parts = value.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
  
      // Check the ranges of month and year
      if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
  
      const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
      // Adjust for leap years
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;
  
      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
    }
  
    /**
     * Verifica se o CPF é valido
     * @param control Campo a ser validado
     */
    static validCpf(cpf: string) {
      cpf = cpf?.replaceAll(".", "").replaceAll("_", "").replace("-", "");
  
      if (cpf.length !== 11) return true;
  
      let soma = 0;
      let resto;
  
      const cpfInvalidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
      ];
  
      if (cpfInvalidos.includes(cpf)) return false;
  
      for (let i = 1; i <= 9; i++) {
        soma = soma + Number(cpf.substring(i - 1, i)) * (11 - i);
      }
  
      resto = (soma * 10) % 11;
  
      if (resto === 10 || resto === 11) {
        resto = 0;
      }
  
      if (resto !== Number(cpf.substring(9, 10))) {
        return false;
      }
  
      soma = 0;
  
      for (let i = 1; i <= 10; i++) {
        soma = soma + Number(cpf.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;
  
      if (resto === 10 || resto === 11) {
        resto = 0;
      }
  
      if (resto !== Number(cpf.substring(10, 11))) {
        return false;
      }
  
      return true;
    }
  
    /**
     * Verifica se o CNPJ é valido
     * @param control Campo a ser validado
     */
    static validCnpj(cnpj: string) {
  
      cnpj = cnpj.replace(/[^\d]+/g, '');
  
      if (cnpj == '') return false;
  
      if (cnpj.length != 14)
        return false;
  
      // Elimina CNPJs invalidos conhecidos
      if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;
  
      // Valida DVs
      let tamanho = cnpj.length - 2
      let numeros: any = cnpj.substring(0, tamanho);
      const digitos = cnpj.substring(tamanho);
      let soma = 0;
      let pos: any = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
          pos = 9;
      }
      let resultado: any = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
        return false;
  
      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
          pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
        return false;
  
      return true;
  
    }
  }