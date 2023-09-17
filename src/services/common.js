import { store } from "../redux/store"

export const unwrapAxiosResponse = (response) => Promise.resolve(response.data)

export const retryFunction = (failureCount, error) => {
    if(error.response?.status === 401){
        console.log('error obteniendo la data')
    }
    return false
};