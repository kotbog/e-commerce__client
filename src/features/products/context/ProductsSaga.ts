import {call, put, spawn, takeEvery} from "@redux-saga/core/effects";
import {GET_PRODUCT_INFO, GET_PRODUCTS} from "../data/action_types";
import {getProductById, getProducts} from "../services/products_api";
import {setErrorMessage, setProductInfo, setProductInfoError, setProducts} from "./ProductsActions";
import {
    GeProductInfoAction,
    GetProductByIdResponse,
    GetProductsAction,
    GetProductsResponse
} from "../data/types";
import {AxiosError} from "axios";


function* getProductsWorker (action : GetProductsAction) {
    try {

        const response : GetProductsResponse = yield call(getProducts, action.payload);
        console.log(response)
        yield put(setProducts(response.products));
    } catch (e) {
        if(e instanceof AxiosError)  yield put(setErrorMessage(e.message))
        else if (typeof e === "string") yield put(setErrorMessage(e))
    }
}

function* getProductByIdWorker(action : GeProductInfoAction) {
    try {
        const product : GetProductByIdResponse = yield call(getProductById, action.id);
        yield put(setProductInfo(product));
    } catch (e) {
        if(e instanceof AxiosError)  yield put(setProductInfoError(e.message))
        else if (typeof e === "string") yield put(setProductInfoError(e))
    }
}





export function* getProductsWatcher () {
    yield takeEvery(GET_PRODUCTS, getProductsWorker)
}
export function* getProductByIdWatcher () {
    yield takeEvery(GET_PRODUCT_INFO, getProductByIdWorker)
}

export function* rootSagaProducts () {
    yield spawn(getProductsWatcher);
    yield spawn(getProductByIdWatcher);
}