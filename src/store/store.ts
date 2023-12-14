import { configureStore } from "@reduxjs/toolkit";
import slices from './slice.ts'


const store = configureStore({
    reducer: {
        slice : slices
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

