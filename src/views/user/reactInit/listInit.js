import React from 'react'

class Blog extends React.Component{
    render(){
        const props = this.props
        const sidebar = (
            <ul>
                {props.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        )

        const content = props.posts.map(post => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>    
        )

        return (
            <div>
                {sidebar}
                <hr/>
                {content}
            </div>
        )
    }
}

class LiItem extends React.Component{
    render(){
        return <li>{this.props.value}</li>
    }
}

class ListTest extends React.Component{
    state = {
        numbers:[1,2,3,4,5],
        posts:[
            {id:1,title:'Hello World',content:'Welcom to learning React!'},
            {id:2,title:'Installation',content:'You can install React from npm.'}
        ]
    }
    render(){
        let {numbers,posts} = this.state
        const listItems = numbers.map(num =>
            <LiItem key={num.toString()} value={num} />
        )
        return (
            <div>
                <ul>{listItems}</ul>
                <Blog posts={posts} />
            </div>
        )
    }
}

export default ListTest