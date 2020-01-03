import React from 'react'

class Glossary extends React.Component{
  render(){
    let props = this.props
    return(
      <dl>
        {props.items.map(item =>(
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    )
  }
}

class Columns extends React.Component{
  render(){
    return(
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    )
  }
}

class FragTable extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    )
  }
}

export default FragTable