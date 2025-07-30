import { createSlice } from "@reduxjs/toolkit";

const promptSlice = createSlice({
    name:"prompt",
    initialState:{
        showSearch:false,
        movieRecommendations:[]
    },
    reducers:{
        toggleSearchView:(state)=>{
            state.showSearch=!state.showSearch;
        },
        addGptMovies:(state,action)=>{
            state.movieRecommendations = action.payload
        }
    }
})

export const {toggleSearchView,addGptMovies} = promptSlice.actions;
export default promptSlice.reducer
