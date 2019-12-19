import React,{Component} from 'react'
import {Layout,Menu,Icon,Badge} from 'antd'
import {connect} from 'react-redux'
import {mapLogout} from '../reducer/connect'
import {filterData} from '../util/index'
import {Redirect} from 'react-router-dom'
const {Header}  = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
      onSlidecollapsed:this.props.onSlidecollapsed,
      current:'mail',
      isAuthenticated:true
    }
  }

  toggle = () => {
    this.state.onSlidecollapsed()
  }

  handleClick = (e) => {
    if(e.key === 'tabs'){
      this.changeTabs()
    }else{
      this.setState({current:e.key})
    }
  }

  logout = (e) =>{
    this.props.onLogout()
    sessionStorage.removeItem('isAuthenticated')
    this.setState({isAuthenticated:false})
  }

  changeTabs = () => {
    this.props.toggleTabs({tabs:!this.props.headerData.tabs})
  }

  render(){
    let {slidecollapsed,headerData} = this.props
    let {tabs} = headerData
    slidecollapsed = filterData(slidecollapsed,'slidecollapsed')
    if(!this.state.isAuthenticated){
      return <Redirect to='/login' />
    }

    return (
      <Header style={{background:'#fff',padding:0,display: 'flex',
      justifyContent: 'space-between'}}>
        <Icon className='trigger' 
          type={slidecollapsed?'menu-unfold':'menu-fold'}
          onClick={this.toggle}
        />
        <div className='fr'>
          <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode='horizontal'
          >
            <Menu.Item key='1'>
              <Badge count={25} overflowCount={10} style={{mariginLeft:10}}>
                <Icon type='notification' />
              </Badge>
            </Menu.Item>
            <Menu.Item key='tabs'>
              <Icon type='audit' />{tabs?'隐藏tabs':'显示tabs'}
            </Menu.Item>
            <SubMenu title={
              <span className='avatar'>
                <Icon type="user" />
                <i className='on bottom b-white' />
              </span>
            }>
              <MenuItemGroup title='用户中心'>
                <Menu.Item key='setting:1'>你好-</Menu.Item>
                <Menu.Item key='setting:2'>个人信息</Menu.Item>
                <Menu.Item key='logout'>
                  <span onClick={this.logout}>退出登录</span>
                </Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="设置中心">
                <Menu.Item key='setting:3'>个人设置</Menu.Item>
                <Menu.Item key='setting:4'>系统设置</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    )
  }
}

export default connect(mapLogout.mapStateProps,mapLogout.mapDispatchToProps)(MyHeader)