import React, { useState } from 'react'
import { useContext } from 'react'
import { shopContext } from '../context/productContext'
import axios from "axios"
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const Login = () => {
  const [state, setstate]=useState('login')

  const {token , settoken , backendUrl,navigate}= useContext(shopContext)

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const onsubmitHandle= async (event)=>{
    event.preventDefault();

    try{

      if(state==="signup")
{
      const response = await axios.post(backendUrl+"/api/user/register",{name,email,password})

      if(response.data.success)
        {
      settoken(response.data.token)
  localStorage.setItem('token',response.data.token)

      navigate("/")
      toast.success(`Welcome, ${name}`)
        }
        else{
          toast.error(response.data.msg)
        }
      
}
else{
  const response = await axios.post(backendUrl+"/api/user/login",{email,password})

  if(response.data.success)
    {
  settoken(response.data.token)
  localStorage.setItem('token',response.data.token)
  navigate("/")
  toast.success(`Glad To Have You Back`)
    }
    else{
      toast.error(response.data.msg)
    }

}
      
    }catch(err){

      toast.error(`Something Went Wrong ${err}`)

    }


  }
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      navigate('/')
      toast.success("Already Logged In Logout To try diff Account")
    }

  },[])
  return (
      <>
      <form  onSubmit={onsubmitHandle}   className=' flex  flex-col justify-center items-center my-30'>
        <div className='flex items-center justify-center ml-15 my-3'>
        <p className='prata-regular text-3xl'>{state==="login"? "LogIn": "SignUp"}</p>
        <p className='border w-10 h-0 ml-3'></p>
        </div>
        { state==="login"? 

"":
<input onChange={(e)=>{setname(e.target.value)}} className='border w-90 m-2 h-10 p-2 ' type="text"  id="name" required placeholder='Name'/>



}
        <input  onChange={(e)=>setemail(e.target.value)} className='border w-90 m-2 h-10 p-2 ' type="email"       id="email" required placeholder='Email'/>
        <input  onChange={(e)=>setpassword(e.target.value)} className='border w-90 m-2 h-10 p-2 ' type="password" id="password"  required placeholder='Password'/>


       
        <div className='flex justify-between mt-[-6px] text-sm text-gray-500 w-90'>
        <p>{state==="login"? "Forget your password?": ""}</p>
        <p  className="cursor-pointer" onClick={()=>setstate(state==="login"? "signup":"login")}>{state==="login"? "signUp": "Already have a account? LogIn"}</p>
        </div>
        <button className='border cursor-pointer w-25 mt-5 py-2 bg-black rounded text-white' type="submit">{state==="login"? "LogIn": "SignUp"}</button>
      </form>
      
      
      
      
      </>
  )
}

export default Login
