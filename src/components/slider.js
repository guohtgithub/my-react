import React,{Component} from 'react'
import {Menu} from 'antd'
import {Layout} from 'antd/lib/index'
import {mapLogout} from '../reducer/connect'
import {connect} from 'react-redux'
import {filterData} from '../util/index'
import {menus as menusConfig} from '../router/index'
import sliderMenu from '../components/slideMenu'
const {Sider} = Layout
class MySlider extends Component{
  render (){
    let {slidecollapsed,getRouterConfig} = this.props
    slidecollapsed = filterData(slidecollapsed,'slidecollapsed')
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={slidecollapsed}
      >
        <div className="logo" />
        <div onClick={getRouterConfig}>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            {sliderMenu(menusConfig)}
          </Menu>
        </div>
      </Sider>
    )
  }
}

export default connect(mapLogout.mapStateProps,mapLogout.mapDispatchToProps)(MySlider)