import axios from "axios";
export const RUTA_SERVIDOR = process.env.VUE_APP_RUTA_API;

export const ClientesService = {
  login(json) {
    return axios.post(RUTA_SERVIDOR+"/api/auth/login", json);
  },
};
