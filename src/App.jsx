import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store.js";
import { getFireAuth } from "./config/firebase.js";
import { setUserSignInState } from "./Screens/AuthScreen/redux/AuthSlice.jsx";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    getFireAuth.onAuthStateChanged((user) => {
      if (user !== null) {
        const { displayName, email, phoneNumber, uid ,photoURL} = user;
        dispatch(
          setUserSignInState({
            user: { displayName, email, phoneNumber,photoURL, uid },
            isAuthenticated: true,
          })
        );
      } else {
        dispatch(
          setUserSignInState({
            user: null,
            isAuthenticated: false,
          })
        );
      }
    });
    getFireAuth.onIdTokenChanged(async(user)=>{
      if (user !== null) {
        const { displayName, email,photoURL, phoneNumber, uid } = user;
        dispatch(
          setUserSignInState({
            user: { displayName, email,photoURL, phoneNumber, uid },
            isAuthenticated: true,
          })
        );
      } else {
        dispatch(
          setUserSignInState({
            user: null,
            isAuthenticated: false,
          })
        );
      }
    })
  }, []);
  
  return (
   
      <RouterProvider router={router} />
    
  );
}

export default App;
