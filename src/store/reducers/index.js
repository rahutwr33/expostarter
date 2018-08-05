import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from "./login";
const allReducers = combineReducers({
  login: formReducer,
  
  });

  export default allReducers;
  