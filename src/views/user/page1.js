import React from 'react'
import TableComponent from '../../components/table/table'
import {tableMix} from '../../components/table/mix'
import {getUserList,editUserList,deleteUserList,addUsersList} from '../../network/api/table'
import AddModel from './add.js'

class Page1 extends React.Component{
  constructor(props){
    super(props)
    tableMix.methods.setThis(tableMix,this)
    this.state = {
      ...tableMix.state
    }
    
  }
  componentDidMount(){
    let {pagination} = this.state
    pagination.onShowSizeChange = (current,pageSize) => {
      pagination.current = current
      pagination.pageSize = pageSize
      this.handleUserList({
        page:pagination.current,
        pageSize:pagination.pageSize
      })
      this.setState({
        pagination:pagination
      })
    }
    pagination.onChange = (page,pageSize) => {
      pagination.current = page
      pagination.pageSize = pageSize
      this.onGetUserList()
      this.setState({
        pagination:pagination
      })
    }
    
    this.state.handleAdd = this.handleAdd
    this.setState({
      pagination:pagination
    })
    
    this.onGetUserList()
  }
  handleAdd = async () => {
    this.setState({
      modelVisible:true
    })
  }

  addUserList = async (data) => {
    let res = await addUsersList(data)
    this.setState({
      modelLoading:false,
      modelVisible:false
    })
    
    if(res.code === 200){
      this.onGetUserList()
    }
  }

  handleUserList = async (obj = {page:1}) => {
    this.setState({
      loading:true
    })
    let data = await getUserList ({
      ...obj
    })
    
    let {pagination} = this.state
    pagination.pageSize = obj.pageSize ? obj.pageSize:pagination.pageSize
    
    pagination.total = data.data?data.data.count:1
    
    this.setState({
      data:data.data?data.data.rows:[],
      loading:false,
      pagination:pagination
    })
  }

  onGetUserList () {
    this.handleUserList({
      page:this.state.pagination.current,
      pageSize:this.state.pagination.pageSize
    })
  }

  save(form,key){
    form.validateFields(async (err,row) => {
      if(err) return
      let data = await editUserList(row)
      if(data.code === 200){
        this.onGetUserList()
      }
      this.setState({editingKey:''})
    })
  }

  async onDelete (record,index){
    let data = await deleteUserList(record)
    console.log(record,'delet info')
    if(data.code === 200){
      this.setState({deleteIndex:record.key})
      this.onGetUserList()
    }
  }

  render(){
    let state = this.state
    let {modelVisible,modelLoading} = state
    return(
      <div>
        <AddModel 
          {...state} 
          modelVisible={modelVisible} 
          modelLoading={modelLoading} 
          addUserList={this.addUserList}></AddModel>
        <TableComponent {...state}></TableComponent>
      </div>
    )
  }
}

export default Page1