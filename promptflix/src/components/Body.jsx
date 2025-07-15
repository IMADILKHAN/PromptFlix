import { Browse } from "./Browse";
import { Header } from "./Header";
import { LoginPage } from "./LoginPage";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
export function Body(){

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
        }
    ])

    return <RouterProvider router={appRouter} />
}

