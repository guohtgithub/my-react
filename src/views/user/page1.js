import React from 'react'
import TableComponent from '../../components/table/table'
import {tableMix} from '../../components/table/mix'
import AddModel from './add'

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
      this.setState({
        pagination:pagination
      })
    }
    this.state.handleAdd = this.hanldeAdd
    this.setState({
      pagination:pagination
    })
  }
  handleAdd = async () => {
    this.setState({
      modelVisible:true
    })
  }

  addUserList = async (data) => {
    /*
    let data = {}
    let num = Math.floor(Math.random()*10000 -1000)
    data = {
      key:num,
      username:`add ${num}`,
      phone:'18******988',
      email:'xxxx.@163.com'
    }
    */
    // let res = await addUsersList(data)
    this.setState({
      modelLoading:false,
      modelVisible:false
    })
    /*
      if(res.code === 200){
        this.onGetUserList()
      }
    */
  }

  handleUserList = async (obj = {page:1}) => {
    this.setState({
      loading:true
    })
    /*
    let data = await getUserList ({
      ...obj
    })
    */
    let {data} = this.state
  }

  render(){
    return(
      <div>
        this is page1
      </div>
    )
  }
}

export default Page1