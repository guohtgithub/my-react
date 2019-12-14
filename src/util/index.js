export const filterData = (state,stateName) =>{
  return typeof state === 'object' ? state[stateName]:state
}

export const deleObj = (obj,key) =>{
  let obj2 = Object.assign({},obj)
  delete obj2[key]
  return obj2
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