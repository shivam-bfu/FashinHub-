import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddPage from '../pages/AddPage'
import OrderPage from '../pages/OrderPage'
import Parcel from '../pages/Parcel'
import Login from '../components/Login'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

export  const backEndUrl=import.meta.env.VITE_BACKEND_URL

const App = () => {

const [token, settoken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):"")

useEffect(()=>{

   localStorage.setItem('token',token)

},[token])

  return (
    
   <>
      <ToastContainer />
   { token===""? <Login  settoken={settoken}   /> 
   :
   <>
   <Navbar settoken={settoken} />

   <div className='flex flex-col  sm:flex-row'>   
    
    <Sidebar/>
   <Routes>

    <Route path="/add" element={<AddPage       token={token}    />}/>
    <Route path="/orders" element={<OrderPage  token={token}      />}/>
    <Route path="/parcel" element={<Parcel     token={token}   />}/>
   </Routes>
   </div>
   </>
} 
   </>

  )
}

export default App
