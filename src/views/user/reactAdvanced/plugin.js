import React from 'react'

class Chosen extends React.Component{
  render(){
    return(
      <div>
        <select className='Chosen-select' ref={el=>this.el=el}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

export default Chosen