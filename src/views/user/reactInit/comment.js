import React from 'react'

class Avatar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let props = this.props
        return <img className='Avatar' 
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    }
}

class UserInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let propsData = this.props
        return (
            <div className="UserInfo">
                <Avatar user={propsData.user} />
                <div className="UserInfoName">
                    {propsData.user.name}
                </div>
            </div>
        )
    }
}

class Comment extends React.Component{
    state = {
        date:new Date(),
        text:'I hopy you enjoy learning React!',
        author:{
            name:'guoht',
            avatarUrl:'https://placekitten.com/g/64/64'
        }
    }

    formatDate = date =>{
        return date.toLocaleDateString()
    }

    render(){
        let state = this.state
        return(
            <div className="Comment">
                <UserInfo user={state.author} />
                <div className="Comment-text">
                    {state.text}
                </div>
                <div className="Comment-date">
                    {this.formatDate(state.date)}
                </div>
            </div>
        )
    }
}

export default Comment