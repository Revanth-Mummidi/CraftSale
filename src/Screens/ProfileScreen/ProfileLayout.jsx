import React from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function ProfileLayout() {
  const Auth =useSelector(state=>state.authslice);
  const options=[{name:'Account',path:'/user/'},{name:'Address',path:'/user/address'},{name:'Orders',path:'/user/order'},{name:'Wishlist',path:'/user/wishlist'},{name:'Logout',path:'/user/logout'}]
 
  return (
    <div  >
        <AppHeader/>
        <div className='flex flex-col p-10 gap-20'>
        <h1 className='font-bold text-5xl flex flex-1 justify-center flex-row '>My Account</h1>
        <div className='container'>
        <div className='flex  flex-row gap-20'>
            <div className='flex flex-col  justify-center bg-gray-200 p-4'>
                  <div className='flex-col flex justify-center items-center m-10'>
                       <div className='flex flex-col items-center gap-2'>
                       { (Auth.user.photoURL)?(<img src={Auth.user.photoURL} className='rounded-full w-full aspect-square justify-center bg-blue-50'></img>):null}
                        <h1 className='font-bold text-xl font-sans'>{Auth.user.displayName}</h1>
                       </div>
                  </div>
                 <div className='mt-2 flex flex-col justify-between gap-6'>
                     {
                        options.map((item,index)=>{
                            return(
                                <div key={index}>
                                    <NavLink className='text-slate-600' end to={item.path}>{item.name}</NavLink>
                                </div>
                            )
                        })
                     }
                 </div>
            </div>
            <div className='flex flex-1'>
               
                <Outlet/>
            </div>
        </div>
        </div>
        </div>
       
        <AccountFooter/>
    </div>
  )
}

export const AccountFooter=()=>{
    const footeroptions=[{name:'Home'},{name:'Shop'},{name:'Product'},{name:'Blog'},{name:'Contact us'}]
    return(
        <>
        <div className='sm:flex hidden sm:flex-col self-end justify-center  w-full flex-1 grow bg-black px-10 py-10'>
        <div className='flex flex-1 items-center flex-row text-white gap-4'>
            <h1 >CraftSale</h1>
            <hr className='rotate-90 w-5 '></hr>
             <p className='text-sm text-slate-300'>Handmade Craft store</p>
        <div className='flex  flex-1 flex-row gap-3 items-center text-slate-300 text-[12px] justify-end'>
        {
                footeroptions.map((item,index)=>{
                    return(
                        <div  key={index} className=' '> 
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <hr className='my-5'></hr>
        <div className='flex flex-1 flex-row  '>
            <div className='flex flex-row justify-start text-slate-200 flex-1 text-[10px] gap-5'>
                <p>Copyright ©️ 2024 CraftSale. All rights reserved</p>
                <p className='font-bold'>Privacy Policy</p>
                <p className='font-bold'>Terms of use</p>
            </div>
            <div className='flex flex-row justify-end items-center text-2xl gap-6 text-slate-400'>
                <FaFacebook/>
                <FaInstagramSquare/>
                <FaYoutube/>
            </div>
        </div>
    </div>
    <div className='flex sm:hidden min-w-[375px] h-auto flex-col self-end justify-center flex-1 grow bg-[#232627] px-[48px] py-[32px]'>
        <div className='flex flex-1 items-center flex-col text-white gap-4'>
            <h1 className='font-medium'>CraftSale</h1>
            <hr className=' w-5 '></hr>
             <p className='text-sm text-slate-300'>Handmade Craft store</p>
        <div className='flex  flex-1 flex-col md:flex-row gap-3 items-center text-slate-300 text-[12px] justify-end'>
        {
                footeroptions.map((item,index)=>{
                    return(
                        <div  key={index} className=' '> 
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </div>
        </div>
        <hr className='my-5'></hr>
        <div className='flex flex-1 flex-col items-center justify-center gap-7  '>
                <p className='text-slate-200  text-[10px] '>Copyright ©️ 2024 CraftSale. All rights reserved</p>
            <div className='flex flex-row justify-start text-slate-200 flex-1 text-[10px] gap-5'>
                <p className='font-bold'>Privacy Policy</p>
                <p className='font-bold'>Terms of use</p>
            </div>
            <div className='flex flex-row justify-end items-center text-2xl gap-6 text-slate-400'>
                <FaFacebook/>
                <FaInstagramSquare/>
                <FaYoutube/>
            </div>
        </div>
    </div>
    </>
    )
}

export const AppHeader = ()=>{
    // const sections=[{name:'Home'},{name:'Shop'},{name:'Product'},{name:'Contact us'}];
    const Auth = useSelector(state=>state.authslice);
    const sections=[{
        name:'Home',
        path:'/'
      },{
        name:'Shop',
        path:'/shop/'
      },
      {
        name:'Product',
        path:'/product/'
      },
      {
        name:'Contact us',
        path:'/contact'
      }
      ]
      const location=useLocation();
    return(
        <div className='flex flex-1 flex-row  justify-between p-2'>
            <div className='flex justify-center  items-center'>
                <h1 className='font-bold text-2xl'>CraftSale</h1>
            </div>
            <div className='flex justify-between flex-row items-center'>
                {
                    sections.map((item,index)=>{
                        return(
                            <div key={index} className='mx-3'> 
                                <NavLink to={item.path}>{item.name}</NavLink>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-3 justify-between flex-row items-center gap-4'>
                <CiSearch className='text-2xl'/>
                <Link to={Auth.isAuthenticated?"/user/":`/auth/login?next=${location.pathname}`}>
                {(!Auth.isAuthenticated)?(<CgProfile className='text-2xl'/>):(<img src={Auth.user.photoURL} className='w-9 rounded-full aspect-square'></img>)}
                </Link>
                <FiShoppingCart className='text-2xl'/>
            </div>
        </div>
    )
}
export default ProfileLayout