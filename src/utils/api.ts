import axios, { AxiosRequestConfig } from 'axios'
import { routes } from 'src/utils/routes'

//TODO: replace this with the API Gateway endpoint
export const baseURL = ''

export const defaultConfig: AxiosRequestConfig = {
  baseURL,
  timeout: 10000,
  responseType: 'json',
}

export const api = axios.create(defaultConfig)

//TODO: remove this if authentication is not needed
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      //TODO: Replace this with ever logic is required to remove the token
      localStorage.removeItem('token')
      window.location.href = routes.login
    }

    throw error
  }
)

export const addDefaultHeader = (key: string, value: string) => {
  api.defaults.headers[key] = value
}

export const setAuthTokenHeader = (token: string) => {
  addDefaultHeader('Authorization', `Bearer ${token}`)
}
