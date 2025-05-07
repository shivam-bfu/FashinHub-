import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/productContext'
import ProductItem from './ProductItem'
import Title from './Title'
const RelatedProduct = ({category,subCategory}) => {

    const {products}=useContext(shopContext)

    const [realtedProducts, setrelatedProducts]=useState([])

    const getRelatedProducts=()=>{
        const filteredProducts=products.filter((item)=>item.category===category && item.subCategory===subCategory)
        const newProducts= filteredProducts.slice(0,5)
        setrelatedProducts(newProducts)
    }
    useEffect(()=>{
        getRelatedProducts()

    },[products,category,subCategory])

  return (
    <div className='my-10 '>
    <div className='text-center m-10'>
      <Title text1={"RELATED"} text2={"PRODUCTS"}/>
      <p className='text-center  text:xs sm:text:sm text-gray-500 md:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, natus?</p>
      </div>

        <div className='  px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6 '>
        {realtedProducts.map((item, index) => (
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

export default RelatedProduct
