import {SET_SIGNUP_DATA, SIGN_UP} from "../data/action_types";
import {SetSignupDataAction, SignupAction} from "../data/types";

export const signUp = (email : string, password : string, first_name : string, last_name : string) : SignupAction => {
    return {
        type: SIGN_UP,
        payload: {
            email, password, first_name, last_name
        }
    }
}

export const setSignupData = (message : string, success : boolean) : SetSignupDataAction => {
    return {
        type: SET_SIGNUP_DATA,
        payload: {
            message,
            success
        }
    }
}



/*
export const setSignupError = (message) => {
    return {

    }
}*/