import instance from "../../../lib/axios";
import {addCartItemResponse, CartItems} from "../data/types";
import {User} from "../../../data/types";
import {response} from "express";


export const getCartItems = async (id: string) => {
    const response = await instance.get('/cart/items', {params: {id}});
    console.log(response)
    return response.data.resItems;
}
export const addItemToCart = async (payload: {userId: string, product: {id: string, quantity: string | number}})
    : Promise<addCartItemResponse>=> {
    const response = await instance.post('/cart/items', {data:{userId: payload.userId, product: payload.product}});
    return response.data;
}

export const sendOrderItems = async (payload: {user: User, items: CartItems}) => {
    return await instance.post('/cart/checkout', {data: {payload}});
}