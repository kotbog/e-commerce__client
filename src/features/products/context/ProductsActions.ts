import {
    GET_PRODUCT_INFO,
    GET_PRODUCTS,
    SET_PRODUCT_INFO,
    SET_PRODUCT_INFO_ERROR,
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR
} from "../data/action_types";
import {
    GeProductInfoAction,
    GetProductsAction,
    GetProductsParams,
    SetProductAction,
    SetProductErrorAction,
    SetProductsAction,
    SetProductsErrorAction
} from "../data/types";
import {Product} from "../../../data/types";


export const setProducts = (products : Array<Product>) : SetProductsAction => {
    return {type: SET_PRODUCTS, payload: products}
}

export const setErrorMessage = (error : string) : SetProductsErrorAction => {
    return {type: SET_PRODUCTS_ERROR, message: error}
}

export const getProductsAction = (params : GetProductsParams) : GetProductsAction => {
    return {type: GET_PRODUCTS, payload: params}
}

export const getProductByIdAction = (id : string | number) : GeProductInfoAction => {
    return {type: GET_PRODUCT_INFO, id}
}

export const setProductInfo = (data : Product) : SetProductAction => {
    return {type: SET_PRODUCT_INFO, payload: data}
}

export const setProductInfoError = (error : string) : SetProductErrorAction => {
    return {type: SET_PRODUCT_INFO_ERROR, message: error}
}


