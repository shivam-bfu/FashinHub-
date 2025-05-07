import React from 'react'

const Title = ( {text1, text2}) => {
  return (
    <div className='flex justify-center items-center my-1'>
      <p className='text-[23px] text-xl sm:text-2xl md:text-3xl  text-gray-500' > {text1} <span className='text-black'>{text2}</span> </p>
      <p className='w-10 h-[2px] bg-black ml-2'></p>
    </div>
  
  )
}

export default Title
