import React from 'react'
import ReactDOM from 'react-dom'

const appRoot = document.getElementById('root')
const otherRoot = document.getElementById('otherRoot')

class Modal extends React.Component{
  constructor(props){
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount(){
    otherRoot.appendChild(this.el)
  }
  componentWillUnmount(){
    otherRoot.removeChild(this.el)
  }
  
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Child extends React.Component{
  render(){
    return (
      <div className="modal">
        <button>Click</button>
      </div>
    )
  }
}

class Father extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clicks:0
    }
  }

  handleClick(){
    this.setState(state => ({
      clicks:state.clicks+1
    }))
  }

  render(){
    return (
        <div onClick={this.handleClick.bind(this)}>
          <p>Number of clicks: {this.state.clicks}</p>
          <p>Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler</p>
          <Modal>
            <Child />
          </Modal>
        </div>
    )
  }
}

export default Father