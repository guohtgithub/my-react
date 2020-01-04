import React from 'react'
import createReactClass from 'create-react-class'

let SetIntervalMixin = {
  componentWillMount:function(){
    this.intervals = []
  },
  setInterval:function(){
    this.intervals.push(setInterval.apply(null,arguments))
  },
  componentWillUnmount:function(){
    this.intervals.forEach(clearInterval)
  }
}

let TickTock = createReactClass({
  mixins:[SetIntervalMixin],
  getInitialState(){
    return {seconds:0}
  },
  componentDidMount(){
    this.setInterval(this.tick,1000)
  },
  tick(){
    this.setState({seconds:this.state.seconds+1})
  },
  render(){
    return(
      <p>
        react has been running for {this.state.seconds} seconds.
      </p>
    )
  }
})

export default TickTock