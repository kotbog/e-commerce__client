import {
    LOG_IN,
    LOG_IN_ERROR,
    LOG_OUT,
    LOGGED_IN_SUCCESS,
    SET_AUTH_ERROR,
    SET_LOADING_AUTH,
    SET_VERIFY_USER,
    VERIFY_USER
} from "../data/action_types";
import {
    LoggedInSuccessAction,
    LogInAction,
    SetAuthErrorAction,
    SetLoginErrorAction,
    VerifyUserAction
} from "../data/types";
import {User} from "../../../data/types";


export const logIn = (email : string, password : string) : LogInAction => {
    return {type: LOG_IN, email, password}
}
export const loggedInSuccess = (user : User) : LoggedInSuccessAction => {
    return {type: LOGGED_IN_SUCCESS, user}
}

export const setLoginError = (message : string) : SetLoginErrorAction => {
    return {type: LOG_IN_ERROR, payload: message}
}
export const setAuthError =(message: string) : SetAuthErrorAction => {
    return {type: SET_AUTH_ERROR, message }
}

export const setVerifyUser = ({user, error} : {user?:User, error: boolean}) : VerifyUserAction => {
    return {type: SET_VERIFY_USER, user, error}
}

export const setLoadingAuth = (loading : boolean) => {
    return {type: SET_LOADING_AUTH, loading}
}

export const verifyUser = () => {
    return {type: VERIFY_USER}
}
export const logOut = () => {
    return {type: LOG_OUT}
}
export const logOutSuccess = () => {
    return {type: LOG_OUT}
}




