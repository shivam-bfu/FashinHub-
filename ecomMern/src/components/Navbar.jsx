import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { shopContext } from "../context/productContext";
const Navbar = () => {
  const [Visible, setVisible] = useState(false);
  const {totalItems, token , navigate, settoken}=useContext(shopContext)
  const totalCartItems=totalItems()

  const Logout=()=>{

    localStorage.removeItem('token')
    settoken('')
    navigate('/login')
    
  }


  return (
    <>
      <div className=" w-full  py-5 mb-5  ">
        {/* wrapper */}
        <div className=" w-full  justify-between px-6 flex sm:justify-around items-center font-medium">
          {/* logo */}
          <Link to="/">
         
            <img className="w-36" src={assets.logo} />
          </Link>
          {/* pages NavLinks */}
          <ul className="hidden sm:flex text-sm text-gray-700 gap-5 ">
            <NavLink
              to="/"
              className="flex flex-col items-center gap-1 hover:text-black"
            >
              <p>HOME</p>
              <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
            </NavLink>

            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1  hover:text-black"
            >
              <p>COLLECTION</p>
              <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
            </NavLink>

            <NavLink
              to="about"
              className="flex flex-col items-center gap-1  hover:text-black"
            >
              <p>ABOUT</p>
              <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
            </NavLink>

            <NavLink
              to="/contact"
              className="flex flex-col items-center gap-1  hover:text-black"
            >
              <p>CONTACT</p>
              <hr className=" hidden w-2/4 border-none h-[1.5px] bg-gray-700" />
            </NavLink>
          </ul>
          <div className="flex items-center justify-center  gap-5 ">
            <img className="size-5 cursor-pointer" src={assets.search_icon} />

            <div className="group relative">
              
              
              <Link to="/login">
             <img 
                className="size-5 cursor-pointer"
                src={assets.profile_icon}
              />
           </Link>
           {console.log("token",token)}
            { token   &&   <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 p-4 bg-slate-100 text-slate-700">
                  <p  onClick={()=>{ !token? navigate('/login'):null }}  className="cursor-pointer hover:text-black">My Profile</p>
                  <p className="cursor-pointer hover:text-black">Orders</p>
                  <p  onClick={()=>{ Logout()}} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div> }
            </div>
            <Link to="/cart" className="relative">
              <img className="size-5" src={assets.cart_icon} />
              <p className=" absolute right-[-5px] top-[11px] bg-black text-white w-5 h-5  text-center  leading-4  rounded-full aspect-square text-[10px] ">
                {totalCartItems > 0 ? totalCartItems : 0}
              </p>
            </Link>
            <img
              onClick={() => setVisible(true)}
              className="size-5 sm:hidden"
              src={assets.menu_icon}
            />
      <div className={` flex flex-col absolute top-0 bottom-0  right-0 transition-all  overflow-hidden  bg-white ${Visible? 'w-60':'w-0'} `} >
      <div  onClick={()=>{setVisible(false)}}  className=" flex items-center gap-2 cursor-pointer">     
      <img className="size-3 rotate-180 " src={assets.dropdown_icon}/>
      <p >  Back</p>
      </div>
{/* links  */}
        <ul className="flex flex-col mt-4">     
        <NavLink to="/" onClick={()=>{setVisible(false)}} className="mt-2 ml-6 text-gray-400">HOME</NavLink>
        <hr className="mt-2 opacity-30"></hr>
        <NavLink to="/collection" onClick={()=>{setVisible(false)}} className="mt-2 ml-6  text-gray-400">COLLECTION</NavLink>
        <hr className="mt-2 opacity-30"></hr>
        <NavLink to="/about" onClick={()=>{setVisible(false)}} className="mt-2 ml-6  text-gray-400">ABOUT</NavLink>
        <hr className="mt-2 opacity-30 "></hr>
        <NavLink to="/contact" onClick={()=>{setVisible(false)}} className="mt-2 ml-6  text-gray-400">CONTACT</NavLink>
        <hr className="mt-2 opacity-30"></hr>
        </ul>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
