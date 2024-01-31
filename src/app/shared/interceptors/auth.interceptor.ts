import axios from 'axios';
import { HTTP_ENUM } from '../enums/http-code.enum';

const authApi = axios.create({
  baseURL: process.env.URL_API
})

const refreshToken = async () => {
    const bodyToken = {
      grant_type: 'autorization_code',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: 'code',
      redirect_url: 'http://localhost:3000'
    }
    return await authApi.post('oauth/token', bodyToken)
}

authApi.interceptors.request.use((request) => {
    const token = localStorage.getItem('token');

    if(token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request;
}, async (error) => {
    const originRequest = error.config;

    if(error?.response.status === HTTP_ENUM.UNAUTORIZED && !originRequest?.__isRetryRequest) {
    
        const response = await refreshToken() as any;

        const accessToken = response?.token

        localStorage.setItem(JSON.stringify(accessToken), 'token')
        return authApi(originRequest)
    }
    return Promise.reject(error)
})


export default authApi;