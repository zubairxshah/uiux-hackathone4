"use client";

import { discountData, tags } from "@/app/components/Home/Extras/discountdata";
import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import styles from "@/app/styles/main.module.css";
import { josefin } from "@/fonts/josefin";
import { lato } from "@/fonts/lato";
import Image from "next/image";

const Discount = () => {
  const categories = discountData.map((item) => item.category);
  const [active, setActive] = useState(tags[0].btn);

  return (
    <div className="container mx-auto max-w-[1180px] px-4 ">
    <h1 className={`${josefin.className} text-navy text-4xl 
    font-extrabold text-center`}>Discount Item</h1>

      <div className="hidden lg:block">
        <div className=" flex justify-center gap-12 text-navy  mb-14  ">
          {tags.map((item) => {
            return (
              <div key={item.btn} className="p-4">
                <div
                  className={`${lato.className} text-lg cursor-pointer transition-all 
                  duration-200
                  ${active === item.btn
                    ? "text-pink font-semibold underline" 
                    : "text-navy hover:text-pink hover:font-semibold hover:underline"
                  }`}
                  onClick={() => { setActive(item.btn); }} >
                  {item.btn}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:flex items-center ">
        <div>
          {discountData
            .filter((e) => e.category == active)
            .map((item, index) => {
              return (
                <div key={index} className=" grid  mb-20">
                  <div className="md:flex justify-center">
                    <div className="">
                      <h2 className={`${josefin.className} font-extrabold text-navy md:text-[35px] text-[24px]`}>
                        {item.title}
                      </h2>
                      <h3 className={`${josefin.className} text-pink font-semibold  mb-2 md:mb-6`}>
                        {item.des}
                      </h3>
                      <p className={`${lato.className} text-light_gray1 md:w-[65%]`}>
                        {item.peragraph}
                      </p>

                      <div className={`${lato.className} md:flex`}>
                        <div className=" mt-4  ">
                          <div className="flex items-center text-navy gap-1">
                            <BsCheck2 />
                            <h4 className="text-light_gray1 mr-16 ">
                              {item.list}
                            </h4>
                          </div>
                          <div className="flex items-center text-navy gap-1 mt-3">
                            <BsCheck2 />
                            <h4 className="text-light_gray1">{item.list3}</h4>
                          </div>
                        </div>

                        <div className={`${lato.className} mt-4`}>
                          <div className="flex items-center text-navy gap-1">
                            <BsCheck2 />
                            <h4 className="text-light_gray1">{item.list2}</h4>
                          </div>
                          <div className="flex items-center text-navy gap-1 mt-3">
                            <BsCheck2 />
                            <h4 className="text-light_gray1">{item.list4}</h4>
                          </div>
                        </div>
                      </div>

                      <button className={`${josefin.className} 
                      bg-pink mt-8 px-[25px] py-[10px] text-white`}>{item.btn}</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="items-end justify-center">
  <div className="relative">
    {/* Pink ellipse background */}
    <div className="absolute mt-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-[#FCECF1] w-[430px] h-[430px] rounded-full"
    />
    
    {/* Chair image on top */}
    <div className="relative z-10">
      <Image 
        src="/tortuga.png" 
        alt="tortuga" 
        width={699} 
        height={597} 
        priority
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Discount;
