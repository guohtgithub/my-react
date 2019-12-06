import {ACTIONLOGIN} from  './action'

export const receiveLogin = (dataName,data) =>{
  return {
    type:ACTIONLOGIN,
    [dataName]:data
  }
}

export const receive = (typeName,dataName,data) => {
  return {
    type:typeName,
    [dataName]:data
  }
}