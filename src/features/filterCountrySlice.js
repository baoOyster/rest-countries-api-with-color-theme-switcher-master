import { createSlice } from "@reduxjs/toolkit";

const filterCountrySlice = createSlice({
    name: 'filterCountry',
    initialState: {countries: []},
    reducers: {
        storeCountry: (state, action) => {
            state.countries = action.payload
        },
        filterCountry: (state, action) => {
            state.countries = state.countries.filter(country => country.region === action.payload)
        }
    }
})

export default filterCountrySlice.reducer;
export const {storeCountry, filterCountry} = filterCountrySlice.actions;
export const selectFilteredCountry = state => state.filterCountry.countries;