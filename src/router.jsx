import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./Screens/AuthScreen/LoginScreen";
import SignupScreen from "./Screens/AuthScreen/SignupScreen";
import NoDataError from "./Screens/ErrorScreen/NoDataError.jsx";
import AuthLayout from "./Screens/AuthScreen/AuthLayout.jsx";
import HomeLayout from "./Screens/HomeScreen/HomeLayout.jsx";

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
