import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import HomeNavBar from './Component/HomeNavBar';
import { AccountFooter, AppHeader } from '../ProfileScreen/ProfileLayout';

function HomeScreen() {
    const location = useLocation();
  return (
    <>
        <AppHeader/>
    <div className='container mx-auto'>
        {/* <Link to={`/auth/login?next=${location.pathname}`}>Login</Link> */}
        {/* <HomeNavBar/> */}
        <Outlet/>
    </div>
        <AccountFooter/>
    </>
  )
}

export default HomeScreen