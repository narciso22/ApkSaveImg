import { FAIL, REGISTER_SUCCESS, CLEAR_AUTH_STATE, LOADING, LOGIN_SUCCESS, LOGOUT_USER } from "../../constants/ActionType"

const auth = (state, {type, payload}) => {
  switch (type){
    case LOADING:
        return {
            ...state,
            loading: true
        }
    case REGISTER_SUCCESS:
        return {
            ...state,
            loading: false,
            data: payload
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            data: payload,
            isLoggedIn: true
        }
    case LOGOUT_USER:
        return {
            ...state,
            loading: false,
            data: null,
            isLoggedIn: false
        }
    case FAIL:
        return {
            ...state,
            loading: false,
            error: payload
        }
    case CLEAR_AUTH_STATE:
        return {
            ...state,
            loading: false,
            data: null,
            error: null
        }
    default:
        return state
  }
}

export default auth
