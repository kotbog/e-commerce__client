import {GET_CART_ITEMS, SET_CART_ERROR_MESSAGE, SET_CART_ITEMS, SET_LOADING_CART} from "../data/action_types";
import {Product} from "../../../data/types";
import {
    CartItems,
    GetCartItemsAction, removeCartItemAction, sendOrderAction,
    SetCartErrorMessageAction,
    SetCartItemsAction,
    SetLoadingCartAction
} from "../data/types";

let initialState = {
    items: [] as CartItems,
    errorMessage: '',
    isLoading: false
};

if(localStorage.getItem('cart-items')) {
    initialState.items = JSON.parse(localStorage.getItem('cart-items') as string);
}

type CartReducerAction = SetCartItemsAction | GetCartItemsAction | SetCartErrorMessageAction | SetLoadingCartAction;
export default function CartReducer (state = initialState, action : CartReducerAction) {
    switch (action.type) {
        case SET_CART_ITEMS: {
            return {
                ...state,
                items: action.products
            }
        }
        case GET_CART_ITEMS: {
            return {
                ...state
            }
        }
        case SET_CART_ERROR_MESSAGE : {
            return {
                ...state,
                errorMessage: action.message,
                isLoading: false
            }
        }
        case SET_LOADING_CART: {
            return {
                ...state,
                isLoading: action.loading
            }
        }
        default: {
            return {...state}
        }
    }
}