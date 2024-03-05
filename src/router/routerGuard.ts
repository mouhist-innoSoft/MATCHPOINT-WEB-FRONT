import type { NavigationGuardNext } from "vue-router";


const rotasPublicas = [
  "/",
  "/cadastrar-usuario",
];

const getRole = () => {
  const base64Token = JSON.parse(localStorage.getItem("usuario") || '{}');
  if (base64Token) {
    const payload = decodeURIComponent(atob(base64Token?.perfil));
    return JSON.parse(payload).perfil || '';
  }
  return ''
}

/*
const isLoggedIn = (next: NavigationGuardNext): void => {
  if (!localStorage.getItem('usuario')) {
    next('/');
  }
};
*/

const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("usuario") || "{}").usuario ? true : false;
};


const verifyPermission = (allowedRoles: string[], next: NavigationGuardNext) => {
  const role = getRole();
  const notAllowed = !role.includes('ADMIN') && !allowedRoles.includes(role);
  if (notAllowed) {
    next('/');
  } else {
    next()
  }
};

export const routerGuard = (to: any, from: any, next: any) => {
  const rotaFormat = to.path.split("/");
  if (rotasPublicas.some(rota => rota.includes(rotaFormat[1]))) {
    next();
  } else {
    if (isLoggedIn()) {
      //next();      
      if (to.meta?.roles) {
        verifyPermission(to.meta?.roles, next);
      } else {
        next();
      }
    } else {
      if (to.path !== "/") {
        next("/");
      } else {
        next();
      }
    }
  }
};