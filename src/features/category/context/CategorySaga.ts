import {call, put, spawn, takeEvery} from "@redux-saga/core/effects";
import {GET_CATEGORIES} from "../data/action_types";
import {AxiosError} from "axios";
import {setCartErrorMessage} from "../../cart/context/CartActions";
import {setCategories, setErrorMessageCategory, setLoadingCategory} from "./CategoryActions";
import instance from "../../../lib/axios";
import {ResponseGetCategories} from "../data/types";
import {Simulate} from "react-dom/test-utils";
import {getCategoryApi} from "../services/category_api";



function* getCategoryWorker() {
    try {
        yield put(setLoadingCategory(true));
        const res : ResponseGetCategories = yield call(getCategoryApi);
        if(res.error) {
            yield put(setErrorMessageCategory(res.message));
            yield put(setLoadingCategory(false));
            return
        }
        console.log(res)
        yield put(setCategories(res.categories));
        yield put(setLoadingCategory(false));
    }catch (e) {
        if(e instanceof AxiosError) {
            yield put(setCartErrorMessage(e.message));
        }else if (typeof e === "string") yield put(setCartErrorMessage(e))
    }
}
function* getCategoryWatcher() {
    yield takeEvery(GET_CATEGORIES, getCategoryWorker)
}

export function* rootCategorySaga() {
    yield spawn(getCategoryWatcher);
}