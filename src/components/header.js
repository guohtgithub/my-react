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
    console.log(this.props,'props')
    let {tabs} = headerData
    slidecollapsed = filterData(slidecollapsed,'slidecollapsed')
    return (
      <div>
        Header Div
      </div>
    )
  }
}

export default connect(mapLogout.mapStateProps,mapLogout.mapDispatchToProps)(MyHeader)