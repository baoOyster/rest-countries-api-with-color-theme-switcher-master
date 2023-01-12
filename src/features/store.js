import { configureStore } from "@reduxjs/toolkit";
import themeSelector from "./setThemeSlice";
import getCountry from "./getCountrySlice";
import filterCountry from "./filterCountrySlice";
export const store = configureStore({
    reducer: {
        themeSelector,
        getCountry,
        filterCountry
    }
})