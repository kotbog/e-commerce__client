import {GetProductsResponse} from "../../products/data/types";
import {call, put, spawn, takeEvery} from "@redux-saga/core/effects";
import {searchProductsByName} from "../services/search_api";
import {AxiosError} from "axios";
import {SearchProductsAction} from "../data/types";
import {SEARCH_PRODUCTS} from "../data/action_types";
import {setFoundProducts, setSearchError} from "./SearchActions";


function* searchProductsWorker(action: SearchProductsAction) {
    try {
        const res : GetProductsResponse = yield call(searchProductsByName, action.payload);
        yield put(setFoundProducts(res.products));
    } catch (e) {
        if(e instanceof AxiosError)  yield put(setSearchError(e.message))
        else if (typeof e === "string") yield put(setSearchError(e))
    }
}

export function* searchProductWatcher() {
    yield takeEvery(SEARCH_PRODUCTS, searchProductsWorker);
}


export function* rootSearchSaga() {
    yield spawn(searchProductWatcher)
}