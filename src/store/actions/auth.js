import {LOGIN_TYPE, REGISTER_TYPE , LOGOUT_TYPE} from './action-types'

function login(data) {
    return {
      type: LOGIN_TYPE,
      payload : {
        
      }
    }
  }

  function register(data) {
    console.log("111111111111",data)
    return {
      type: REGISTER_TYPE,
      payload : {

      }
    }
  }

  function logout(data) {
    return {
      type: LOGOUT_TYPE,
      payload : {
        
      }
    }
  }