import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Start from "./features/auth/pages/Start";
import Demo from "./features/auth/components/Demo"

export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/",
        element:<Start />
    },{
        path:"/home",
        element:<Demo />
    }
])