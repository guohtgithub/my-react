import React from 'react'
import { Form, Select, Input, Tooltip, 
  Icon, Row, Col, Button, Checkbox,message } from 'antd'

import './index.css'

import {register} from '../../network/api/login'

const {Option} = Select

class RegistrationForm extends React.Component{
  state = {
    confirmDirty:false,
    autoCompleteResult:[]
  }

  handleSubmit = e =>{
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err,values) => {
      if(!err){
        let param = {
          username:values.username,
          password:values.password,
          phone:values.phone,
          email:values.email
        }
        register(param).then(data => {
          if(data.code === 200){
            message.info(data.message,1.5)
            setTimeout(() => {
              window.location.href = '/login'
            },2000)
          }
        })
      }
    })
  }

  validteToNextPassword = (rule,value,callback) =>{
    const {form} = this.props
    if(value && this.state.confirmDirty){
      form.validateFields(['confirm'],{force:true})
    }
    callback()
  }

  compareToFirstPassword = (rule,value,callback) =>{
    const {form} = this.props
    if(value && value !== form.getFieldValue('password')){
      callback('Two passwords that you enter is inconsistent!')
    }else{
      callback()
    }
  }

  handleConfirmBlur = e => {
    const {value} = e.target
    this.setState({confirmDirty:this.state.confirmDirty || !!value})
  }

  render(){
    const {getFieldDecorator} = this.props.form
    // const {autoCompleteResult} = this.state

    const formItemLayout = {
      labelCol:{
        xs:{span:24},
        sm:{span:6}
      },
      wrapperCol:{
        xs:{span:24},
        sm:{span:18}
      }
    }

    const tailFormItemLayout = {
      wrapperCol:{
        xs:{
          span:24,
          offset:0,
        },
        sm:{
          span:24,
          offset:0
        }
      }
    }
    const prefixSelector = getFieldDecorator('prefix',{
      initialValue:'86'
    })(
      <Select style={{width:70}}>
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    )

    return (
      <div className="register">
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register-form">
          <Form.Item label='邮箱'>
            {getFieldDecorator('email',{
              rules:[
                {type:'email',message:'The input is not valid E-mail'},
                {required:true,message:'Please input your E-mail!'}
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='密码' hasFeedback>
            {getFieldDecorator('password',{
              rules:[
                {required:true,message:'Please input your password!'},
                {validator:this.validteToNextPassword}
              ]
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label='确认密码' hasFeedback>
            {getFieldDecorator('confirmPWD',{
              rules:[
                {required:true,message:'Please confirm your password!'},
                {validator:this.compareToFirstPassword}
              ]
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item 
            label = {
              <span>
                用户名&nbsp;
                <Tooltip title='账号显示的名字'>
                  <Icon type='question-circle-o' />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator('username',{
              rules:[{required:true,message:'Please input your username!',whitespace:true}]
            })(<Input />)}
          </Form.Item>
          <Form.Item label='手机号' Number>
            {getFieldDecorator('phone',{
              rules:[{required:true,message:'Please input your phone number!'}]
            })(<Input addonBefore={prefixSelector} style={{width:'100%'}} />)}
          </Form.Item>
          <Form.Item label='验证码' extra='We must make sure that your are a human'>
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha',{
                  rules:[{required:true,message:'Please input the captcha you got!'}]
                })(<Input />)}
              </Col>
              <Col span={12} style={{textAlign:'left'}}>
                <Button>Get Captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement',{
              valuePropName:'checked'
            })(
              <Checkbox>I have read the <a href='#'>agreement</a></Checkbox>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(RegistrationForm)