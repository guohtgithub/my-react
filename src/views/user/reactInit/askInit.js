import React from 'react'

class UserGreeting extends React.Component{
    render(){
        return <h1>Welecome back! Logout</h1>
    }
}

class GuestGreeting extends React.Component{
    render(){
        return <h1>Please sign up. Login</h1>
    }
}

class Greeting extends React.Component{
    render(){
        const isIfFlag = this.props.isIfFlag
        if(isIfFlag) return <UserGreeting />
        return <GuestGreeting />
    }
}

class LoginButton extends React.Component{
    render(){
        return <button onClick={this.props.onClick}>Login</button>
    }
}

class LogoutButton extends React.Component{
    render(){
        return <button onClick={this.props.onClick}>Logout</button>
    }
}

class WarningBanner extends React.Component{
    render(){
        if(this.props.warn) return null
        return <div className='warning'>Warning !</div>
    }
}

class JudgeTest extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isIfFlag:false,
            messages:['React','Vue','Axios','Redux','Vuex'],
            showWarning:true
        }
    }

    handleLoginClick = () =>{
        this.setState({isIfFlag:true})
    }

    handleLogoutClick = () =>{
        this.setState({isIfFlag:false})
    }

    handleToggleClick = ()=>{
        this.setState({showWarning:!this.state.showWarning})
    }

    render(){
        let {isIfFlag,messages,showWarning} = this.state
        const msgLength = messages.length
        let button = null
        if(isIfFlag)
            button = <LogoutButton onClick={this.handleLogoutClick} />
        else
            button = <LoginButton onClick={this.handleLoginClick} />
        return(
            <div>
                <Greeting isIfFlag={isIfFlag} />
                {button}
                {msgLength > 0 && 
                    <h2>You hava {msgLength} unread messages.</h2>
                }
                <p>
                    The user is <b>{isIfFlag?' currently ':' not '}</b> logged in.
                </p>
                <WarningBanner warn={showWarning} />
                <button onClick={this.handleToggleClick}>
                    {showWarning?'Hide':'Show'}
                </button>
            </div>
        )

    }
}

export default JudgeTest