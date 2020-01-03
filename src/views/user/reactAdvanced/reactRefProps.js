import React from 'react'

class Hello extends React.Component{
  render(){
    return <h1>Hello {this.props.name} !</h1> 
  }
}

const FancyButtonRef = React.forwardRef((props,ref) =>(
  <button ref={ref} className='FancyButton'>
    {props.children}
  </button>
))

const FancyButtonRef2 = React.forwardRef((props,ref) =>(
  <button ref={ref} className='FancyButton2'>
    {props.children}
  </button>
))


class ReactRefProps extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name:'React'
    }
    this.ref1 = React.createRef()
    this.ref2 = React.createRef()
  }

  componentDidMount(){
    console.log(this.ref1,'---')
    this.ref1.current.classList.add('Holo')
    this.ref2.current.focus()
  }

  render(){
    return(
      <div>
        <Hello name={this.state.name} />
        <FancyButtonRef ref={this.ref1}>Click me</FancyButtonRef>
        <p>Start editing to see some magic happen</p>
        <FancyButtonRef2 ref={this.ref2}>fancy button 2</FancyButtonRef2>
      </div>
    )
  }
}

export default ReactRefProps