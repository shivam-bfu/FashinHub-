import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 max-w-7xl ">
      {/* hero left  */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">


        <div className="text-[#414141] flex flex-col items-center  ">
          <div className="flex gap-3 items-center">
            <p className="w-15 h-[2px] bg-[#414141]"></p>
            <p className="">OUR BESTSELLERS</p>
          </div>

          <h1 className=" prata-regular text-center  py-1.5  text-3xl sm:py-4 lg:py-10 lg:text-5xl  leading relaxed ">LATEST ARRIVALS</h1>

          <div className="flex gap-3 items-center ">
            <p className="mr-5">SHOP NOW</p>
            <p className="w-15 h-[1px] bg-[#414141]"></p>
          </div>

        </div>


      </div>


      {/* hero right */}
      <img src={assets.hero_img} className="w-full sm:w-1/2"/>
    </div>
  );
};

export default Hero;
