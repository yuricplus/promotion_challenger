import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import authApi from '../../interceptors/auth.interceptor'


export class HttpBaseService {
  constructor() {}
  private headers = {
    Authorization: `Bearer ${process.env.CLIENT_SECRET}`
  }
  private apiBase = process.env.URL_API;
  public axios = authApi
  private token: string | null = null;

  async get(url: string, params?: any): Promise<any> {
    const headers = this.headers;
    const response = await this.axios.get(`${url}`, { params, headers });
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