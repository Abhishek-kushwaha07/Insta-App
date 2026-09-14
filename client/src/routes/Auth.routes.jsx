import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Register from "../pages/register";
import Login from "../pages/Login"

 export const router = createBrowserRouter([{
  path:"/register",
  element:<Register/>
},

{
  path:"/login",
  element:<Login/>
}

])