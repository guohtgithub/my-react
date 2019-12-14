import React from 'react'
import {Menu} from 'antd'
import {OldSchollMenuLink} from '../router/utils'
const SubMenu = Menu.SubMenu
const myMenu = item => <Menu.Item key={item.key}><OldSchollMenuLink route={item}></OldSchollMenuLink></Menu.Item>
const slideMenu = (routes) => Array.isArray(routes) && routes.map(item =>(
    (!Array.isArray(item.routes)&& myMenu(item)) || (
      <SubMenu key={item.path} title={(<OldSchollMenuLink route={item}></OldSchollMenuLink>)}>
        {slideMenu(item.routes)}
      </SubMenu>
    )
  )
)

export default slideMenu