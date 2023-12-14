import axios from "axios";
import { getHeaderLinks, getProducts, getSidebarLinks } from "./slice";
import { DataType } from "./types";
import { Dispatch } from "@reduxjs/toolkit";



export const getCatigories = () => {
    return async function(dispatch: Dispatch<any>) {
        try{
            const response: DataType[] = await axios.get('http://test1.web-gu.ru/')
            .then(res => res.data)  
            dispatch(getSidebarLinks(response))
            dispatch(getHeaderLinks(response))
            dispatch(getProducts(response))
        } 
        catch(err) {
            console.error(err);
        }
    }
}