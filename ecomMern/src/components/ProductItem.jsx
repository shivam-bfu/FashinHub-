import React, { useContext } from 'react'
import { shopContext } from '../context/productContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(shopContext)
  return (
    <Link to={`/product/${id}`} className='cursor-pointer text-gray-700'>

        <div className='overflow-hidden '>
<img className='hover:scale-110  transition ease-in-out' src={image[0]}/>
        </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-m'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
