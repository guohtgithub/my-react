import React from "react";
import {Layout,Menu,Icon} from 'antd';
import {connect} from 'react-redux'

import './index.css'

import Crumbs from '../../components/crumbs'
import MyHeader from '../../components/header'
import MyMain from '../../components/main'
import MySlider from '../../components/slider'
import {mapIndex} from '../../reducer/connect'
const {Header,Content} = Layout

class Index extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      onSlidecollapsed:this.props.onSlidecollapsed
    }
  }

  toggle = () => {
    this.state.onSlidecollapsed()
  }

  render(){
    const {slidecollapsed} = this.props
    console.log(this.props,'----')
    return (
      <Layout style={{minHeight:'100vh',backgroundColor:'red'}}>
        <MySlider></MySlider>
        <Layout>
          <Header style={{background:'#fff',padding:0}}>
            <Icon className='trigger' 
              type={slidecollapsed?'menu-unfold':'menu-fold'} 
              onClick={this.toggle}
            />
          </Header>
          <Content style={{margin:'24px 16px',padding:24,background:'#f0f0f0',minHeight:280}}>
            Connent
          </Content>
        </Layout>
      </Layout>
    )
  }
}
export default connect(mapIndex.mapStateToProps,mapIndex.mapDispatchToProps)(Index)