import {get,post} from '../http'

export const getUserList = (param) => get('/tableInfo/list',{params:param})

export const editUserList = (param) => post('/tableInfo/edit',param)

export const deleteUserList = (param) => post('/tableInfo/delete',param)

export const addUsersList = (param) => post('/tableInfo/add',param)