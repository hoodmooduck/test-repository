import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, DataType } from "./types";

const initialState : InitialState = {
    headerLinks: [],
    sidebarLinks: [],
    products: [],
    loading: false,
    modalState: null,
}

const slice = createSlice({
    name: 'slice',
    initialState: initialState,
    reducers: {
        addModalState: (state, action: PayloadAction<DataType>) => {
            state.modalState = action.payload
        },
        isLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        getHeaderLinks: (state, action: PayloadAction<DataType[]>) => {
            state.headerLinks = action.payload.filter(el => el.parent_id === -1)
        },
        getSidebarLinks: (state, action: PayloadAction<DataType[]>) => {
            state.sidebarLinks = action.payload.filter(el => el.parent_id === 100 || el.parent_id === 14)
        },
        getProducts: (state, action: PayloadAction<DataType[]>) => {
            state.products = action.payload.filter(el => el.parent_id !== 100 && el.parent_id !== 14 && el.parent_id !== -1)
        },
    },
})

export const { isLoading, getHeaderLinks, getSidebarLinks, getProducts, addModalState } = slice.actions

export default slice.reducer