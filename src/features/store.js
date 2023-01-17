import { configureStore } from "@reduxjs/toolkit";
import themeSelector from "./setThemeSlice";
import getCountry from "./getCountrySlice";
import takeCountry from "./selectCountrySlice"
export const store = configureStore({
    reducer: {
        themeSelector,
        getCountry,
        takeCountry
    }
})