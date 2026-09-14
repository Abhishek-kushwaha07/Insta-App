import {
  createBrowserRouter,
} from "react-router";

import Register from "../pages/register";
import Login from "../pages/login"
import Feed from "../pages/Feed";

 export const router = createBrowserRouter([{
  path:"/",
  element:<Feed/>
},
{
  path:"/feed",
  element:<Feed/>
},
{
  path:"/register",
  element:<Register/>
},

{
  path:"/login",
  element:<Login/>
}

])
