import instance from "../../../lib/axios";
import {DeleteTokenResponse, LogInResponse, SignUpResponse, VerifyUserResponse} from "../data/types";
import {data} from "browserslist";


export const reqSignUp = async (email : string, password : string, first_name : string, last_name : string) => {
    return await instance.post<SignUpResponse>('/signup',
        {
            email, password, first_name, last_name
        }
    );

}



export const reqLogIn = async (email : string, password : string) => {
    return await instance.post<LogInResponse>('/login',
        {
            email, password
        });
}


export const reqAuth = async () => {
    const res = await instance.get<VerifyUserResponse>('/me');
    return res.data;
}
export const refreshToken = async () => {
    const res = await instance.post<VerifyUserResponse>('/refresh');
    return res.data;
}
export const deleteToken = async () => {
    const res = await instance.delete<DeleteTokenResponse>('/refresh');
    return  res.data;
}