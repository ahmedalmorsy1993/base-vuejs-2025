import { axiosInstance } from "@/config/axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Http service using the Singleton pattern
 * Provides a single instance for making HTTP requests
 */
export class Http {
  private static _instance: Http | null = null;
  private static _axiosInstance = axiosInstance;


  private constructor() { }

  public static getInstance(): Http {
    if (!Http._instance) {
      Http._instance = new Http();
    }
    return Http._instance;
  }

  public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Http._axiosInstance.get<T>(url, config);
  }

  public post<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Http._axiosInstance.post<T>(url, data, config);
  }

  public put<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Http._axiosInstance.put<T>(url, data, config);
  }

  public patch<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Http._axiosInstance.patch<T>(url, data, config);
  }

  public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return Http._axiosInstance.delete<T>(url, config);
  }
}

// Export a pre-created instance for convenience
export const httpClient = Http.getInstance();