import {
    ADD_ITEM_TO_CART_AUTH,
    ADD_ITEM_TO_CART_LOCAL,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM_LOCAL,
    SEND_ORDER,
    SET_CART_ERROR_MESSAGE,
    SET_CART_ITEMS,
    SET_LOADING_CART
} from "../data/action_types";
import {Product, User} from "../../../data/types";
import {
    addCartItemAuthAction,
    addCartItemLocalAction,
    CartItems,
    GetCartItemsAction,
    removeCartItemAction,
    sendOrderAction,
    SetCartErrorMessageAction,
    SetCartItemsAction,
    SetLoadingCartAction
} from "../data/types";

export const setCartItems = (products: Array<Partial<Product & {quantity: string | number}>>)  : SetCartItemsAction  =>  {
    return {type: SET_CART_ITEMS, products};
};

export const getCartItems = (userId: string) : GetCartItemsAction => {
    return {type: GET_CART_ITEMS, userId};
}

export const setCartErrorMessage = (message: string) : SetCartErrorMessageAction => {
    return {type: SET_CART_ERROR_MESSAGE, message}
}

export const setLoadingCart = (loading: boolean) : SetLoadingCartAction => {
    return {type: SET_LOADING_CART, loading}
}
export const addCartItemLocal = (product : Product & {quantity: string | number}) : addCartItemLocalAction => {
    return {type: ADD_ITEM_TO_CART_LOCAL, product}
}

export const addCartItemAuth = (product : Product & {quantity: string | number}, userId: string) : addCartItemAuthAction => {
    return {type: ADD_ITEM_TO_CART_AUTH, product, userId}
}

export const sendOrderData = ({user,cartItems}:  {cartItems: CartItems, user: Partial<User>}) : sendOrderAction => {
    return {type: SEND_ORDER, payload: {cartItems, user}}
}

export const removeCartItem = (id: string) : removeCartItemAction => ({type: REMOVE_CART_ITEM_LOCAL, id})