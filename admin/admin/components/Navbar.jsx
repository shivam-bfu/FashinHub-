import React from 'react'
import {assets} from "../src/assets/assets"
import { NavLink } from 'react-router-dom'

const Navbar = ({settoken}) => {
  return (
    <>

        <div className='flex  items-center justify-between my-2 border-b border-gray-200'>
        <div className=' md:mx-10  mx-5'>
            <img className='md:w-[200px] w-[150px]' src={assets.logo}/>
        </div>

        <NavLink  to="/logout">
        <p onClick={()=>settoken('')}  className=' cursor-pointer mx-5 md:mx-10 bg-gray-600 text-white md:py-3 py-1 text-center w-20 md:w-30 rounded-2xl '>LogOut</p>
        </NavLink>
        </div>

    </>
  )
}

export default Navbar
