import {SEARCH_PRODUCTS, SET_SEARCH_ERROR, SET_SEARCH_PRODUCTS} from "../data/action_types";
import {SearchProductsAction} from "../data/types";
import {Product} from "../../../data/types";

export const searchProducts = (payload: string) : SearchProductsAction => {
    return {type: SEARCH_PRODUCTS, payload}
}

export const setFoundProducts = (payload: Array<Product>) => {
    return {type: SET_SEARCH_PRODUCTS, payload}
}


export const setSearchError = (payload: string) => {
    return {type: SET_SEARCH_ERROR}
}