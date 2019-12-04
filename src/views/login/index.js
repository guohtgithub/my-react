import React,{Component} from 'react'
import { Form, Icon,Input, Row, Col, Checkbox, Button} from 'antd'
import {Link} from 'react-router-dom'
import './index.css'
// import '../../mockdata/mock-article.js'
import {login} from '../../network/api/login'


class Login extends React.Component{
  
  componentDidMount(){

  }
  handleSubmit = e =>{
    e.preventDefault()
    this.props.form.validateFields((err,values) =>{
      if(!err){
        let param = {
          username:values.username,
          password:values.password
        }
        login(param).then(data => {
          console.log(data,'----')
        })
        console.log('Received values of form: ',values)
      }
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return (
      <div className='login'>
          <Form className='login-form' onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username',{
                rules:[{required:true,message:'请输入用户名'}]
              })(
                <Input 
                  prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}} />} 
                  placeholder='用户名' />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password',{
                rules:[{required:true,message:'请输入密码'}]
              })(
                <Input 
                  prefix={<Icon type='lock' style={{color:'rgba(0,0,0,.25)'}}></Icon>} 
                  type='password'
                  placeholder='密码' />
              )}
            </Form.Item>
            <Form.Item>
              <Row gutter={24}>
                <Col span={12}><Checkbox>记住密码</Checkbox></Col>
                <Col span={12} className='tr'>
                  <a className='login-form-forgot' href=''>忘记密码</a>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
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
            </Form.Item>
          </Form>
      </div>
    )
  }
}

export default Form.create()(Login)