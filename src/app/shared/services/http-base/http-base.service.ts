import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class HttpBaseService {
  constructor() {}
  public axios = axios.create({
    baseURL: process.env.URL_API
  });
//   public headers = { 
//     headers: {
//         Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
//     }
//   }

  async get(url: string, params?: any): Promise<any> {
    const response = await this.axios.get(`${url}`, { params });
    return response.data;
  }

  async post(url: string, data: any): Promise<any> {
    const response = await this.axios.post(url, data);
    return response.data;
  }

  async put(url: string, data: any): Promise<any> {
    const response = await this.axios.put(url, data);
    return response.data;
  }

  async delete(url: string): Promise<any> {
    const response = await this.axios.delete(url);
    return response.data;
  }
}