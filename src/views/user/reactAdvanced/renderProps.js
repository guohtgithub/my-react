import React from 'react'

class Cat extends React.Component{
  render(){
    const mouse = this.props.mouse
    return <p style={{position:'absolute',left:mouse.x,top:mouse.y}}>cat</p>
  }
}

class Mouse extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      x:0,y:0
    }
  }

  handleMouseMove(event){
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }

  render(){
    console.log(this.props.height,'----')
    return (
      <div style={{height:this.props.height,position:'relative'}} 
        onMouseMove={this.handleMouseMove.bind(this)}>
        <h1>Component Mouse</h1>
        <p>The current mouse position is ({this.state.x},{this.state.y})</p>
        <Cat mouse={this.state} />
      </div>
    )
  }
}


class MouseTracker extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      x:0,y:0
    }
  }

  handleMouseMove(event){
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }

  render(){
    return(
      <>
        <div style={{height:'320px'}} 
          onMouseMove={this.handleMouseMove.bind(this)}>
            <h1>移动鼠标</h1>
            <p>当前的鼠标位置市（{this.state.x},{this.state.y}）</p>
        </div>
        <Mouse height="260px" />
      </>
    )
  }
}

export default MouseTracker