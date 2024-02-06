import {
    GET_PRODUCT_INFO, GET_PRODUCTS,
    SET_PRODUCT_INFO,
    SET_PRODUCT_INFO_ERROR,
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR
} from "./action_types";
import {Product} from "../../../data/types";


export type SetProductAction = {
    type: typeof SET_PRODUCT_INFO,
    payload: Product
}

export type SetProductErrorAction = {
    type: typeof SET_PRODUCT_INFO_ERROR,
    message: string
}

export type GeProductInfoAction = {
    type: typeof GET_PRODUCT_INFO,
    id: string | number
}

export type GetProductsParams = {
    name?: string,
    SKU?: number | string,
    desc?: string,
    _id?: string | number,
    price?: number,
    category?: string,
    images?: Array<string>
}

export type GetProductsAction = {
    type: typeof GET_PRODUCTS,
    payload: GetProductsParams
}

export type SetProductsAction = {
    type: typeof SET_PRODUCTS,
    payload: Array<Product>

}

export type SetProductsErrorAction = {
    type: typeof SET_PRODUCTS_ERROR,
    message: string
}


export type GetProductsResponse = {products: Array<Product>}
export type GetProductByIdResponse = Product