// 封装axios

import axios from 'axios'

const http = axios.create({
  // baseURL: 'http://192.168.43.249:8080/'
  baseURL: 'http://localhost:8080/'

})

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default http
