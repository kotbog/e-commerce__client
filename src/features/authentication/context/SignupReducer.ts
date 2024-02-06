import {SET_SIGNUP_DATA} from "../data/action_types";
import {SetSignupDataAction} from "../data/types";

let initialState = {
    success: false,
    message: ''
};

type SignupReducerAction = SetSignupDataAction;

export default function SignupReducer (state = initialState, action : SignupReducerAction ) {
    switch (action.type) {
        case SET_SIGNUP_DATA: {
            return {
                ...state,
                message: action.payload.message,
                success: action.payload.success

            }
        }
        default: return state;
    }
}