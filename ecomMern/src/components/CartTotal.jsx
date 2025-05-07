import React, { useContext } from 'react'
import { shopContext } from '../context/productContext'
import Title from './Title'

const CartTotal = () => {

const {itemTotal , currency , deliveryCharge}= useContext(shopContext)

 


  return (
    <div className='bg-gray-50 h-50 w-120 m-2 '>
        <Title text1='CART' text2="TOTAL"/> 

        <div className='flex mt-5 mx-2 justify-between items-center'>        
        <p className=''>SubTotal: </p>
        <p className='font-medium'>{currency}{itemTotal()}</p>
        </div>

        <hr className='border-gray-300'></hr>


        <div className='m-2 flex justify-between'>
        <p>Shipping: </p>
        <p className=''> {itemTotal() === 0 ? `${currency}0` : `${currency}${deliveryCharge}`}
        </p>
        </div>
        <hr className='border-gray-300'></hr>


        <div className=' mx-2 my-2 flex  justify-between'>
        <p className='text-lg font-medium'>Total:</p>
        <p className='font-medium text-lg'>{  itemTotal() === 0 ? `${currency}0` :         `${currency}${Number(itemTotal())+ Number(deliveryCharge)}`}</p>
        </div>
    </div>
  )
}

export default CartTotal
