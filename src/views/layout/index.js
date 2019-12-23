import React, { Component } from "react";
import {Layout} from 'antd';

import './index.css'

import Crumbs from '../../components/crumbs'
import MyHeader from '../../components/header'
import MyMain from '../../components/main'
import MyTabs from '../../components/tabs'
import MySlider from '../../components/slider'
import {connect} from 'react-redux'
import {mapIndex} from '../../reducer/connect'

// const {Header, Footer, Sider, Content} = Layout

class Index extends Component{
  state = {
      currentPage:'',
      openPages:[]
    }

  onEdit =(targetKey,action) => {
    this[action](targetKey)
  }

  onTabClick = (activeKey) =>{

  }

  render(){
    let {routes,headerData} = this.props
    let {tabs} = headerData
    
    return (
      <Layout style={{minHeight:'100vh'}}>
        <MySlider></MySlider>
        <Layout>
          <MyHeader></MyHeader>
          <Crumbs></Crumbs>
          {tabs && <MyTabs routes={routes}></MyTabs>}
          {!tabs && <MyMain routes={routes}></MyMain>}
        </Layout>
      </Layout>
    )
  }
}
export default connect(mapIndex.mapStateProps)(Index);