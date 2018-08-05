import {LOGIN_TYPE, REGISTER_TYPE , LOGOUT_TYPE} from './action-types'

function Login(data) {
    return {
      type: LOGIN_TYPE,
      data
    }
  }

  function Register(data) {
    return {
      type: REGISTER_TYPE,
      data
    }
  }

  function Logout(data) {
    return {
      type: LOGOUT_TYPE,
      data
    }
  }