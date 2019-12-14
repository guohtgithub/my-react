import React,{Component} from 'react'
import { Form, Icon,Input, Row, Col, Checkbox, Button} from 'antd'
import {Link,Redirect} from 'react-router-dom'
import './index.css'
// import {login} from '../../network/api/login'
import {connect} from 'react-redux'
import {mapLogin} from '../../reducer/connect'

const FormItem = Form.Item

class Login extends React.Component{
  handleSubmit = e =>{
    e.preventDefault()
    this.props.form.validateFields((err,values) =>{
      if(!err){
        console.log('Received values of form: ',values)
        this.props.handleLogin(values)
      }
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    const {from} = this.props.location.state || {from:{pathname:'/'}}
    let {loginData} = this.props
    if(typeof loginData === 'object' && loginData.code === 200){
      sessionStorage.setItem('isAuthenticated',true)
    }
    let isAuthenticated = sessionStorage.getItem('isAuthenticated')
    if(isAuthenticated){
      from.pathname = from.pathname === '/login'?'/':from.pathname
      return (<Redirect to={from}></Redirect>)
    }else{
      return (
        <div className='login'>
            <Form className='login-form' onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('username',{
                  rules:[{required:true,message:'请输入用户名'}]
                })(
                  <Input 
                    prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}} />} 
                    placeholder='用户名' />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password',{
                  rules:[{required:true,message:'请输入密码'}]
                })(
                  <Input 
                    prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}}></Icon>} 
                    type='password'
                    placeholder='密码' />
                )}
              </FormItem>
              <FormItem>
                <Row gutter={24}>
                  <Col span={12}><Checkbox>记住密码</Checkbox></Col>
                  <Col span={12} className='tr'>
                    <a className='login-form-forgot' href=''>忘记密码</a>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Row gutter={24}>
                  <Col span={6}>
                    <Button type="primary" htmlType='submit' className="login-form-button">
                      登录
                    </Button>
                  </Col>
                  <Col span={18} className='tr'>
                    <Link to='/register'>还没有账号？去注册</Link>
                  </Col>
                </Row>
              </FormItem>
            </Form>
        </div>
      )
    }
  }
}

export default connect(mapLogin.mapStateProps,mapLogin.mapDispatchToProps)(Form.create()(Login))