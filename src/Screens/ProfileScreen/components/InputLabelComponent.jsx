import React from 'react'

function InputLabelComponent({label,hint,imp=false}) {
  return (
    <div className='flex flex-col justify-center gap-2 w-full'>
        <p className='font-semibold text-slate-500'>{label} {imp?'*':null}</p>
        <input placeholder={hint} className='border w-full rounded-md p-2 px-4'></input>
    </div>
  )
}

export default InputLabelComponent