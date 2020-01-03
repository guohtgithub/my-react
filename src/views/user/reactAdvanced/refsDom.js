import React from 'react'
import {message} from 'antd'

const Child = React.forwardRef((props,ref) => (<input ref={ref} />))
function logPropsRef(Component){
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

  return React.forwardRef((props,ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}

class RefApp extends React.Component{
  constructor(props){
    super(props)
    this.input = null
    this.inputRef = React.createRef()
  }

  copy(){
    this.inputRef.current.select()
    this.input.select()
    document.execCommand('copy')
  }

  render(){
    return (
      <div>
        <input ref={this.inputRef} type='text' />
        <input ref={e=>this.input=e} type='text' />
        <br />
        <button onClick={this.copy.bind(this)}>点击复制内容</button>
      </div>
    )
  }
}


const LogPropsRef = logPropsRef(Child)

class FancyInput extends React.Component{
  constructor(props){
    super(props)
    this.myRef = React.createRef()
    this.myRefOther = React.createRef()
    this.refsProps = React.createRef()
  }

  componentDidMount(){
    console.log(this.myRef.current,this.myRefOther.current)
  }

  render(){
    return(
      <>
        <LogPropsRef ref={this.refsProps} />
        <RefApp />
        <input ref={this.myRef} />
        <hr />
        <Child ref={this.myRefOther}></Child>
      </>
    )
  }
}

export default FancyInput