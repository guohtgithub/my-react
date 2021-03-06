import React from 'react'
import {Modal,Form,Input,Button} from 'antd'
import {validatorPhone} from '../../util/index'

const FormItem = Form.Item

class MyForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading:this.props.loading
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        this.props.addUserList(values)
        this.setState({
          loading:true
        })
      }
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      loading:nextProps.loading
    })
    if(!nextProps.visible){
      this.props.form.resetFields()
    }
  }
  render(){
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol:{
        xs:{span:24},
        sm:{span:8}
      },
      wrapperCol:{
        xs:{span:24},
        sm:{span:16}
      }
    }
    const tailFormItemLayout = {
      wrapperCol:{
        xs:{span:24,offset:0},
        sm:{span:16,offset:8}
      }
    }
    let {loading} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label='用户名称'>
          {getFieldDecorator('username',{
            rules:[{message:'请输入用户名'},{required:true,message:'请输入用户名'}]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label='用户邮箱'>
          {getFieldDecorator('email',{
            rules:[{type:'email',message:'请输入邮箱'},{required:true,message:'请输入邮箱'}]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label='手机号'>
          {getFieldDecorator('phone',{
            rules:[{validetor:validatorPhone.bind(this)()},{required:true,message:'请输入手机号码'}]
          })(<Input />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' loading={loading}>提交</Button>
        </FormItem>
      </Form>
    )
  }
}

const ModelForm = Form.create()(MyForm)
class AddModel extends React.Component{
  state = {
    loading:this.props.modelVisible,
    visible:this.props.modelVisible
  }
  showModal = () =>{
    this.setState({
      visible:true
    })
  }
  handleOk = () => {
    this.setState({loading:true})
  }

  handleCancel = () => {
    this.setState({visible:false})
    typeof this.props.modelCancel === 'function' && this.props.modelCancel()
  }
  componentWillUpdata () {
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      visible:nextProps.modelVisible,
      loading:nextProps.modelLoading
    })
  }
  //  是否重新渲染， 当state 与 props改变时调用
  // shouldComponentUpdate(nextProps, nextState)

  // 组件更新时调用
  // componentWillUpdata(nextProps, nextState)
  // 组件更新完毕后调用
  // componentDidUpdate()
  // 组件卸载时调用
  // componentWillUnmount()
  // 组件渲染之后调用，只调用一次。
  // componentDidMount
  render(){
    const {visible,loading} = this.state
    let {addUserList} = this.props
    
    return (
      <div>
        <Modal 
          visible={visible} 
          title='Title' 
          onOk={this.handleOk} 
          onCancel={this.handleCancel} 
          footer={null}
        >
          <ModelForm loading={loading} visible={visible} addUserList={addUserList}></ModelForm>
        </Modal>
      </div>
    )
  }
}

export default AddModel