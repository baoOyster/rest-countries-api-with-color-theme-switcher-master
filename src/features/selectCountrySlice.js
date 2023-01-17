import { createSlice } from "@reduxjs/toolkit";

// duma aothatda
const takeCountrySlice = createSlice({
    name: 'takeCountry',
    initialState: {country: {}},
    reducers: {
        takeACountry: (state, action) => {
            state.country = action.payload;
        }
    }
})

export const {takeACountry} = takeCountrySlice.actions;
export default takeCountrySlice.reducer;
export const selectACountry = state => state.takeCountry.country;