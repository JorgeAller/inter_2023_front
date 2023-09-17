import axios from "axios";
export const BASE_URL_BBDD = import.meta.env.VITE_BASE_URL


export const axiosPrivateInstance = axios.create({ 
    baseUrl: BASE_URL_BBDD,
    headers: {'Content-Type': 'application/json'},
    timeout: 10000,
    withCredentials: false
});