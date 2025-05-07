import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { shopContext } from "../context/productContext";
import { useContext } from "react";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const [filter, setfilter] = useState(false);
  const {products}= useContext(shopContext)
const [filterProducts, setfilterProducts]=useState([])


const [category,setcategory]=useState([])
const [Subcategory,setSubcategory]=useState([])

const [sortType,setsortType]=useState("relavent")
const toogleCategory=(e)=>{
  const value=e.target.value
  if(category.includes(value))
  {
    setcategory(category.filter((item)=>item!==value))
  }
  else{
    setcategory((prev)=>[...prev,value])
  }
}

const toogleSubCategory=(e)=>{
  const value= e.target.value
  if(Subcategory.includes(value))
  {
    setSubcategory(Subcategory.filter((item)=>item!==value))
  }
  else{
    setSubcategory((prev)=>[...prev,value])
  }
}




useEffect(() => {
  let newProduct = products.slice();

  if (category.length > 0) {
    newProduct = newProduct.filter((item) => category.includes(item.category));
  }

  if (Subcategory.length > 0) {
    newProduct = newProduct.filter((item) => Subcategory.includes(item.subCategory));
  }

  if (sortType === "low-high") {
    newProduct = newProduct.sort((a, b) => a.price - b.price);
  } else if (sortType === "high-low") {
    newProduct = newProduct.sort((a, b) => b.price - a.price);
  } else {
    newProduct = newProduct.sort((a, b) => a._id - b._id);
  }

  setfilterProducts(newProduct);
}, [category, Subcategory, sortType, products]);


  return (
    <>
    <p className=" w-[80%] border border-gray-300 text-center ml-10 sm:ml-40 mb-5 mt-[-19px]   sm:mt-[-10px]"></p>
    <div className="flex flex-col justify-between sm:flex-row px-5 ">
      <div className=" w-1/4 p-5  flex flex-col items-center">
        <p 
          onClick={()=> setfilter(!filter)}
        
        className="text-2xl  ml-4 text-center flex">
          FILTERS
          <img
          onClick={ ()=> setfilter(!filter)}
            src={assets.dropdown_icon}
            className={`scale-50 ml-2 sm:hidden ${filter ? 'rotate-90':""} `}
          />
        </p>

        <div
          className={` border ml-35 border-gray-400 mt-5 h-40 w-50 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className="ml-5    text-l  mb-3 font-semibold">CATEGORY</p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Men"}
              onChange={toogleCategory}
            />
            Men
          </p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Women"}
              onChange={toogleCategory}

            />
            Women
          </p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Kids"}
              onChange={toogleCategory}

            />
            Kid
          </p>
        </div>

        <div
          className={` border ml-35 border-gray-400 mt-5 h-40 w-50 ${
            filter ? "" : "hidden"
          } sm:block`}
        >
          <p className="ml-5 text-l  mb-3 font-semibold">TYPE</p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Topwear"}
              onChange={toogleSubCategory}

            />
            TopWear
          </p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Bottomwear"}
              onChange={toogleSubCategory}

            />
            BottomWear
          </p>
          <p className="ml-5  text-gray-500 ">
            <input
              className="mr-4 accent-black"
              type="checkbox"
              value={"Winterwear"}
              onChange={toogleSubCategory}

            />
            WinterWear
          </p>
        </div>
      </div>

    
            <div className="sm:flex-1 sm:ml-25   p-2 text-lg">
              <div className="flex flex-col sm:flex-row  justify-between p:2">
                <Title  text1={"ALL"} text2={"COLLECTIONS"}/>

                <select onChange={(e)=>setsortType(e.target.value)} className="border p-3  sm:w-40  sm:h-10  sm:ml-9 sm:p-0 sm:text-sm  outline:none border-gray-500 text-gray-600   px-2 ">
                  <option  value={"relavent"}>Sort: Relavent</option>
                  <option  value={"low-high"}>Sort: Low to High</option>
                  <option  value={"high-low"}>Sort: High to low</option>
                </select>
              </div>

         <div className="grid  mt-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

            
                 {filterProducts.map((item, index) => (
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


    </div>
    </>
  );
};

export default Collection;
