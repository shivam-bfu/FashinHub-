import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { shopContext } from "../context/productContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, cartItems, currency, deliveryCharge, updateQuantity , navigate} =
    useContext(shopContext);
  const [cartData, setcartData] = useState([]);


  useEffect(() => {
    const tempdata = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {

          tempdata.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }

    setcartData(tempdata);
  }, [cartItems, products]);



  return cartData.length > 0 ? (
    <>
      <div className=" border-t  mx-40">
        <div className="my-7 mx-20 flex items-start">
          <Title text1="YOUR" text2="CART" />
        </div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (products) => products._id === item._id
          );
          
          return (
            <div
            key={index}
            className=" mx-20 my-4 py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center  gap-4"
            >
              <div className="flex items-start gap-5">
                <img
                  className="w-35 h-35   object-cover"
                  src={productData.image[0]}
                  alt={productData.name}
                  />
                <div>
                  <p className="font-medium  text-sm  sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="flex mt-4 ">
                    <p className="  text-sm sm:text-lg ">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="bg-gray-200 w-7 h-7 flex items-center justify-center rounded ml-4 ">
                      {item.size}
                    </p>
                  </div>

                  <p className="bg-slate-100 mt-4 w-28 rounded p-2">
                    Qunatity: {item.quantity}
                  </p>
                </div>
              </div>
              <input type="number" onChange={(e)=>  e.target.value === '' || e.target.value==="0" ? null : updateQuantity(item._id,item.size,Number(e.target.value))} placeholder={item.quantity}  min={1}  className="text-center outline-none border border-gray-300 w-20"  />
              <img  onClick={()=>updateQuantity(item._id,item.size,0)}  className="scale-50 cursor-pointer" src={assets.bin_icon}/>
            </div>
          );
        })}

      
      
      </div>


<div className="flex flex-col  justify-end items-end mx-20 my-5">      
  <CartTotal/>
  <button onClick={()=> navigate("/place-order")} className="border cursor-pointer mr-10 my-2 w-100  py-3 bg-black text-white rounded  ">PROCEED TO CHECKOUT</button>
</div>
  


    


    </>
  ) : (
    <Title text1="CART" text2="EMPTY" />
  );
};

export default Cart;
