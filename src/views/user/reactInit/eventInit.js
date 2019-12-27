import React from 'react'

class EventTest extends React.Component{

    constructor(props){
        super(props)
        this.state = {isToggleOn:true}
    }

    handleClick = (e,type='alink') =>{
        if(type === 'alink'){
            e.preventDefault()
            console.log('The link was clicked!')
        }else{
            this.setState(state =>({
                isToggleOn:!state.isToggleOn
            }))
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick.bind(this,'btn')}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
                <a href='#' onClick={this.handleClick}>Click me</a>
            </div>
        )
    }
}

export default EventTest