import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProductProfile from "../pages/ProductProfile";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Category from "../pages/Category";
import Contacts from "../pages/Contacts";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/product/:id',
                element: <ProductProfile />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/account',
                element: <Account/>
            },
            {
                path: '/cart/checkout',
                element: <Checkout/>
            },
            {
                path: '/cart/success',
                element: <Success/>
            },
            {
                path: '/category/:category',
                element: <Category/>
            },
            {
                path: '/contact',
                element: <Contacts/>
            },
            {
                path: '/about',
                element: <About/>
            },
        ]
    }
])
