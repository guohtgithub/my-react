import axios from 'axios'
import {message} from 'antd'
import { Promise } from 'q'
let loadingInstance = {
  close: () =>{}
}
let cloneLoading = () => {
  loadingInstance.close()
}
const service = axios.create({
  baseURL:'http://localhost:4000/api/',
  timeout:5000,
  // 请求头设置
  headers:{
    'Content-Type':'application/json'
  }
})

// 请求拦截器 处理
service.interceptors.request.use(
  config => {
    // headers 中添加token
    const token = localStorage.getItem('token')
    token && (config.headers.token = token)
    return config
  },
  error =>{
    cloneLoading()
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  res => {
    cloneLoading()
    // if(res.data && res.data.code !== 200){
    if(!res.data){
      message.error(res.data.message,1.5)
    }else{
      return res
    }
  },
  error => { // 请求已发出，但不是在2xx的范围
    cloneLoading()
    if(error && error.response){
      switch(error.response.status){

      }
      message.error(error.desc)
    }
    return Promise.reject(error)
  }
)


 /**
 *axios.get()
 *
 * @param {String} url
 * @param {Object} params
 * @returns res.data
 */
export const get = (url,params={}) => {
  return new Promise((resolve,reject) =>{
    service.get(url,{params})
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

 /**
 *axios.post()
 *
 * @param {String} url
 * @param {Object} param
 */
export const post = (url,param) => {
  return new Promise((resolve,reject) => {
    service.post(url,param)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 *axios.put()
 *
 * @param {String} url
 * @param {Object} param
 */
export const put = (url,param) => {
  return new Promise((resolve,reject) => {
    service.put(url,param)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

 /**
 *axios.delete()
 *
 * @param {String} url
 * @param {Object} param
 */
export const axiosDelete = (url,param) =>{
  return new Promise((resolve,reject) => {
    service.delete(url,param)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}