import axios from "axios";


const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 3000,
    withCredentials: true
});

export default instance;
