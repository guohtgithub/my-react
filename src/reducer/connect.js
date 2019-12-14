import {
  action_slidecollapsed,
  router_config,
  ACTIONLOGIN
} from './action'
import {post} from '../network/http'
import {receive} from './actionCreate'

export const mapLogout = {
  mapStateProps: state => {
    return {headerData:{},...state.slidecollapsed}
  },
  mapDispatchToProps:dispatch => {
    return{
      onSlidecollapsed:() => dispatch(action_slidecollapsed),getRouterConfig:()=>{
        return dispatch(router_config)
      },
      toggleSlide:() =>{
        dispatch({type:action_slidecollapsed.type})
      },
      onLogout:(data) => {
        return dispatch(fetchPosts('/logout',action_slidecollapsed.type,'logoutData',data))
      },
      toggleTabs:(data) => {
        console.log(data,'toggleTabs')
        dispatch(receive(action_slidecollapsed.type,'headerData',{...data}))
      }
    }
  }
}

export const mapIndex = {
  mapStateProps:(state) =>{
    return {headerData:{},...state.slidecollapsed}
  },
  mapDispatchToProps: dispatch => {
    return {
      toggleTabs : (data) => {
        console.log(data)
        dispatch(receive(action_slidecollapsed.type,'headerData',{
          ...data
        }))
      }
    }
  }
}

export const crumbsMap = {
  mapStateProps(state){
    return {routerConfig:state.routerConfig}
  },
  mapDispatchToProps(dispatch){
    return {
      getRouterConfig:() => {
        return dispatch(router_config)
      }
    }
  }
}

function fetchPosts(url,actionType,subreddit,data){
  return dispatch => {
    dispatch(receive(actionType,subreddit,'暂无数据'))
    return post(url,data).then(res => {
      dispatch(receive(actionType,subreddit,res))
    })
  }
}

export const mapLogin = {
  mapStateProps(state){
    return state.getLogin
  },
  mapDispatchToProps(dispatch){
    return {handleLogin:(data) => {
      return dispatch(fetchPosts('/login', ACTIONLOGIN, 'loginData', data))
    }}
  }
}