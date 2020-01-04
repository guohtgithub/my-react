import React from 'react'
import $ from 'jquery'

class Chosen extends React.Component{
  
  constructor(props){
    super(props)
    this.el = null
    this.$el = null
  }

  componentDidMount(){
    this.$el = $(this.el)
    // this.$el.chosen()
  }

  componentWillUnmount(){
    // this.$el.chosen('destroy')
  }

  render(){
    return(
      <div>
        <select className='Chosen-select' 
          ref={el=>this.el=el}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

class Example extends React.Component{
  render(){
    return(
      <Chosen>
        <option>guoht</option>
        <option>guozj</option>
        <option>xxl</option>
      </Chosen>
    )
  }
}

export default Example