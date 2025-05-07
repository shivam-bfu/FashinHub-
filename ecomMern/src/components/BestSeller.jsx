import React, { useContext, useEffect,useState } from 'react'
import Title from './Title'
import { shopContext } from '../context/productContext'
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(shopContext)
    
    
    const [bestSeller,setbestSeller]=useState([])

    useEffect(
    ()=>{
        const bestSellerProduct=products.filter((item)=>item.bestseller);
        setbestSeller(bestSellerProduct.slice(0,5))
    },[products]
    )
    console.log(bestSeller)
  return (
    <div className='my-10 '>
    <div className='text-center m-10'>
      <Title text1={"BEST"} text2={"SELLER"}/>
      <p className='text-center  text:xs sm:text:sm text-gray-500 md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, natus?</p>
      </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
        {bestSeller.map((item, index) => (
  <ProductItem 
    key={index} 
    id={item._id} 
    image={item.image} 
    name={item.name} 
    price={item.price} 
  />
))}

        </div>
    </div>
  )
}

export default BestSeller
