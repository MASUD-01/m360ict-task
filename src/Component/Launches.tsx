import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const launcheApi = createApi({
    reducerPath: 'launcheApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com/' }),
    endpoints: (builder) => ({
        getLauncheAllPost: builder.query({
            query: (id) => {
                console.log(id)
                return {
                    url: 'v3/launches',

                }
            }

        }),
        getId: builder.query({
            query: (id) => {
                console.log(id)
                return {
                    url: `v3/launches/${id}`,

                }
            }

        }),
        deletePost: builder.mutation({
            query: (id) => {
                console.log(id)
                return {
                    url: `posts/${id}`,
                    method: 'DELETE'

                }
            }

        })
    }),
})

export const {
    useGetLauncheAllPostQuery,
    useGetIdQuery,
    useDeletePostMutation,
} = launcheApi