import React from 'react'

class FormatteDate extends React.Component{
    render(){
        return(
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
        )
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(
            () =>this.tick(),1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date:new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>Hello, React!</h1>
                <FormatteDate date={this.state.date} />
            </div>
        )
    }
}

export default Clock