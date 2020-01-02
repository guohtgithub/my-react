import React from 'react'
import loadable from '../util/loadable'
import {RenderRoutes} from './utils'
// import Page1 from '../views/user/page1'
const UI = ({routes}) => (
  <div>
    <h3>UI</h3>
    <RenderRoutes routes={routes}></RenderRoutes>
  </div>
)

const ReactDoms = ({routes}) => (
  <div>
    <h3>React Advanced Component</h3>
    <RenderRoutes routes={routes}></RenderRoutes>
  </div>
)

//  组件
const Icon = () =><h3>Icon <input type='text' /></h3>
const Animation = () => <h3>Animation</h3>
const From = () => <h3>From</h3>
const Page1 = loadable(()=>import('../views/user/page1'))
const Page2 = loadable(()=>import('../views/user/page2'))
const ReactInit = loadable(()=>import('../views/user/reactInit.js'))
// const tableEdit = loadable(()=>import('../views/user/tableEdit'))
const register = loadable(()=>import('../views/register/index'))
const Index = loadable(()=>import('../views/layout/index'))
const Login = loadable(()=>import('../views/login/index'))

const Error = loadable(() => import('../views/user/reactAdvanced.js'))

// 菜单相关路由
export const menus = [
  {path:'/index/UI',name:'UI',icon:'video-camera',component:UI,routes:[
    {path:'/index/UI/page1',name:'用户列表1',icon:'video-camera',component:Page1},
    {path:'/index/UI/page2',name:'用户列表2',icon:'video-camera',component:Page2},
    {path:'/index/UI/icon',name:'图标',icon:'video-camera',component:Icon},
    {path:'/index/UI/ReactInit',name:'react 基础',icon:'video-camera',component:ReactInit}
  ]},{
    path:'/index/react',name:'React',icon:'video-camera',component:ReactDoms,routes:[
      {path:'/index/react/reactAdvanced',name:'React Error',icon:'video-camera',component:Error}
    ]
  },{
    path:'/index/animation',name:'动画',icon:'video-camera',component:Animation
  },{
    path:'/index/from',name:'表单',icon:'video-camera',component:From
  }
]

// isAuth 表示不用验证是否登录
export const main = [
  {
    path:'/login',exact:true,name:'登录',component:Login,meta:{
      isAuth:true
    },
  },{
    path:'/register',exact:true,name:'注册',component:register,meta:{isAuth:true}
  },{
    path:'/',exact:true,name:'首页',Redirect:'/index'
  },{
    path:'/index',name:'首页',component:Index,
    routes:menus
  }
]

export const routerConfig = {
  main,menus
}