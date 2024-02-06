import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 3000,
    withCredentials: true
});

export default instance;
