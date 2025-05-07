import React, { useState } from 'react'
import { assets } from '../src/assets/assets'
import axios from 'axios'
import { backEndUrl } from '../src/App'
import { toast } from 'react-toastify'

const AddPage = ({token}) => {


  const [image1,setimage1]=useState(false)
  const [image2,setimage2]=useState(false)
  const [image3,setimage3]=useState(false)
  const [image4,setimage4]=useState(false)
  const [name,setname]=useState("");
  const [description, setdescription]=useState("")
  const [category,setcategory]=useState("Men")
  const [subCategory,setsubCategory]=useState("Topwear")
  const [price,setprice]=useState("")
  const [size,setsize]=useState([])
  const [bestseller,setbestseller]=useState(false)

  const onSubmithandler= async (e)=>{
    e.preventDefault()
    try{
      if(size.length===0)
      {
        return toast.error('Select Size')
      }
      const formdata=new FormData();
      formdata.append("name",name)
      formdata.append("description",description)
      formdata.append("category",category)
      formdata.append("subCategory", subCategory)
      formdata.append("price",price)
      formdata.append("size",JSON.stringify(size))
      formdata.append("bestseller",bestseller)

      image1 && formdata.append("image1",image1)
      image2 && formdata.append("image2",image2)
      image3 && formdata.append("image3",image3)
      image4 && formdata.append("image4",image4)


      const response =await axios.post(backEndUrl+"/api/product/create-product",formdata,{headers:{token}})
      
      if(response.data.success)
      {
        toast.success("Product Uploaded")
        setdescription('')
        setname('')
        setbestseller(false)
        setsize([])
        setimage1(false)
        setimage2(false)
        setimage3(false)
        setimage4(false)
        setcategory('Men')
        setsubCategory('Topwear')
      }
      else{
        toast.error("Some Thing Went Wrong", response.data.msg)
      }

    }
    catch(err)
    {
      toast.error("Some Thing Went Wrong",err) 

    }

  }



  return (
   <form  onSubmit={onSubmithandler}  className='my-5'>
    <div >
      <p className='text-lg m-2 '>Upload Image</p>
    </div>
    <div className='flex '>
      <label>
        <img  className="m-2 cursor-pointer w-20" src={ image1 ? URL.createObjectURL(image1):assets.upload_area} />
        <input   onChange={(e)=> setimage1(e.target.files[0])} id="image1" className='hidden ' required type='file'/>
      </label>
      <label>
        <img  className="m-2 cursor-pointer w-20" src={ image2 ? URL.createObjectURL(image2):assets.upload_area} />
        <input className='hidden '  onChange={(e)=> setimage2(e.target.files[0])} id="image2" type='file'/>
      </label>
      <label>
        <img  className="m-2 cursor-pointer w-20 " src={ image3 ? URL.createObjectURL(image3):assets.upload_area} />
        <input className='hidden '  onChange={(e)=> setimage3(e.target.files[0])} type='file'/>
      </label>
      <label>
        <img  className="m-2 cursor-pointer w-20"  src={ image4 ? URL.createObjectURL(image4):assets.upload_area} />
        <input className='hidden ' onChange={(e)=> setimage4(e.target.files[0])} type='file'/>
      </label>
    </div>


    <div className='m-2'>
      <p>Product Name</p>
      <label className="">
      <input onChange={(e)=> setname(e.target.value)} value={name} className='  my-2 w-full border outline-none border-gray-400 rounded h-8 p-2 ' required type="text" placeholder='name' />
      </label>
    </div>
    <div className='m-2'>
      <p>Product Name</p>
      
      <textarea onChange={(e)=> setdescription(e.target.value)} value={description}className=' my-2 w-full border outline-none border-gray-400 rounded h-20 p-2 ' required type="text" placeholder='Description' />
    </div>


    <div className='m-2 sm:flex  '>
      <div className='flex'>
      <div className=''>
      <p className='my-2'>Category</p>
      <select onChange={(e)=> setcategory(e.target.value)}  className='border px-3 py-1 rounded border-gray-400 text-gray-600 outline-none'>
        <option value="Men">Men</option>
        <option value="Women"  >Women</option>
        <option value="Kids" >Kids</option>
      </select>
      </div>

      <div className='mx-10'>

      <p className='my-2'>Sub-Category</p>
      <select onChange={(e)=> setsubCategory(e.target.value)} className='border px-3 py-1 rounded border-gray-400 text-gray-600 outline-none'>
        <option value="Topwear">Topwear</option>
        <option value="Bottomwear"   >BottomWear</option>
        <option value="Winterwear"   >Winterwear</option>
      </select>
      </div>
      </div>

      <div className=''>
        <p className='my-2'>Price</p>
        <input onChange={(e)=> setprice(e.target.value)}  value={price}className='border outline-none sm:w-40 w-70 h-8  border-gray-400 rounded' required type="number" placeholder='price'/>

      </div>
    </div>

    <div className='m-2'>

    <p>Sizes</p>
    <div className='flex'>
      <p onClick={()=>setsize( prev => prev.includes("S")? prev.filter(items=> items!=="S"): [...prev,"S"]) }   className={` ${size.includes("S")? "bg-gray-300": ""}   m-2   border-gray-400  cursor-pointer border p-1 w-8 text-center rounded font-semibold`}>S</p>
      <p onClick={()=>setsize( prev => prev.includes("M")? prev.filter(items=> items!=="M"): [...prev,"M"]) }         className={` ${size.includes("M")? "bg-gray-300": ""}   border-gray-400  cursor-pointer m-2   border p-1 w-8 text-center rounded font-semibold`} >M</p>
      <p onClick={()=>setsize( prev => prev.includes("L")? prev.filter(items=> items!=="L"): [...prev,"L"]) }         className={` ${size.includes("L")? "bg-gray-300": ""}   border-gray-400  cursor-pointer m-2   border p-1 w-8 text-center rounded font-semibold`} >L</p>
      <p onClick={()=>setsize( prev => prev.includes("XL")? prev.filter(items=> items!=="XL"): [...prev,"XL"]) }      className={` ${size.includes("XL")? "bg-gray-300": ""}  border-gray-400  cursor-pointer  m-2   border p-1 w-8 text-center rounded font-semibold`} >XL</p>
      <p onClick={()=>setsize( prev => prev.includes("XXL")? prev.filter(items=> items!=="XXL"): [...prev,"XXL"])}    className={` ${size.includes("XXL")? "bg-gray-300": ""} border-gray-400  cursor-pointer   m-2   border p-1 w-9 text-center rounded font-semibold`} >XXL</p>
    </div>
    </div>

    <div className='flex m-4 my-4'>
      <input  onChange={()=>setbestseller( bestseller ? false : true)}  type="checkbox" className='border'/>
      <p className='mx-2 text-lg'>BestSeller</p>
    </div>

    <button className='border px-5 p-2 w-50 text-center rounded bg-black text-white cursor-pointer hover:bg-gray-600' type="submit">ADD</button>

   </form>
  )
}

export default AddPage
