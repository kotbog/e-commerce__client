import instance from "../../../lib/axios";
import {GetProductByIdResponse, GetProductsParams, GetProductsResponse} from "../data/types";




export const getProducts = async (params : GetProductsParams) => {
    const response = await instance.get<GetProductsResponse>('/product', {params});
    return response.data;
}

export const getProductById = async (id : number | string) => {
    const response = await instance.get<GetProductByIdResponse>(`/product/${id}`);
    return response.data;
}

