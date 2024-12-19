"use client"

import { josefin } from "@/fonts/josefin";
import { lato } from "@/fonts/lato";
import Image from "next/image";
import { featureData } from "./featureData";
import { useState } from "react";

export default function Features() {
  const [index, setIndex] = useState(featureData[0])
  const activeIndex = ()=> setIndex(index)

        return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className={`${josefin.className} text-4xl font-extrabold text-black mb-8`}>
          Our Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white p-2 
              rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px] hover:border-b-2 hover:border-b-[#FF9100]"
            >
              <Image src={feature.pic} alt={feature.title} className="w-16 h-16 mb-4" 
              width={160} height={160} />
              <h2 className={`${josefin.className} text-lg font-semibold text-navy`}>{feature.title}</h2>
              <p className={`${lato.className} text-gray-500 mt-2`}>{feature.des}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  