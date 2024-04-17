import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import HomeNavBar from './Component/HomeNavBar';

function HomeScreen() {
    const location = useLocation();
  return (
    <div>
        {/* <Link to={`/auth/login?next=${location.pathname}`}>Login</Link> */}
        <HomeNavBar/>
        <Outlet/>
    </div>
  )
}

export default HomeScreen