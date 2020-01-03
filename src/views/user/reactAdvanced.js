import React from 'react'

import {ErrorBoundary,BuggyCounter} from './reactAdvanced/errorBoundary'

import RefsDom from './reactAdvanced/refsDom'
import ReactRefProps from './reactAdvanced/reactRefProps.js'
import FragTable from './reactAdvanced/fragments.js'

class ReactAdvanced extends React.Component{
  constructor(props){
    super(props)

  }
  render(){
    return (
      <div>
        <p>
          <b>
            This is an example of error boundaries in React 16.
            <br /><br />
            The counter is programmed to throw when it reacher 5. This simulates a JavaScript error in a component.
          </b>
        </p>
        <hr />
        <ErrorBoundary>
          <p>These two counters are inside the same error boundary. If one crashes,the error boundary will replace both of them.</p>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
        <ErrorBoundary><BuggyCounter></BuggyCounter></ErrorBoundary>
        <ErrorBoundary><BuggyCounter></BuggyCounter></ErrorBoundary>

        <h2>ref property</h2>
        <RefsDom></RefsDom>
        <h2>React Ref</h2>
        <ReactRefProps />
        <h2>FragTable div</h2>
        <FragTable ></FragTable>
      </div>
    )
  }
}

export default ReactAdvanced