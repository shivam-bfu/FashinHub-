import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { shopContext } from '../context/productContext'

const PlaceOrder = () => {


  const [method, setmethod]= useState('cod')
  const {navigate}= useContext(shopContext)
  
  return (
    <div className='flex justify-between  items-center  mx-40 my-10'>
      <div className=''>    
        <div className='flex ml-2'> 
        <Title text1="DELIVERY"  text2="INFORMATION"/>
        </div> 
      
    {/* left side input */}
      <div className=' flex my-4'>
        <input className=' p-2 border m-2 border-gray-400 h-8' type="text" placeholder='First name'/>
        <input className=' p-2 border m-2 border-gray-400 h-8' type="text" placeholder='Last name'/>
      </div>


      <div className='flex my-4 px-2'>
        <input className=' p-2 border border-gray-400 w-full my-2 h-8' placeholder='Email address' type="email"/>
      </div>

      <div className='flex my-4  px-2'>
        <input className=' p-2 border  border-gray-400 w-full my-2 h-8' placeholder='Street' type="text"/>
      </div>


      <div className=' flex my-4'>
        <input className=' p-2 border border-gray-400 m-2 h-8' type="text" placeholder='City'/>
        <input className=' p-2 border border-gray-400 m-2 h-8' type="text" placeholder='State'/>
      </div>

      <div className=' flex my-4 '>
        <input className=' p-2 border border-gray-400 m-2 h-8' type="text" placeholder='Zipcode'/>
        <input className=' p-2 border border-gray-400 m-2 h-8' type="text" placeholder='Country'/>
      </div>

      <div className='flex my-4  px-2'>
        <input className=' p-2 border border-gray-400 w-full my-2 h-8' placeholder='Phone' type="number"/>
      </div>







      </div>

    <div className=''>
    <CartTotal/>
    <div className='flex'>

    <div className='flex justify-center items-center my-1 ml-2'>
      <p className='text-[23px] text-xl sm:text-2xl md:text-xl  text-gray-500' > PLACE <span className='text-black'>ORDER</span> </p>
      <p className='w-10 h-[2px] bg-black ml-2'></p>
    </div>
    </div>

    <div className='flex my-5'>
      <button  onClick={()=> setmethod("stripe")} className={`border border-gray-200 cursor-pointer  rounded w-20         ${method==="stripe"? 'border-green-600 border-2': ""}      `}><img className='scale-60' src={assets.stripe_logo}/></button>
      <button  onClick={()=> setmethod("razorpay")} className={`border border-gray-200 cursor-pointer rounded mx-4 w-30    ${method==="razorpay"? 'border-green-600 border-2': ""}      `}><img className='scale-90' src={assets.razorpay_logo}/></button>
      <button  onClick={()=> setmethod("cod")} className={`border border-gray-300 cursor-pointer rounded w-50 font-medium  ${method==="cod"? 'border-green-600 border-2': ""}     `}>CASH OF DELIVERY</button>

    </div>

    <div className="flex flex-col  justify-end items-end mx-20 my-5">      

  <button onClick={()=> navigate("/orders")} className="border cursor-pointer mr-10 my-2 w-70  py-2 bg-black text-white rounded  ">PROCEED TO CHECKOUT</button>
  </div>
    </div>


    </div>
  )
}

export default PlaceOrder
