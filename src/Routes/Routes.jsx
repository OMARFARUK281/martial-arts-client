import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClass from "../Pages/Menu/AllClass/AllClass";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashbors/MyCart/MyCart";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
       {
         path: '/',
         element: <Home></Home>
       },
       {
        path: 'allclass',
        element: <AllClass></AllClass>
       },
       {
        path: 'order/:category',
        element: <Order></Order>
       },
       {
        path: 'login',
        element: <Login></Login>
       },
       {
        path: 'signup',
        element: <SignUp></SignUp>
       },
       {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
       }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }

  ]);
  