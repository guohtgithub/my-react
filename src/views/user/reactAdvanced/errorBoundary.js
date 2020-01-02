import React from 'react'

export class ErrorBoundary extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      err:null,
      errInfo:null
    }
  }

  componentDidCatch(err,errInfo){
    this.setState({
      err:err,
      errInfo:errInfo
    })
  }

  render(){
    if(this.state.errInfo){
      return(
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace:'pre-wrap'}}>
            {this.state.err && this.state.err.toString()}
            <br />
            {this.state.errInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}



export class BuggyCounter extends React.Component{
  constructor(props){
    super(props)
    this.state = {counter:0}
  }

  handleClick(){
    this.setState(({counter}) => ({
      counter:counter+1
    }))
  }

  render(){
    if(this.state.counter === 5){
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick.bind(this)}>
      {this.state.counter}
    </h1>
  }
}

