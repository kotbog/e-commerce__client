import {
    LOG_IN_ERROR,
    LOGGED_IN_SUCCESS,
    LOGGED_OUT_SUCCESS,
    SET_AUTH_ERROR,
    SET_LOADING_AUTH,
    SET_VERIFY_USER
} from "../data/action_types";
import {
    LoggedInSuccessAction,
    LogoutSuccessAction,
    SetAuthErrorAction,
    setLoadingAuthAction,
    SetLoginErrorAction,
    VerifyUserAction
} from "../data/types";
import {User} from "../../../data/types";


let initialState : {
    loading: boolean,
    loggedIn: boolean,
    errorMessageLogin: string,
    errorMessageAuth: string,
    user: null | User
} = {
    loading: false,
    loggedIn: false,
    errorMessageLogin: '',
    errorMessageAuth: '',
    user: null
};
type LoginReducerAction = LoggedInSuccessAction | SetLoginErrorAction | VerifyUserAction | setLoadingAuthAction | LogoutSuccessAction | SetAuthErrorAction
function loginReducer(state = initialState, action:LoginReducerAction) {
    console.log(action)
    switch (action.type) {
        case LOGGED_IN_SUCCESS: {
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.user
            }
        }
        case LOG_IN_ERROR: {
            return {
                ...state,
                loading: false,
                errorMessageLogin: action.payload
            }
        }
        case SET_VERIFY_USER: {
            return {
                ...state,
                loggedIn: !action.error,
                user: action.user
            }
        }
        case SET_LOADING_AUTH: {
            return {...state, loading: action.loading}
        }
        case SET_AUTH_ERROR: {
            return  {...state, loading: false, errorMessageAuth: action.message}
        }
        case LOGGED_OUT_SUCCESS: {
            return {
                ...state,
                user: null,
                loggedIn: false
            }
        }
        default: return state;
    }
}


export default loginReducer;