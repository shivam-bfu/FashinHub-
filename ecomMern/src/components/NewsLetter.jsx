import React from 'react'

const NewsLetter = () => {
  return (
    <>
    <div className='flex justify-center mb-20'>
        <div className='flex flex-col items-center'>
      <p className='font-semibold text-2xl m-2 tracking-tighter'> Subscribe to get 20% OFF</p>
      <p className=' text-gray-400 text-xs sm:text-sm mb-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor!</p>
      <form>
        <input className='border border-gray-400 h-12 sm:w-70 outline-none' type='email' placeholder='Enter Your Email' />
        <button  className=" cursor-pointer bg-black text-white  p-3 w-30"type='submit'>submit</button>
      </form>
      </div>
      
    </div>
  
      </>)

}

export default NewsLetter
