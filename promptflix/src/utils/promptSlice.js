import { createSlice } from "@reduxjs/toolkit";

const promptSlice = createSlice({
    name:"prompt",
    initialState:{
        showSearch:false
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.showSearch=!state.showSearch;
        }
    }
})

export const {toggleSearchView} = promptSlice.actions;
export default promptSlice.reducer
