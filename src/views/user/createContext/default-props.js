import React from 'react'

class ThemedButton extends React.Component{
    render(){
        return <button>{ this.props.theme}</button>
    }
}

class Toolbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ThemedButton theme={this.props.theme} />
        )
    }
}

class ContextTest extends React.Component{
    render(){
        return <Toolbar theme='dark' />
    }
}

export default ContextTest