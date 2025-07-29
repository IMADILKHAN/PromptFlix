import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import promptReducer from "./promptSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        prompt:promptReducer
    },

})

export default appStore;