import React , { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Root } from '../app-routing'
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
 export default class Store extends Component{
  render(){
    return(
      <Provider store= {store}>
            <Root/>
       </Provider>
    )
  }
}