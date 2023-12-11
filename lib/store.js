import { configureStore } from "@reduxjs/toolkit"
import pageNumberReducer from "./NewsSlice"

export const store = configureStore({
    reducer: {
        pageNumberReducer,
    },
})
