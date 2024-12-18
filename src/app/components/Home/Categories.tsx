"use client"

import React from "react";
import { useState } from "react";
import { categoryData } from "@/app/components/Home/Extras/categoriesdata";
import Image from "next/image";
import { josefin } from "@/fonts/josefin";

const TopCategory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 lg:mt-32 mt-12 py-6">
      <h1
        className={`${josefin.className} text-navy text-center 
        md:mb-16 mb-12 text-4xl font-extrabold`}
      >
        Top Categories
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                    gap-8 2xl:gap-12 justify-items-center">
        {categoryData[currentSlide].map((item) => {
          return (
            <div key={item.pic} className="flex flex-col items-center">
              <div className="relative group">
                {/* Pink half moon background */}
                <div
                  className="absolute z-10 top-[118px] left-[100px] -translate-x-1/2 -translate-y-1/2
                            2xl:w-[269px] 2xl:h-[269px] w-[220px] h-[220px] rounded-full invisible 
                            bg-gradient-to-r from-purple-400 via-purple-500 to-transparent 
                            group-hover:visible transition-all duration-300"
                />

                {/* Main image container */}
                <div
                  className="relative z-20 flex items-center justify-center bg-hex shadow-primary 
                            2xl:h-[269px] h-[220px] w-[220px] 2xl:w-[269px] rounded-full
                            transition-transform duration-300 hover:scale-105"
                >
                  <div className="absolute bottom-5 invisible group-hover:visible
                                transition-all duration-300">
                    <button className={`${josefin.className} text-[10px] text-center bg-lightGreen 
                                    px-6 py-2 rounded hover:bg-opacity-90 text-white`}>
                      View Shop
                    </button>
                  </div>
                  <Image
                    src={item.pic}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
                    className="object-cover w-[150px] h-[150px]"
                  />
                </div>
              </div>

              <div className="text-center mt-6 text-navy">
                <h3 className={`${josefin.className} font-medium text-lg mb-1`}>
                  {item.title}
                </h3>
                <h4 className={`${josefin.className} font-normal text-base`}>
                  {item.price}
                </h4>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between gap-3 col-span-4 mt-4 py-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index
                ? 'bg-pink'
                : 'border border-pink'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default TopCategory;
