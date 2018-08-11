import {LOGIN_TYPE , REGISTER_TYPE} from '../actions/action-types'

const nameInitialState = {}
export default  auth = (state = nameInitialState, action) => {
    switch (action.type) {
        case LOGIN_TYPE:
            return {...state ,state}

        case REGISTER_TYPE:
            return {...state ,state}
        default:
          return state
    }
}