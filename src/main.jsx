import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import {cartProductsLoader} from "./loaders/cartProductsLoader.js";
import Checkout from "./components/Checkout/Checkout.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProviders from "./components/providers/AuthProviders.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Shop></Shop>
            },
            {
                path: "/orders",
                element: <Orders></Orders>,
                loader: cartProductsLoader
            },
            {
                path: "/inventory",
                element: <Inventory></Inventory>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "*",
                element: <h2>Not Found</h2>
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProviders>
          <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
