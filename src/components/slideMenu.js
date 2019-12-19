import React from 'react'
import {Menu} from 'antd'
import {OldSchollMenuLink} from '../router/utils'
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu
const myMenu = item => {
  return (
    <Menu.Item key={item.path}>
      <OldSchollMenuLink route={item}></OldSchollMenuLink></Menu.Item>
  )
}
const slideMenu = (routes) => Array.isArray(routes) && routes.map(item =>(
    (!Array.isArray(item.routes)&& myMenu(item)) || (
      <SubMenu key={item.path} title={(<OldSchollMenuLink route={item}></OldSchollMenuLink>)}>
        {slideMenu(item.routes)}
      </SubMenu>
    )
  )
)

export default slideMenu