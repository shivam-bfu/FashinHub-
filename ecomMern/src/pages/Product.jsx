import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/productContext'

import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'
const Product = () => {

    const {productId}=useParams()
    
      const {products}= useContext(shopContext)
    const { currency, deliveryCharge, addToCart}=useContext(shopContext)

    const [productData,setproductData]=useState(null)
    const [image,setimage]=useState('')
    const [size,setsize]=useState('')

    const getProduct= async ()=>{
const product = products.find((item)=> item._id == productId)
console.log("product",product);

setimage(product.image[0])
setproductData(product)
}

    useEffect(()=>{
       getProduct()

    },[products, productId])

 
console.log("productdata",productData);

  return ( 
    
    productData ? 
    <>
    {console.log("rendering the page")}
  
    <p className=" w-[80%] border border-gray-300 text-center sm:ml-20  md:ml-40 mb-5 mt-[-19px]  lg:ml-30 xl:ml-44  sm:mt-[-10px]"></p>

    <div className='flex sm:h-[550px]  lg:ml-5 xl:mx-50 sm:mx-20  '>

     
      <div className=' flex' >
      <div className='flex flex-1/4 gap-2 p-2 mt-1  sm:flex-col'>
      {
        productData.image.map((item,index)=>(
          <img onClick={()=>setimage(item)} className='md:w-25 sm:w-70 cursor-pointer' src={item} key={index}/>      
        ))
      }
      </div>


      <div className=' sm:w-[300px] md:w-full flex  overflow-hidden   '>
        <img className=" my-2 sm:h-70 sm:w-[px] md:w-90 lg:h-110  xl:w-97  md:mt-3"src={image}/>
      </div>
      </div>


{/* products detail */}
      <div className=' ml-5 flex  lg:w-130 flex-col'>

      <h1 className='font-medium text-2xl m-2'>{productData.name}</h1>
      <div className='flex m-2 items-center '>
        <img  className='w-3 h-3 '  src={assets.star_icon}/>
        <img  className='w-3 h-3'  src={assets.star_icon}/>
        <img  className='w-3 h-3'  src={assets.star_icon}/>
        <img  className='w-3 h-3'  src={assets.star_icon}/>
        <img  className='w-3 h-3'  src={assets.star_dull_icon}/>
        <p className='ml-2'>(122)</p>
      </div>
      <h1 className='ml-2 font-medium text-3xl'>{currency}{productData.price}</h1>
      <h1 className='font-medium m-3'>{productData.description}</h1>
      <p className='ml-3 font-light'>Select Sizes-</p>
      <div>
      {
        productData.size.map((item,index)=>(
          <button
          onClick={() => setsize(item)}
          className={`cursor-pointer m-2 bg-gray-100 p-1 w-9 h-9 rounded 
            ${item === size ? "border-2 border-orange-400" : "border border-gray-300"}`}
          key={index}
        >
          {item}
        </button>
        
        ))
      }
      </div>
      
        <button onClick={()=>addToCart(productData._id, size)} className='border w-40 ml-2 mt-4 font-medium text-white bg-black p-2 rounded hover:bg-gray-700'>Add To Cart </button>
     
<p className=' border-gray-200 border  m-2 mt-8 w-80  '></p>   
<p className='ml-2 text-gray-500'>100% original product</p>
<p className='ml-2 text-gray-500'>10 days delivery gurranty</p>
<p className='ml-2 text-gray-500'>Cash on delivery </p>

      </div>
    
      

    </div> 
    
    <div className=' p-4 flex'>
       <p className='p-2 ml-5   cursor-pointer  bg-gray-100 w-30 text-center rounded  font-medium  text-gray-500'>Discription</p>
       <p className='p-2 ml-5   cursor-pointer bg-gray-100 w-30 text-center rounded  font-medium  text-gray-500'>Reviews (122)</p>
    </div>

    <div className='border p-8 mx-9 mb-8 rounded border-gray-200 bg-gray-50'>
      <p className='text-gray-600'>{productData.description}</p>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab blanditiis deserunt repudiandae molestiae veritatis praesentium perferendis eos, officia aliquid vel.</p>
    </div>

    {/* related products */}
    <RelatedProduct  category={productData.category} subCategory={productData.subCategory}/>
    </>
    : <div className='flex justify-center text-4xl m-10 font-semibold '> 404 NOT FOUND </div>
  )
}

export default Product
