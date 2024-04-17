import React from 'react'
import { useSelector } from 'react-redux'

function HomeNavBar() {
const authslice = useSelector(state=>state.authslice);
  return (
    <div className='bg-gray-800 text-white py-3'>
        <div className='container mx-auto flex justify-between'>
            <h1 className='text-lg'>XNXX</h1>
            <div className='rounded-sm bg-gray-600 p-1'>
                <img src={authslice.user.photoURL}></img>
            </div>
        </div>
    </div>
  )
}

export default HomeNavBar