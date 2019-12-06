import {
  action_slidecollapsed
} from './action'

import {receive} from './actionCreate'

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