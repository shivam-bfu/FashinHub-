import React from 'react'
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
    <div className='   flex flex-col sm:flex-row  justify-around gap-x-10 bg-gray-100  p-5 items-'>
      <div className='flex flex-col mb-5 sm:ml-10 flex-1/3'>
        <img className="w-36" src={assets.logo}/>
       <p className='my-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, incidunt!</p>
      </div>
      <div className='flex flex-col mb-5 sm:ml-10 flex-1/3'>
      <p className='text-2xl tracking-tighter  font-semibold mb-3'>COMPANY</p>
        <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>Contact Us</li>
            <li>About Us</li>
        </ul>
      </div>
      <div className='flex flex-col mb-5 sm:ml-10 flex-1/3'>
        <p className='text-2xl tracking-tighter  font-semibold mb-3'>GET IN TOUCH</p>
       <p className='mt-2'>+1234567890</p>
       <p className='mt-2'>shivam@gmail.com</p>
      </div>
      
    </div>
    <p className='text-gray-500 text-center m-5'>Copyright 2024@ forever.com-All Right Reserved</p>
    </>
  )
}

export default Footer
