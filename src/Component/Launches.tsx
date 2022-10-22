import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const launcheApi = createApi({
    reducerPath: 'launcheApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
    endpoints: (builder) => ({
        getLauncheAllPost: builder.query({
            query: (id) => {
                return {
                    url: 'v3/launches',

                }
            }

        }),
        getId: builder.query({
            query: (id) => {
                return {
                    url: `v3/launches/${id}`,

                }
            }

        })
    }),
})

export const {
    useGetLauncheAllPostQuery,
    useGetIdQuery,
} = launcheApi