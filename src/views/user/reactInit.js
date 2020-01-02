import React,{Fragment} from 'react'

import ContextTest from './createContext/default-props.js'
import HasContext from './createContext/has-context.js'

import {ThemeContext,themes} from './sourceThemes/theme-context.js'
import ThemeButton from './sourceThemes/themed-button.js'

// react base
import IndexClass from './reactInit/index.js'
import Comment from './reactInit/comment.js'
import Clock from './reactInit/stateInit.js'
import EventTest from './reactInit/eventInit.js'
import JudgeTest from './reactInit/askInit'
import ListTest from './reactInit/listInit'
import FormTest from './reactInit/formInit'
import StateUpdate from './reactInit/stateUpdate'
import ReactInit from './reactInit/reactInit'

import ComposeOrInherit from './reactInit/composeInit'

const UserContext = React.createContext()

function ProfilePage(props){
  return (
    <div style={{backgroundColor:props.theme,width:'100px',height:'100px'}}>
      {props.user}
    </div>
  )
}

function Toolbar(){
  return (
    <ThemeContext.Consumer>
      {theme =>(
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme.background} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  )
}

class ReactInitDemo extends React.Component{
  constructor(props){
    super(props)
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:state.theme === themes.dark ? themes.light:themes.dark
      }))
    }

    this.state = {
      theme:themes.light,
      toggleTheme:this.toggleTheme,
      user:{
        name:'guoht',
        theme:'red'
      }
    }
  }

  render(){
    return(
      <Fragment>
        <ReactInit />
        <ComposeOrInherit />
        <StateUpdate />
        <FormTest />
        <ListTest />
        <JudgeTest />
        <EventTest />
        <Clock />
        {/* <Clock date={new Date()} /> */}
        <Comment />
        <IndexClass name='React !' />
        <IndexClass name='Guoht !' />
        <IndexClass name='XXL !' />
        <HasContext />
        <ContextTest />
        <h2>Provider</h2>
        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={this.state.user.name}>
            <Toolbar />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <ThemeContext.Provider value={this.state}>
          <ThemeButton></ThemeButton>
        </ThemeContext.Provider>
      </Fragment>
    )
  }
}

export default ReactInitDemo