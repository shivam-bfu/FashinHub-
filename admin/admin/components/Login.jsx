import React, { useState } from 'react'
import axios from 'axios'
import { backEndUrl } from '../src/App'
import { toast } from 'react-toastify'
const Login = ({settoken}) => {

  const[email, setemail]=useState('')
  const [password,setpassword]=useState('')

  const onSubmitHandler= async (e)=>{
    try{
      e.preventDefault();
     
      
      const response= await axios.post(backEndUrl + '/api/user/admin',{email,password})

        console.log(response);
        
        if(response.data.success)
        {
            settoken(response.data.token)
        }
       else{
        toast.error("Email or Password Wrong")
       }


    }catch(err){

      toast.error(`Error ${err}`)

    }


  }


  return (
    <>
   <div className='flex flex-col justify-center items-center  bg-gray-200  w-full min-h-screen border'>


      <form  onSubmit={onSubmitHandler} className='flex flex-col border border-gray-400  bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300 items-center p-5  '>
        <p className='font-sans text-3xl mb-10 font-semibold prata-regular'>ADMIN LOGIN</p>
        <input  onChange={(e)=>{ setemail(e.target.value)}} value={email}  className='border h-10  w-70  md:w-90 border-gray-400 rounded  outline-none px-2 m-3' type="email"      placeholder='your@email.com' required/>
        <input  onChange={(e)=>{ setpassword(e.target.value)}} value={password}  className='border h-10  w-70  md:w-90 border-gray-400 rounded  outline-none px-2  m-3' type="password"  placeholder='Enter Your password' required/>
        <button className="border m-2 text-xl w-40 rounded cursor-pointer bg-black text-white p-2 px-5" type='submit' >Login</button>
      </form>


    </div>
    </>
  )
}

export default Login
