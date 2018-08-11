import React , { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {Root } from '../app-routing'
import thunk from 'redux-thunk';
const middleware = applyMiddleware(thunk);

const store = createStore(allReducers ,middleware);

 export default class Store extends Component{
  render(){
    return(
      <Provider store= {store}>
            <Root/>
       </Provider>
    )
  }
}