import axios from "axios";


const instance = axios.create({
    baseURL: "https://guiltless-synonymous-roadrunner.glitch.me",
    timeout: 3000,
    withCredentials: true
});

export default instance;
