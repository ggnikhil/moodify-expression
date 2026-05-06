import {createBrowserRouter} from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Home from "./features/home/pages/Home"
import FaceExpression from "./features/expression/components/FaceExpression"
import UploadSong from "./features/home/pages/UploadSong"


export const AppRouter = createBrowserRouter([
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/uplaodsong",
        element:<UploadSong />
    },
    {
        path:"/",
        element: <Home />
    }
])
