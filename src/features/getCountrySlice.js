import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCountries, searchForCountry } from "../api";

// I just want to note myself that there is only function
// left that I need to add is the function to filter 
// Countries in an individual region

export const fetchCountry = createAsyncThunk(
    'getCountry/fetchCountry',
    async name => {
        if(name) {
            const countries = await searchForCountry(name);
            // console.log(countries);
            return countries.data;
        }else{
            const countries = await getAllCountries();
            // console.log(countries);
            return countries.data;
        }
    }
)

const getCountrySlice = createSlice({
    name: 'getCountry',
    initialState: {
        status: 'idle', // idle, pending, fulfilled, rejected
        result: [],
        filteredResult: []
    },
    reducers:{
        // I think I got this shit
        // The solution here is why not create
        // A new action that replace the existing result
        // with the filtered one
        filterRegion: (state, action) => {
            const filteredCou = state.result.filter(country => country.region === action.payload);
            state.filteredResult = filteredCou;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountry.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(fetchCountry.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.result = action.payload;
            state.filteredResult = action.payload;
        })
        builder.addCase(fetchCountry.rejected, (state) => {
            state.status = 'rejected';
        });
    }
})

export default getCountrySlice.reducer;
export const {filterRegion} = getCountrySlice.actions;
export const selectCountry = state => state.getCountry.result;
export const selectFilteredCountry = state => state.getCountry.filteredResult;
// export const selectCountryStatus = state => state.getCountry.status;