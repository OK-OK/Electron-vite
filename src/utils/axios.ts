/*
 * @Author: JL Guan
 * @Date: 2022-06-13 09:10:25
 * @description: file description
 * @LastEditTime: 2022-12-02 10:28:34
 * @FilePath: \vite-builder\src\utils\axios.ts
 */
import axios from 'axios'
import qs from 'qs'
import { message } from '.'

interface Response {
  success: boolean
  errorStr: string
  data: any
  errorCode: number
}

const instance = axios.create({
  baseURL: '',
  headers: {
    Authorization: 'token',
    timeout: 10000,
    'content-type': 'application/json',
  },
})

instance.defaults.withCredentials = true

instance.interceptors.request.use(
  config => {
    if (config.method == 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  (response: { data: Response, status: number }) => {
    if (response.status !== 200) {
      message.error(response.data.errorStr)
      return Promise.reject(response)
    }
    return Promise.resolve(response.data)
  },
  err => {
    message.error(err.toString().search('timeout') ? '请求超时！' : err)
    return Promise.reject(err)
  }
)

export default instance
