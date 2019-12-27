import React from 'react'

class FancyBorder extends React.Component{
    render(){
        return(
            <div className={'FancyBorder FancyBorder-'+this.props.color}>
                {this.props.children}
            </div>
        )
    }
}

class SplitPane extends React.Component{
    render(){
        return (
            <div className='SplitPane'>
                <div className="SplitPane-left">
                    {this.props.left}
                </div>
                <div className='SplitPane-right'>
                    {this.props.right}
                </div>
            </div>
        )
    }
}

class Contacts extends React.Component{
    render(){
        return <div>Contacts</div>
    }
}

class Chat extends React.Component{
    render(){
        return <div>Chat</div>
    }
}

class Dialog extends React.Component{
    render(){
        return(
            <FancyBorder color='blue'>
                <h1 className="Dialog-title">{this.props.title}</h1>
                <p className='Dialog-message'>{this.props.message}</p>
                {this.props.children}
            </FancyBorder>
        )
    }
}

class WelcomDialog extends React.Component{
    render(){
        return <Dialog title='Welcome' message='Thank you for visiting our spacecraft!' />
    }
}

class ComposeOrInherit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            login:''
        }
    }

    handleChange(e){
        e.preventDefault()
        this.setState({login:e.target.value})
    }
    handleSignUp(){
        console.log(`Wlecome aboard, ${this.state.login}`)
    }

    render(){
        return (
            <div>
                compose or inherit div
                <SplitPane left={<Contacts />} right={<Chat />} />
                <WelcomDialog />
                <Dialog title='Mars Exploration Program' message='How should we refer to you?'>
                    <input value={this.state.login} onChange={this.handleChange.bind(this)} />
                    <button onClick={this.handleSignUp.bind(this)}>Sign Me Up!</button>
                </Dialog>
            </div>
        )
    }
}

export default ComposeOrInherit