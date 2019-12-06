import {combineReducers} from 'redux'
import {routerConfig as MyRouterConfig} from '../router/index'
import {SLIDECOLLAPSED,ROUTERCONFIG,ACTIONLOGIN,ACTIONREGISTER} from './action'

// silder bar 显示/隐藏
const slidecollapsed = (state = {slidecollapsed:false},action) =>{
  const slidecollapsed = state.slidecollapsed
  switch(action.type){
    case SLIDECOLLAPSED:
      return Object.assign({},state,{
        slidecollapsed:!slidecollapsed
      })
    default:
      return state
  }
}

// 获取 路由数组
const getRouterConfig = (state = {routerConfig:[]},action) => {
  switch(action.type){
    case ROUTERCONFIG:
      return Object.assign({},state,{
        routerConfig:MyRouterConfig
      })
    default:
      return state
  }
}

// 登录
const getLogin = (state = {},action) => {
  switch(action.type){
    case ACTIONLOGIN:
      return {...state,...action}
    default:
      return state
  }
}

// 注册
const getRegister = (state={},action) => {
  switch(action.type){
    case ACTIONREGISTER:
      return {...state,...action}
    default:
      return state
  }
}

export const allReducer = combineReducers({
  slidecollapsed,
  routerConfig:getRouterConfig,
  getLogin,
  getRegister
})