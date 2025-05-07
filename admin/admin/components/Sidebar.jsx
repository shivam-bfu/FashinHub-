import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../src/assets/assets'

const Sidebar = () => {
  return (
    <>
    
    <div className='flex flex-col border mx-10 w-70 border-gray-300 md:h-screen my-5'>
        <NavLink to="/add">

        <div className='border flex  border-gray-300   hover:bg-gray-400 hover:text-white rounded items-center m-2'>
        <img  className='w-[20px] m-4' src={assets.add_icon} />
        <p>Add Products</p>
        </div>
        </NavLink>


        <NavLink to="/parcel">

        <div className='border flex  border-gray-300   hover:bg-gray-400 hover:text-white rounded items-center m-2'>
        <img  className='w-[20px] m-4' src={assets.parcel_icon} />
        <p  className=''>List Items</p>
        </div>

        </NavLink>


        <NavLink to="/orders">
        <div className='border flex  border-gray-300   hover:bg-gray-400 hover:text-white rounded items-center m-2'>
        <img  className='w-[20px] m-4' src={assets.order_icon} />
        <p>Orders</p>
        </div>
            
        </NavLink>

    </div>

    </>
  )
}

export default Sidebar
