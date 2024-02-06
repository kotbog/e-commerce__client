import {call, put, takeEvery} from "@redux-saga/core/effects";
import {reqSignUp} from "../services/auth_api";
import {setSignupData} from "./SignupActions";
import {SignupAction, SignUpResponse} from "../data/types";
import {SIGN_UP} from "../data/action_types";

function* signupWorker(action : SignupAction) {
    try {
        const {email, password, first_name, last_name} = action.payload;
        const data : SignUpResponse  = yield call(reqSignUp, email, password, first_name, last_name);
        yield put(setSignupData(data.message, data.success))
    } catch (e) {
        console.log(e);
    }

}

export function* signupWatcher () {
    yield takeEvery(SIGN_UP, signupWorker);
}