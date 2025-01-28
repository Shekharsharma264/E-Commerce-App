import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between gap-4 sm:flex-row my-14'>
        <div>
            <img className='mb-2 w-36' src={assets.logo}/>
            <p className='text-sm'>We are dedicated to providing high-quality products that cater to your unique style. Our mission is to make shopping easy, enjoyable, and accessible for everyone.</p>
        </div>
        <div>
            <p className='text-xl mb-2'>COMPANY</p>
            <ul className='text-sm'>
                <li className='mb-1'>home</li>
                <li className='mb-1'>About us</li>
                <li className='mb-1'>Delivery</li>
                <li className='mb-1'>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl mb-2'>GET IN TOUCH</p>
            <p className='text-sm'>Have questions? Get in touch with us today, we're here to help!</p>
        </div>
    </div>
  )
}

export default Footer