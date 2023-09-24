import { useQuery } from "react-query";
import { axiosPrivateInstance } from "./axios";
import { retryFunction, unwrapAxiosResponse } from "./common";
import { createPathWithParams } from "../utils/createPathWithParams";

export const BASE_URL_BBDD = import.meta.env.VITE_BASE_URL


export const useGetSectionsQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sections/list'],
        queryFn: () => axiosPrivateInstance
            .get(`${BASE_URL_BBDD}/sections`)
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });
    
export const useGetSectionQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sections'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/sections/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });







export const useGetSessionsByIdSectionQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sessionsByIdSection'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/sessionsByIdSection/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });

export const useGetSessionQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/sessionById'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/sessions/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });







export const useGetFilmsQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/films/list'],
        queryFn: () => axiosPrivateInstance
            .get(`${BASE_URL_BBDD}/films`)
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });

export const useGetFilmsByIdSessionQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/films'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/filmsByIdSession/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });




    export const useGetPeopleQuery = (queryOptions, queryParams) => 
    useQuery({
        ...queryOptions,
        queryKey: ['/people'],
        queryFn: () => axiosPrivateInstance
            .get(createPathWithParams({path: `${BASE_URL_BBDD}/people/`, params: queryParams}))
            .then(unwrapAxiosResponse),
        retry: (failureCount, error) => retryFunction(failureCount, error)
    });
