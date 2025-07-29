import { useEffect } from "react";
import { Browse } from "./Browse";
import { Header } from "./Header";
import { LoginPage } from "./LoginPage";
import PromptPage from "./PromptPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export function Body(){
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/login",
            element:<LoginPage/>
        },
        {
            path:"/promptPage",
            element:<PromptPage/>
        }
    ])




    return <RouterProvider router={appRouter} />
}

