import Swal, { SweetAlertOptions } from 'sweetalert2';

const primaryColor = "rgb(0 105 111 / 91%)";
const cancelBtnColor = "rgb(193 42 51 / 84%)";
const deleteIconColor = "rgb(255 119 127)";

export function alertaSalvar(dado: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `Confirma o cadastro ${dado}?`,
      icon: "question",
      iconColor: primaryColor,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then((res) => {
      if (res.isConfirmed) {
        resolve({});
      }
    });
  });
}

export function alertaDeletar(dado: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `Deseja remover ${dado}?`,
      icon: "warning",
      iconColor: deleteIconColor,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then((res) => {
      resolve({ isConfirmed: res.isConfirmed });
    });
  });
}

export function alertaEdicao(dado: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `Confirma alteração ${dado}?`,
      icon: "question",
      iconColor: primaryColor,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then((res) => {
      if (res.isConfirmed) {
        resolve({});
      }
    });
  });
}

export function alertaSucesso(msg: string) {
    return new Promise((resolve) => {
      const options: SweetAlertOptions = {
        icon: 'success',
        title: 'Sucesso!',
        text: msg,
        showConfirmButton: false,
        iconColor: '#86c961',
        timer: 1420,
        customClass: {
          container: 'custom-swal-container-class',
          popup: 'custom-swal-popup-class',
          title: 'custom-swal-title-class',
          closeButton: 'custom-swal-close-button-class',
        },
      };
  
      Swal.fire(options).then(() => {
        resolve({});
      });
    });
  }

export function alertaAviso(title: string, msg?: string) {
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: title.includes('!') ? `${title}` : `${title}!`,
      html: "<hr>" + msg ? msg : "",
      iconColor: primaryColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaConfirmar(title: string, msg?: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `${title}`,
      html: "<hr>" + msg ? msg : "",
      icon: "question",
      iconColor: primaryColor,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then((res) => resolve(res));
  });
}

export function alertaConfirmarExclusao(dado: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `Você deseja excluir ${dado}?`,
      icon: "question",
      iconColor: deleteIconColor,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      text: "*Motivo da exclusão:",
      input: "text",
      customClass: {
        validationMessage: "my-validation-message",
        container: 'custom-swal-container-class'
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> O campo é de preenchimento obrigatório!'
          );
        }
      },
    }).then((result) => {
      if (result.value) {
        resolve(result);
      }
    });
  });
}

export function alertaConfirmarEdicao(dado: string) {
  return new Promise((resolve) => {
    Swal.fire({
      title: `Você deseja alterar ${dado}?`,
      icon: "question",
      iconColor: primaryColor,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      text: "*Motivo da alteração:",
      input: "text",
      customClass: {
        validationMessage: "my-validation-message",
        container: 'custom-swal-container-class'
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> O campo é de preenchimento obrigatório!'
          );
        }
      },
    }).then((result) => {
      resolve(result);
    });
  });
}

export function alertaErro(title: string, msg?: string) {
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: title.includes('!') ? `${title}` : `${title}!`,
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaCampoInvalido(campos: string[]) {
  let msg: string;
  if (campos?.length > 1) {
    msg = `Os campos ${campos.slice(0, -1).join(", ") + " e " + campos[campos.length - 1]
      } são obrigatórios.`;
  } else {
    msg = `O campo ${campos.join()} é obrigatório.`;
  }
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaPreenchaTodosCampos() {
  const msg = "Preencha todos os campos obrigatórios!";
  
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}



export function alertaErroComLink(title: string, msg?: string, textoLink?: string, rota?: string) {
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      html: (msg ? msg : "") + "<br>" + textoLink + "<a href= /" + rota + " class=\"link\">Clique aqui!</a>",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaoptions(dado: string, opcoes: any) {
  const inputOptions = new Promise(function (resolve) {
    resolve(opcoes);
  });

  return new Promise((resolve) => {
    Swal.fire({
      icon: "question",
      iconColor: primaryColor,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      cancelButtonColor: cancelBtnColor,
      confirmButtonColor: primaryColor,
      text: `${dado}`,
      input: 'radio',
      inputOptions: inputOptions,
      customClass: {
        container: 'custom-swal-container-class'
      },
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> Selecione uma Opção!'
          );
        }
      },
    }).then((result) => {
      resolve(result);
    });
  });
}

export function alertaDataInvalida() {
  const msg = `Preencha com uma data Válida.`;
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaIndiceInvalido() {
  const msg = `Obrigatório adicionar um índice.`;
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}

export function alertaCustom(value: string) {
  const msg: string = value;
  return new Promise((resolve) => {
    Swal.fire({
      icon: "warning",
      title: "Atenção!",
      html: "<hr>" + msg ? msg : "",
      iconColor: deleteIconColor,
      confirmButtonColor: primaryColor,
      customClass: {
        container: 'custom-swal-container-class'
      }
    }).then(() => {
      resolve({});
    });
  });
}