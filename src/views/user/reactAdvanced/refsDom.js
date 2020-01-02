import React from 'react'

const Child = React.forwardRef((props,ref) => (<input ref={ref} />))

class LogProps extends React.Component{
  componentDidUpdate(prevProps){
    console.log('old props:',prevProps)
    console.log('new props:',this.props)
  }

  render(){
    const {fowardedRef,...rest} = this.props
    return <Component ref={fowardedRef} {...rest} />
  }
}


class FancyInput extends React.Component{
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.myRefOther = React.createRef()
  }

  componentDidMount(){
    console.log(this.myRef.current,this.myRefOther.current)
  }

  render(){
    return(
      // <button className='FancyButton'>
      //   {this.props.children}
      // </button>
      <>
        <input ref={this.myRef} />
        <hr />
        <Child ref={this.myRefOther}></Child>
      </>
    )
  }
}

export default FancyInput