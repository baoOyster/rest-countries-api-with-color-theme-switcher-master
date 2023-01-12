import { createSlice } from "@reduxjs/toolkit";

export const selectTheme =  state => state.themeSelector.themeMode;

const themeSlice = createSlice({
    name: "themeSelector",
    initialState: { themeMode: "light" },
    reducers: {
        changeBackgroundColor: (state) => {
            if(state.themeMode === "light"){
                state.themeMode = "dark";
            }else{
                state.themeMode = "light";
            }
        }
    }
})

export const {changeBackgroundColor} = themeSlice.actions;
export default themeSlice.reducer;