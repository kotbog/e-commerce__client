import {
    getCategoriesAction,
    setCategoriesAction,
    setCategoryErrorMessage,
    setCategoryLoadingAction
} from "../data/types";
import {SET_CATEGORIES, SET_CATEGORY_ERROR, SET_CATEGORY_LOADING} from "../data/action_types";

let initialState = {
    categories: [] as Array<{name:string, _id: string}> | undefined,
    loading: false ,
    errorMessage: ''
}
type CategoryActions = getCategoriesAction | setCategoriesAction | setCategoryLoadingAction | setCategoryErrorMessage;
const CategoryReducer  = (state = initialState, action : CategoryActions) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.categories
            }
        }
        case SET_CATEGORY_ERROR : {
            return {
                ...state,
                errorMessage: action.message
            }
        }
        case SET_CATEGORY_LOADING: {
            return {
                ...state,
                loading: action.loading
            }
        }
        default: {
            return {...state}
        }
    }
}
export default CategoryReducer;