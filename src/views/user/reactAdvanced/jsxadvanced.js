import React from 'react'

const MyComponents = {
  DatePicker(props){
    return <div>Imagine a {props.color} datepicker here.</div>
  }
}

const components = {
  photo:'photo',
  video:'video'
}

class NumberDescriber extends React.Component{
  render(){
    let props = this.props
    let description
    if(props.number %2 == 0){
      description = <strong>even</strong>
    }else{
      description = <i>odd</i>
    }

    return <div>{props.number} is an {description} number</div>
  }
}

class Greeting extends React.Component{
  render(){
    let props = this.props
    return <div>firstName:{props.firstName}, lastName:{props.lastName}</div>
  }
}

class ObjectExtend extends React.Component{
  render(){
    return <Greeting {...this.props} />
  }
}

const Button = props => {
  const {kind,...other} = props
  const className = kind === 'primary'?'PrimaryButton':'SecondaryButton'
  return <button className={className} {...other} />
}

class Item extends React.Component{
  render(){
    return <li key={this.props.key}>{this.props.message}</li>
  }
}

class Repeat extends React.Component{
  render(){
    let props = this.props
    let items = []
    for(let i=0;i<props.numTimes;i++){
      items.push(props.children(i))
    }
    return <div>{items}</div>
  }
}

class CounterButton extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:1
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(this.props.color != nextProps.color) return true
    if(this.state.count != nextState.count) return true
    return false
  }
  render(){
    return(
      <button
        color={this.props.color}
        onClick={()=>this.setState(state => ({count:state.count+1}))}
      >
        Count: {this.state.count}
      </button>
    )
  }
}

class ListOfWords extends React.Component{
  render(){
    return <div>{this.props.words.join(',')}</div>
  }
}

class WordArr extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      words:['guoht']
    }
  }

  handleClick(){
    this.setState(state => ({
      words:[...state.words,'guozj']
    }))
  }

  // 复制对象，且不改变原对象
  updateColorMap(colorMap,obj){

    // colorMap.right = obj.right  改变原对象

    // 更简洁
    // return {...colorMap,...obj}

    return Object.assign({},colorMap,{...obj})
  }

  render(){
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>add words</button>
        <ListOfWords words={this.state.words} />
      </>
    )
  }
}

class JsxAdvanced extends React.Component{
  render(){
    const SpecificStroy = components[this.props.storyType]
    console.log(SpecificStroy,'---')
    const userName = {firstName:'xiong',lastName:'xianglian'}
    
    const todos = ['finish doc','submit pr','nag dan to review']

    return (
      <>
        <WordArr />
        <CounterButton color={'red'} />
        <Repeat numTimes={10}>
          {(index) => <div key={index}>
            This is item {index} in the list  
          </div>}
        </Repeat>
        <ul>
          {todos.map(message => <Item key={message} message={message} />)}
        </ul>
        <Button kind='primary' onClick={()=>console.log('clicked!')}>
          Hello World
        </Button>
        <ObjectExtend  {...userName}/>
        <NumberDescriber number={9} />
        <MyComponents.DatePicker color='blue' />
      </>
    )
  }
}

export default JsxAdvanced