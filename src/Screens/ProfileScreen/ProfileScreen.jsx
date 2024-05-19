import React from 'react'
import InputLabelComponent from './components/InputLabelComponent'

function ProfileScreen() {
  return (
    <div className='flex flex-1 justify-between flex-col gap-5'>
      <div className='flex flex-1 w-full flex-col gap-3'>
        <h1 className='font-bold text-xl'>Account Details</h1>
        <InputLabelComponent label={"FIRST NAME"} imp={true} hint={"First Name"}/>
        <InputLabelComponent label={"LAST NAME"} imp={true} hint={"Last Name"}/>
        <InputLabelComponent label={"DISPLAY NAME"} imp={true} hint={"Display Name"}/>
        <i className='text-sm w-full'>This will be how your name will be displayed in the account section and in reviews</i>
        <InputLabelComponent label={"EMAIL"} imp={true} hint={"Email"}/>
      </div>
      <div className='flex flex-1 w-full flex-col gap-3'>
        <h1 className='font-bold text-xl'>Password</h1>
        <InputLabelComponent label={"OLD PASSWORD"} imp={true} hint={"First Name"}/>
        <InputLabelComponent label={"NEW PASSWORD"} imp={true} hint={"Last Name"}/>
        <InputLabelComponent label={"REPEAT PASSWORD"} imp={true} hint={"Repeat new password"}/>
        
      </div>
     
      <div className='p-5 rounded-md self-start bg-black'>
        <p className='text-white font-semibold font-sans'>Save Changes</p>
      </div>
      
    </div>
  )
}

export default ProfileScreen