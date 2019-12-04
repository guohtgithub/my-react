import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div>
        This is Home!
        <br></br>
        <Link to='/page1/' style={{color:'black'}}>
          点击跳转Page1
        </Link>
        <br></br>
        <Link to='/page2/' style={{color:'red'}}>
          点击跳转Page2
        </Link>
        <br></br>
        <Link to='/page3/' style={{color:'blue'}}>
          点击跳转Page3
        </Link>
      </div>
    )
  }
}

export default Home