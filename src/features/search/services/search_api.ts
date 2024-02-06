import instance from "../../../lib/axios";

export const searchProductsByName = async (name : string) => {
    const response = await instance.get('/product/search', {
        params: {
            name
        }
    });
    return response.data;
}