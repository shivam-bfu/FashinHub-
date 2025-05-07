import React from 'react'
import { assets } from '../assets/assets'

const OurPolicies = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around text-center gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div className='flex flex-col items-center '>
            <img src={assets.exchange_icon} className='w-12 m-auto ' />
            <p className='font-semibold'>Easy Excahnge policiy</p>
            <p>We offer hassel free exchange policy</p>
        </div>
        <div className='flex flex-col items-center '>
            <img src={assets.quality_icon} className='w-12 m-auto '/>
            <p className='font-semibold'>7 Days return policcy</p>
            <p>Free return policy</p>
        </div>
        <div className='flex flex-col items-center '>
            <img src={assets.support_img} className='w-12 m-auto '/>
            <p className='font-semibold'>24/7 customer support</p>
            <p>Customer satisfaction are our first priority</p>
        </div>
      
    </div>
  )
}

export default OurPolicies
