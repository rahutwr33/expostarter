import {LOGIN_TYPE} from '../actions/action-types'

const nameInitialState = {}
export default  login = (state = nameInitialState, action) => {
    switch (action.type) {
        case LOGIN_TYPE:
            return state
        
    }
}