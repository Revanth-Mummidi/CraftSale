import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { IoLogIn } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const HomeNavBar= ()=>{
const Auth = useSelector(state=>state.authslice);
const location = useLocation();
// console.log(Auth.user);
// const Auth = useSelector((state)=> state);
useEffect(()=>{

  console.log("Auth=",Auth.user);
},[]);

const sections=[{
  name:'Home',
  path:'/home/'
},{
  name:'About us',
  path:'/about/'
},
{
  name:'Products',
  path:'/products/'
},
{
  name:'Contact us',
  path:'/contact'
},
{
  name:'Profile',
  path:'/user'
}
]
  return (
    
    <div className='bg-gray-800 text-white py-3 px-6'>
        <div className='container mx-auto flex justify-between'>
            <div className='flex justify-center md:hidden items-center mr-5'>
                <GiHamburgerMenu className='flex justify-center  text-xl'/>
            </div>
            <h1 className='text-lg font-bold font-sans flex flex-1 flex-col justify-center md:mx-5'>Craft Sale</h1>
            <div className='flex flex-3 flex-row justify-end md:justify-between '>
             <div className='md:flex md:flex-1  md:flex-row md:justify-between hidden'>
             {
               sections.map((item,index)=>{
                 return(
                   <div key={index}  className='flex flex-col justify-center md:mx-5'>
                    <Link to={item.path}>
                    <p className='hover:cursor-pointer hover:text-slate-400'>{item.name}</p>
                    </Link>
                    </div>
                  )
                })
              }
              </div>
            
            <div className='rounded-md bg-gray-600 p-2 flex justify-between align-baseline'>
              {
                (Auth.isAuthenticated)?
                (<div className='flex justify-center align-baseline flex-row gap-2 '>
                  <p className='align-baseline justify-center flex flex-col'>{Auth.user.displayName}</p>
                  <div className='flex flex-col justify-center'>
                  <img src={Auth.user.photoURL} className='object-cover  w-8 h-8 rounded-full '></img>
                  </div>
                </div>):(
                  <div className='flex justify-center'>
                  <Link to={`/auth/login?next=${location.pathname}`}> 
                  <div className='flex flex-row justify-between gap-2 align-baseline'>
                  <p className='align-baseline justify-center flex flex-col'>Login</p>
                  <IoLogIn className='text-white text-10 flex-col justify-center  size-8'/>
                  </div>
                  </Link>
                  </div>
                )
              }              
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeNavBar