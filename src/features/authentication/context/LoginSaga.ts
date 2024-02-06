import {all, call, put, spawn, takeEvery} from "@redux-saga/core/effects"
import {LOG_IN, LOG_OUT, VERIFY_USER} from "../data/action_types";
import {loggedInSuccess, logOutSuccess, setLoadingAuth, setLoginError, setVerifyUser, verifyUser} from "./LoginActions";
import {deleteToken, refreshToken, reqAuth, reqLogIn} from "../services/auth_api";
import {DeleteTokenResponse, LogInAction, LogInResponse, RefreshTokenResponse, VerifyUserResponse} from "../data/types";
import {AxiosError} from "axios";




function* loginWorker (action : LogInAction) {
    const{email, password} = action;
    try {
        const response : LogInResponse = yield call(reqLogIn, email, password);
        if(response.status === 200) {
            yield put(loggedInSuccess(response.data.user))
        } else {
            yield put(setLoginError(response.data.message));
        }
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* verifyUserWorker() {
    try {
        console.log('saga');
        yield put(setLoadingAuth(true));
        let res : VerifyUserResponse = yield call(reqAuth);

        res = res.error ? yield call(refreshToken) : res;
        console.log("res: " + res.user);
        if(res.error) {
            yield put(setLoginError(res.message));
            return;
        }
        yield put(setVerifyUser({user: res.user, error: res.error}));
        yield put(setLoadingAuth(false));
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* logOutWorker() {
    try {
        yield put(setLoadingAuth(true));
        let res : DeleteTokenResponse = yield call(deleteToken);
        if(!res.error) yield put(logOutSuccess());
        else yield setLoginError("Logout error");
        yield put(setLoadingAuth(false));
    } catch (e) {
        if(e instanceof AxiosError) yield put(setLoginError(e.message));
        else if(typeof e === "string") yield put(setLoginError(e));
    }
}

export function* loginWatcher () {
    yield takeEvery(LOG_IN, loginWorker);
}

export function* verifyUserWatcher() {
    yield takeEvery(VERIFY_USER, verifyUserWorker);
}

export function* logOutWatcher() {
    yield takeEvery(LOG_OUT, logOutWorker)
}

export function* rootLoginSaga() {
    yield all([
        spawn(logOutWatcher),
        spawn(verifyUserWatcher),
        spawn(loginWatcher),
    ])
}