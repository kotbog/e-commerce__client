import {SEARCH_PRODUCTS, SET_SEARCH_ERROR, SET_SEARCH_PRODUCTS} from "./action_types";
import {Product} from "../../../data/types";

export type SearchProductsAction = {
    type: typeof SEARCH_PRODUCTS,
    payload: string
}

export type SetSearchedProductsAction = {
    type: typeof SET_SEARCH_PRODUCTS,
    payload: Array<Product>
}

export type SetSearchErrorAction = {
    type: typeof SET_SEARCH_ERROR,
    payload: string
}