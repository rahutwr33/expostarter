import {LOGIN_TYPE, REGISTER_TYPE , LOGOUT_TYPE} from '../actions/action-types'

const nameInitialState = {}
export default  Auth = (state = nameInitialState, action) => {
    switch (action.type) {
        case LOGIN_TYPE:
            return state
        case REGISTER_TYPE:
            return state
        case LOGOUT_TYPE:
            return state
        default:
            return state
    }
}