import React , { Component } from 'react';
import allReducers from './reducers/index.js';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Font, AppLoading } from "expo";

import {
  Root ,
} from 'native-base';
import {Routes,Drawer } from '../app-routing'
import ReduxThunk from 'redux-thunk';
const middleware = applyMiddleware(ReduxThunk);

const store = createStore(allReducers ,{} , middleware);

 export default class Store extends Component{
  constructor(props){
    super(props);
    this.state = { loading: true };

  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render(){
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return(
      <Provider store= {store}>
         <Root>
              <Routes/>
              
          </Root>
       </Provider>
    )
  }
}