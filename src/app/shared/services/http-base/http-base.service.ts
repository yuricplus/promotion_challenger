import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpBaseService {
  constructor() {}
  public axios = axios.create({
    baseURL: process.env.URL_API
  });

  async get(url: string, params?: any): Promise<any> {
    const response = await this.axios.get(`${url}`, { params });
    return response.data;
  }
}