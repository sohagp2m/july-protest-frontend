import Dashboard from "@/layouts/Dashboard"
import Main from "@/layouts/Main"
import Login from "@/pages/Authentication/Login/Login"
import Home from "@/pages/Home/Home"
import NotFound from "@/pages/NotFound/NotFound"
import Users from "@/pages/Users/Users"
import { createBrowserRouter } from "react-router-dom"


export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />
         },
      ]

   },
   {
      path: "*",
      element: <NotFound />
   },
   {
      path: "/admin/dashboard",
      element: <Dashboard />,
      children: [

         {
            path: "/admin/dashboard/users",
            element: <Users />
         }
      ]
   },
   {
      path: "/admin/auth/login",
      element: <Login />
   },
])

