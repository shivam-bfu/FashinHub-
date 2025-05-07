import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import axios from "axios"

export const shopContext =createContext();

const shopContextProvider = ({children}) => {
    const currency='₹';
    const deliveryCharge='10';
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [cartItems,setcartItems]=useState({})
    const navigate= useNavigate()
    const [products,setproducts]=useState([])
    
    const [token,settoken]=useState("")



    const addToCart= async (itemId, size)=>{
        let cartData= structuredClone(cartItems)

        if(!size)
        {
            toast.error("Please select size")
            return;

            
        }
        
        if(cartData[itemId])
            {
                if(cartData[itemId][size])
                    {
                        cartData[itemId][size] +=1
                    }
                    else{
                        cartData[itemId][size]=1
                    }
                }
                else{
                    cartData[itemId]={}
                    cartData[itemId][size]=1
                }
           

                setcartItems(cartData)

                if(token)
                {
                    try{
                     const response=   await axios.post(backendUrl+"/api/cart/addtocart",{itemId,size},{headers:{token}})
                     console.log("this is from the add to cart",response);
                     

                    }
                    catch(err)
                    {
                    toast.error("Something  Went Wrong")
                    }
                }
                
                
            }


            const updateQuantity= async (items,size,quantity)=>{

                const cartData= structuredClone(cartItems)
                cartData[items][size]=quantity
                setcartItems(cartData)
               
                

                if(token)
                    {
                      
                     
                        try{
                         const response=   await axios.post(backendUrl+"/api/cart/update-cart",{items,size,quantity},{headers:{token}})
                         console.log("response from here",response);
                       
                         
    
                        }
                        catch(err)
                        {
                        toast.error("Something  Went Wrong")
                        console.log("thisis the errr",err.message)
                        }
                    }
            }






            const totalItems=()=>{
                let totalCount=0
                for(let item in cartItems)
                {
                    for(let size in cartItems[item])
                    {
                        totalCount+=cartItems[item][size]
                    }
                }
                return totalCount;
            }


  const itemTotal=()=>{
    let carttotal=0
    for( let items in cartItems)


    {    
        let itemInfo= products.find((product)=> product._id===items)

        

        for(let item in cartItems[items])
        {
            try{

                if(cartItems[items][item]>0)
                {
                    carttotal += itemInfo.price * cartItems[items][item]
                }

            }
            catch(e){}
        }
    }
    return carttotal;
  }


    const getProductData=async ()=>{

        try{
            const response = await axios.get(backendUrl+"/api/product/list-products")
            if(response.data.success)
            {

               
                setproducts(response.data.products)
                
            }
            else{
                toast.error("Something Went Wrong 505 Error")
            }
        }
        catch(err)
        {
                console.log(err);
                
        }
    }

            const value={
             products,
             currency,
             deliveryCharge,
             cartItems,addToCart, totalItems, updateQuantity, itemTotal, navigate, backendUrl, settoken, token 
            }

            useEffect(()=>{
                getProductData()
            },[])


            const getuserCart=async(token)=>{
                try{
                    const response = await axios.post(backendUrl+"/api/cart/get-the-cart",{},{headers:{token}})
                    console.log("this is the cart response",response);
                    
                    if(response.data.success)
                    {
                        setcartItems(response.data.cart)
                    }
                  

                }
                catch(err){
                    toast.error(err.message)
                          }
            }


useEffect(()=>{

},[cartItems])

useEffect(()=>{
    if(!token && localStorage.getItem("token"))
    {
        settoken(localStorage.getItem('token'))
        getuserCart(localStorage.getItem("token"))
    }

},[])

 return(
    <shopContext.Provider value={value}>
        {children}
    </shopContext.Provider>
 )
}

export default shopContextProvider;