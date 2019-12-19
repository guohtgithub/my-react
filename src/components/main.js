import React , {Component} from 'react'
import {Layout} from 'antd'
import {RenderRoutes} from '../router/utils'
const {Content} = Layout
class MyMain extends Component{
  render() {
    let {routes} = this.props
    return (
      <div>
        <Content style={{margin:'0 16px 24px',padding:24,background:'#fff',minHeight:'80vh',textAlign:'left'}}>
          <RenderRoutes routes={routes}></RenderRoutes>
        </Content>
      </div>
    )
  }
}

export default MyMain