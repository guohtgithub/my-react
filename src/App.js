import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import {main} from './router/index'
import {RenderRoutes} from './router/utils'

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className='App'>
          <RenderRoutes routes={main}></RenderRoutes>
        </div>
      </Router>
    )
  }
}

export default App;
