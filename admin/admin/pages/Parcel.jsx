import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backEndUrl } from '../src/App'
import { toast } from 'react-toastify'

const Parcel = ({token}) => {

  const [list, setlist]=useState([])
  const currency="$"
  const fetchlist = async ()=>{
    try{

    const response= await axios.get(backEndUrl+"/api/product/list-products")

    if(response.data.success)
    {
      setlist(response.data.products)
       
    }
    else
    {
      toast.error("Some Went Wrong")
    }

  }


    catch(err)
    {
      toast.error("Can't Find Products Try Again Later")

    }
  } 


  const deleteItem= async(productId)=>{

    const response= await axios.post(backEndUrl+"/api/product/delete-product",{productId},{headers:{token}})

    if(response.data.success)
    {
        await fetchlist()
        toast.success("Product Removed")
    }

    else{
      console.log(response);
      toast.error(`error ${response.data.msg}`)
      
    }
    
    

  }

  useEffect(()=>{
    fetchlist()
  },[])


  return (
  <>
  <div className=' w-full my-5'>
  
    <p className='text-2xl font-semibold  '>ALL PRODUCTS</p>
  

  <div className='flex flex-col gap-2  '>

  <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 border-gray-100  text-sm'>
  <b>Images</b>
  <b>Name</b>
  <b>Category</b>
  <b>Price</b>
  <b>Action</b>
</div>




    {
      list.map((item,index)=>(
        <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-4 px-2 border text-sm border-gray-300 text-gray-500  '>
            
          <img className='w-12' src={item.image[0]}/>
          <p>{item.name}</p>

        <p>{item.category}</p>
        <p>{currency}{item.price}</p>
        <p onClick={()=>deleteItem(item._id)} className='text-lg ml-4 cursor-pointer '>X</p>
       

</div>
      )

      
      )
    }

  </div>






  </div>
  
  </>
  )
}

export default Parcel
