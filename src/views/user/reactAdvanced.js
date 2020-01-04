import React from 'react'

import {ErrorBoundary,BuggyCounter} from './reactAdvanced/errorBoundary'

import RefsDom from './reactAdvanced/refsDom'
import ReactRefProps from './reactAdvanced/reactRefProps.js'
import FragTable from './reactAdvanced/fragments.js'
import Example from './reactAdvanced/plugin'
import JsxAdvanced from './reactAdvanced/jsxadvanced'
import Father from './reactAdvanced/portals'
import TickTock from './reactAdvanced/es6'
import MouseTracker from './reactAdvanced/renderProps.js'

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
        <h2>plugin</h2>
        <Example />
        <h2>JSX Grammar</h2>
        <JsxAdvanced />
        <h2>Portals 子组件渲染父组件之外的组件</h2>
        <Father />
        <h2>ES6 javascript</h2>
        <TickTock />
        <MouseTracker />
      </div>
    )
  }
}

export default ReactAdvanced