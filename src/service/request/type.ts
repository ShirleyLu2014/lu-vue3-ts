import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface LURequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LURequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LURequestInterceptors<T>
  showLoading?: boolean
}
