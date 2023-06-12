import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllClass from "../Pages/Menu/AllClass/AllClass";
import Order from "../Pages/Order/Order/Order";


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
       }
      ]
    }
  ]);
  