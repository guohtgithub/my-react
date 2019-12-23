import React from 'react'
import {Icon,Divider,Popconfirm} from 'antd'
import EditableContext from './EditableContext'

let tableMixNativ = {
  state:{
    showEditTable:false,
    bordered:false,
    loading:false,
    pagination:{},
    size:'default',
    expandedRowRender:undefined,
    title:undefined,
    showHeader:true,
    footer:undefined,
    rowSelection:undefined,
    scroll:undefined,
    hasData:true,
    columns:[],
    data:[],
    handleAdd:false,
    editingKey:undefined,
    modelVisible:false,
    modelCancel:undefined
  },
  methods:{
    pagination(){
      return({
        position:'bottom',
        onShowSizeChange:(current,pageSize) =>{},
        onChange:(page,pageSize) => {},
        total:0,
        pageSize:10,
        hideOnSinglePage:false,
        showSizeChange:true,
        defaultCurrent:1,
        current:1
      })
    },
    columns(){
      let self = this
      return ([{
        title:'用户名称',
        dataIndex:'username',
        key:'username',
        width:150,
        editable:true,
        render:text => <a href="javascript:void(0)">{text}</a>
      },{
        title:'手机号码',
        dataIndex:'phone',
        key:'phone',
        width:200,
        editable:true
      },{
        title:'用户邮箱',
        dataIndex:'email',
        key:'email',
        editable:true,
      },{
        title:'操作',
        key:'action',
        dataIndex:'action',
        width:360,
        editable:false,
        render:function(text,record,index){
          let _self = self
          if(_self.isEditing(record)){
            return(
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a 
                      href='javascript:;' 
                      onClick={() => _self.save(form,record.key)}
                      style={{marginRight:8}}
                    >
                      保存
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm title='是否取消？' onConfirm={() => _self.cancel(record.key)}>
                  <a>取消</a>
                </Popconfirm>
              </span>
            )
          }
          return(
            <span>
              <a href='javascrip:;' onClick={_self.showDetailInfo(record)}><Icon type='show'></Icon>查看详情</a>
              <Divider type='vertical'></Divider>
              <a href='javascript:;' onClick={_self.handleEdit(record)}><Icon type='edit'></Icon>编辑</a>
              <Divider type='vertical'></Divider>
              <a href='javascript:;'>
                <Popconfirm title='确认删除？' 
                  cancelText='取消' okText='确认' 
                  onConfirm={() => _self.onDelete(record,index)}>
                  <Icon type='delete'></Icon>删除
                </Popconfirm>
              </a>
            </span>
          )
        }
      }])
    },
    handleEdit(record){
      return () => {
        this.setState({editingKey:record.key})
      }
    },
    showDetailInfo(record){
      return () => {
        this.setState({showEditTable:!this.state.showEditTable})
      }
    },
    save(form,key){
      form.validateFields(async(err,row)=>{
        if(err){
          return
        }
        this.setState({editingKey:''})
      })
    },
    cancel(){
      this.setState({editingKey:''})
    },
    onDelete(record,index){
      const data = [...this.state.data]
      data.split(index,1)
      this.setState({deleteIndex:record.key})
      setTimeout(() => {
        this.setState({data})
      },500)
    },
    isEditing(record){
      console.log(record.key,'key')
      console.log(this.state.editingKey,'state key')
      return record.key === this.state.editingKey
    },
    handleAdd(){
      let {data} = this.state
      let num = Math.floor(Math.random()*10000 - 1000)
      data.push({
        key:num,
        username:`add ${num}`,
        phone:'18******785',
        email:'xxx.@168.com'
      })
      this.setState({
        data:data
      })
    },
    setThis(a,b){
      var obj = a.methods
      for(var key in obj){
        var value = obj[key]
        if(typeof value === 'function'){
          if(!b[key]){
            b[key] = value.bind(b)
          }
        }
      }
      tableMixNativ.state.pagination = b.pagination(b)
      tableMixNativ.state.columns = b.columns(b)
      tableMixNativ.state.handleAdd = b.handleAdd
      tableMixNativ.state.modelCancel = b.modelCancel
      Object.setPrototypeOf(a,b)
    },
    modelCancel(){
      this.setState({
        modelVisible:false,
        modelLoading:false
      })
    }
  }
}

export const tableMix = {...tableMixNativ}