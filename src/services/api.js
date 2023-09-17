import { useQuery } from "react-query";
import { axiosPrivateInstance } from "./axios";
import { unwrapAxiosResponse } from "./common";
import { createPathWithParams } from "../utils/createPathWithParams";

export const BASE_URL_BBDD = import.meta.env.VITE_BASE_URL


export const useGetSectionsQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sections'],
        queryFn: () => axiosPrivateInstance
            .get(`${BASE_URL_BBDD}/sections`)
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });

export const useGetSessionsByIdSectionQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sections'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/sessionsByIdSection/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });

