import {SetSearchedProductsAction, SetSearchErrorAction} from "../data/types";
import {SET_SEARCH_ERROR, SET_SEARCH_PRODUCTS} from "../data/action_types";

let initialState = {
    products: [],
    errorMessage: ''
}
type ActionType = SetSearchedProductsAction | SetSearchErrorAction
const SearchReducer = (state = initialState, action : ActionType) => {
    switch (action.type) {
        case SET_SEARCH_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case SET_SEARCH_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        default: return state
    }
}

export default SearchReducer;