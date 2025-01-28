import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Policy = (props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
        <img className=' w-14' src={props.src}/>
        <p className=' font-bold'>Easy Exchange Policy</p>
        <p className="m-auto text-xs sm:text-sm md:text-base text-gray-700">{props.text}</p>
    </div>
  )
}

export default Policy