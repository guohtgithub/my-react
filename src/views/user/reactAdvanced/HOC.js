import React from 'react'

import DataSource from './DataSource.js'

class BlogPost extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      blogPost:DataSource.getBlogPost(props.id)
    }
  }

  componentDidMount(){
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount(){
    DataSource.removeChangeListener(this.handleChange)
  }
  handleChange(){
    this.setState({
      blogPost:DataSource.getBlogPost(this.props.id)
    })
  }

  render(){
    return <TextBlock text={this.state.blogPost} />
  }
}


class CommentList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments:DataSource.getComments()
    }
  }

  handleChange(){
    this.setState({
      comments:DataSource.getComments()
    })
    console.log('handleChange')
  }

  componentDidMount(){
    DataSource.addChangeListener(this.handleChange)
  }

  componentWillUnmount(){
    DataSource.removeChangeListener(this.handleChange)
  }

  render(){
    return(
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={commnet.id} />
        ))}
      </div>
    )
  }
}



// 接收一个组件
function withSubscription(Component,selectData){
  return class extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        data:selectData(DataSource,props)
      }
    }

    componetDidMount(){
      // 负责订阅相关的操作
      DataSource.addChangeListener(this.handleChange)
    }
    componetWiilUnmount(){
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange(){
      this.setState({
        data:selectData(DataSource,this.props)
      })
    }

    render(){
      // 使用新数据渲染被包装的组件
      return <Component data={this.state.data} {...this.props} />
    }
  }
}


//不要改变原始组件
function logProps(WrappedComponent){
  /*
    WrappedComponent.prototype.componentWillReceiveProps = function(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    };

    return WrappedComponent
  */
  return class extends React.Component{
    componentWillReceiveProps(nextProps){
      console.log('Current Props: ',this.props)
      console.log('Next Props: ',nextProps)
    }
    render(){
      return <WrappedComponent {...this.props} />
    }
  }
}


export default CommentList