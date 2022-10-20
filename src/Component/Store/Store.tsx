import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { launcheApi } from '../Launches'
export const store = configureStore({
    reducer: {
        [launcheApi.reducerPath]: launcheApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(launcheApi.middleware),

})

setupListeners(store.dispatch)