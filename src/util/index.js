export const filterData = (state,stateName) =>{
  return typeof state === 'object' ? state[stateName]:state
}

export const deleObj = (obj,key) =>{
  let obj2 = Object.assign({},obj)
  delete obj2[key]
  return obj2
}

export const validatorPhone = () =>{
  return (rule,value,callback) => {
    const form = this.props.form
    if(value && !(/^1[3-9]\d{3-8}$/.test(form.getFieldValue('phone')))){
      callback('请输入正确的手机号')
    }else{
      callback()
    }
  }
}

export const deepFlatten = arr => 
  [].concat(...arr.map(v => 
      Array.isArray(v)?deepFlatten(v):(
        typeof v === 'object'?(
          Array.isArray(v.routes)?
            deepFlatten(v.routes.concat(deleObj(v,'routes'))):v
        ):v
      )
    )
  )

export const removeArrItem = (arr,validFunx) => {
  arr.splice(arr.findIndex(item => validFunx(item)),1)
  return arr
}