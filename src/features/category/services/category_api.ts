import instance from "../../../lib/axios";

export const getCategoryApi = async () => {
    const res = await instance.get('/category/', {});
    return res.data;
}