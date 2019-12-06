import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import './App.css'
import {main} from './router/index'
import {RenderRoutes} from './router/utils'

import { allReducer } from './reducer/reduxs'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'

const store = createStore(
  allReducer,
  applyMiddleware(thunk,promiseMiddleware)
)

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <RenderRoutes routes={main}></RenderRoutes>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
