import {SET_PRODUCTS, SET_PRODUCTS_ERROR} from "../data/action_types";
import {SetProductsAction, SetProductsErrorAction} from "../data/types";

let initialState = {
    products: [],
    errorMessage: ''
};



type ProductsReducerAction = SetProductsAction | SetProductsErrorAction;

const ProductsReducer = (state = initialState, action : ProductsReducerAction) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {...state,
                products: action.payload
            }
        }
        case SET_PRODUCTS_ERROR: {
            return {
                ...state,
                errorMessage: action.message
            }
        }
        default: {
            return state;
        }
    }
}

export default ProductsReducer;