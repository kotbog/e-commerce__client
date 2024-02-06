import {GET_CATEGORIES, SET_CATEGORIES, SET_CATEGORY_ERROR, SET_CATEGORY_LOADING} from "../data/action_types";
import {
    getCategoriesAction,
    setCategoriesAction,
    setCategoryErrorMessage,
    setCategoryLoadingAction
} from "../data/types";

export const setLoadingCategory = (loading: boolean) : setCategoryLoadingAction => ({type:SET_CATEGORY_LOADING, loading})

export const setErrorMessageCategory = (message: string) : setCategoryErrorMessage => ({type:SET_CATEGORY_ERROR, message})

export const setCategories = (items: Array<{name:string, _id: string}> | undefined) : setCategoriesAction => ({type:SET_CATEGORIES, categories: items})

export const getCategories = () : getCategoriesAction => ({type: GET_CATEGORIES})