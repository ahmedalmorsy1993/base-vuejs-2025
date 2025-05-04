import axios from 'axios';
import env from './env';


export const axiosInstance = axios.create({
  baseURL: env.baseUrl,
  timeout: 30000, // 30 seconds

});

// Add request interceptor for logging in development
if (env.isDevelopment) {
  axiosInstance.interceptors.request.use(request => {
    console.log('API Request:', request.method?.toUpperCase(), request.url);
    return request;
  });
}

export default axiosInstance;