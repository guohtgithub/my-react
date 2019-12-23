/*
 * @Author: guoht 
 * @Date: 2019-11-08 18:39:02 
 * @Last Modified by: guoht
 * @Last Modified time: 2019-11-18 16:51:06
 */

import {get,post} from '../http'

export const login = (param) => post('/login',param)

export const register = (param) => post('/register',param)