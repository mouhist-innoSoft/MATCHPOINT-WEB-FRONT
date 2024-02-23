/// <reference types="node" />

import type { AxiosInstance } from 'axios';
import axios from 'axios';
import process from 'process';

export const httpFront: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_ROOT_MATCHPOINT_WEB_FRONT,
});

export class AxiosFrontAPI {

  static get(url: string): Promise<any> {
    return httpFront.get(`${url}`).catch((err) => {
      console.log("Erro na requisição...", err);
      throw err;
    });
  }

  static post(url: string, body?: any): Promise<any> {
    return httpFront.post(`${url}`, body).catch((err) => {
      console.log("Erro na requisição...", err);
      throw err;
    });
  }

  static put(url: string, body?: any): Promise<any> {
    return httpFront.put(`${url}`, body).catch((err) => {
      console.log("Erro na requisição...", err);
      throw err;
    });
  }

  static delete(url: string): Promise<any> {
    return httpFront.delete(`${url}`).catch((err) => {
      console.log("Erro na requisição...", err);
      throw err;
    });
  }
}