import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'

const contact = () => {
  return (
    <div>
      
      <>
    <Title text1="CONTACT" text2="US"/>
    <div className='flex flex-col md:flex-row  sm:my-20 sm:mx-90    gap-16  justify-center'>

<div className='p-3'>
     
        <img className=' w-full md:max-w-[450px]' src={assets.contact_img}/>
        </div>  
      <div className='     mt-[-40px] sm:mt-0 sm:my-0 text-gray-600 md:w-2/4 m-2 flex sm:justify-center  sm:items-start  items-center sm:ml-[-40px] flex-col '>
      <p className=' text-xl font-medium text-black my-5'>Our Store</p>
      <p>Thapar Colony, Phagwar</p>
      <p>shivam@gmail.com</p>
      <p>+91 9877589943</p>
      </div>


      
    </div>
    </>


      <div className='my-10 sm:my-30'>
    <NewsLetter/>
    </div>


    </div>
  )
}

export default contact
