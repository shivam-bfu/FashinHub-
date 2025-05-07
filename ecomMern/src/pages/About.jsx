import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {
  return (
    <div>
      
    <>
  <Title text1="ABOUT" text2="US"/>
  <div className='flex flex-col md:flex-row  sm:my-10 sm:mx-50 gap-16'>

<div className='p-3'>
   
      <img className=' w-full md:max-w-[450px]' src={assets.about_img}/>
      </div>  
    <div className=' mt-[-40px] sm:mt-0 sm:my-0 text-gray-600 md:w-2/4 m-2 flex  sm:justify-center sm:items-start items-center flex-col '>
    <p className=' ml-7 text-xl font-medium text-gray-600 my-2'>Our Moto</p>

    
    <p className='m-2 ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem tenetur excepturi similique maiores repellat placeat ipsum laboriosam, quos sapiente itaque provident pariatur blanditiis obcaecati, quas in eligendi perspiciatis quis!</p>
    <p className=' ml-7 text-xl  text-gray-600  font-medium my-2'>Our Experience</p>
    
    <p className='m-2 ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem tenetur excepturi similique maiores repellat placeat ipsum laboriosam, quos sapiente itaque provident pariatur blanditiis obcaecati, quas in eligendi perspiciatis quis!</p>
    <p className='m-2 ml-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem tenetur excepturi similique maiores repellat placeat ipsum laboriosam, quos sapiente itaque provident pariatur blanditiis obcaecati, quas in eligendi perspiciatis quis!</p>
    </div>


    
  </div>
  </>
  </div>
  )
}

export default About
