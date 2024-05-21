import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./Screens/AuthScreen/LoginScreen";
import SignupScreen from "./Screens/AuthScreen/SignupScreen";
import NoDataError from "./Screens/ErrorScreen/NoDataError.jsx";
import AuthLayout from "./Screens/AuthScreen/AuthLayout.jsx";
import HomeLayout from "./Screens/HomeScreen/HomeLayout.jsx";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen.jsx";
import ProfileLayout from "./Screens/ProfileScreen/ProfileLayout.jsx";
import ProfileAddress from "./Screens/ProfileScreen/components/ProfileAddress.jsx";
import ProfileOrders from "./Screens/ProfileScreen/components/ProfileOrders.jsx";
import ProfileWishList from "./Screens/ProfileScreen/components/ProfileWishList.jsx";
import ProfileLogout from "./Screens/ProfileScreen/components/ProfileLogout.jsx";
import ShopScreen from "./Screens/ShopScreen/ShopScreen.jsx";
import ProductScreen from "./Screens/ProductScreen/ProductScreen.jsx";

export const router = createBrowserRouter([
  {
    // index:true,
    path: "/",
    element: <HomeLayout />,
    children:[
      {
        index:true,        
        path:"",
        element:<HomeScreen/>
      },
      {
        path:"shop",
        element:<ShopScreen/>
      },
      {
        path:"product",
        element:<ProductScreen/>
      }
    ]
  },
  {
    path:'/user',
    element:<ProfileLayout/>,
    children:[
      {
        index:true,
        path:"",
        element:<ProfileScreen/>
     },
     {
      path:"address",
      element:<ProfileAddress/>
     },
     {
      path:"order",
      element:<ProfileOrders/>
     },
     {
      path:"wishlist",
      element:<ProfileWishList/>
     }
     ,{
      path:"logout",
      element:<ProfileLogout/>
     }
    ]
  },
  {
    path: "/auth",
    element:<AuthLayout/>,
    children: [
      {
        index:true,
        path:"",
        element: <LoginScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path:"signup",
        element:<SignupScreen/>
      },
      
    ],
  },
  {
    path:"*",
    element:<NoDataError/>
  }
]);
