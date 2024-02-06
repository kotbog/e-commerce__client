import {
    ADD_ITEM_TO_CART_AUTH,
    ADD_ITEM_TO_CART_LOCAL,
    GET_CART_ITEMS, REMOVE_CART_ITEM_LOCAL, SEND_ORDER,
    SET_CART_ERROR_MESSAGE,
    SET_CART_ITEMS, SET_LOADING_CART
} from "./action_types";
import {initResponse, Product, User} from "../../../data/types";

export type CartItems = Array<Partial<Product & {quantity: number | string}>>

export type SetLoadingCartAction = {type: typeof SET_LOADING_CART, loading: boolean}

export type SetCartItemsAction = {type: typeof SET_CART_ITEMS, products: CartItems};

export type GetCartItemsAction = {type: typeof GET_CART_ITEMS, userId: string }

export type SetCartErrorMessageAction = {type: typeof SET_CART_ERROR_MESSAGE, message: string}

export type addCartItemLocalAction ={type: typeof ADD_ITEM_TO_CART_LOCAL, product: Product & {quantity: number | string}}

export type addCartItemAuthAction ={type: typeof ADD_ITEM_TO_CART_AUTH, product: Product & {quantity: number | string}, userId: string}

export type addCartItemResponse = {data: {} & initResponse};

export type sendOrderDataResponse = {data: {} & initResponse}

export type sendOrderAction = {type: typeof SEND_ORDER, payload: {user: Partial<User>, cartItems: CartItems}}

export type removeCartItemAction = { type: typeof REMOVE_CART_ITEM_LOCAL, id: string}
