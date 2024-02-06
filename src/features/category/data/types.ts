import {GET_CATEGORIES, SET_CATEGORIES, SET_CATEGORY_ERROR, SET_CATEGORY_LOADING} from "./action_types";
import {initResponse} from "../../../data/types";

export type getCategoriesAction =  {type: typeof GET_CATEGORIES};

export type setCategoriesAction =  {type: typeof SET_CATEGORIES, categories: Array<{name:string, _id: string}> | undefined};

export type setCategoryLoadingAction = {type: typeof SET_CATEGORY_LOADING, loading: boolean};

export type setCategoryErrorMessage = {type: typeof SET_CATEGORY_ERROR, message: string};

export type ResponseGetCategories = {categories?: Array<{name:string, _id: string}>} & initResponse