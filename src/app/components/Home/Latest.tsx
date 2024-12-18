"use client";

import { josefin } from "@/fonts/josefin";
import React, { useState } from "react";
import latestData from "./Extras/latestdata";
import Image from "next/image";
import { lato } from "@/fonts/lato";
import CartMenuLatest from "./Extras/CartMenuLatest";

const Latest = () => {
    const tags = [
      { btn: "New Arrival" },
      { btn: "Best Seller" },
      { btn: "Featured" },
      { btn: "Special Offer" },
    ];
  
    const [active, setActive] = useState(tags[0].btn);
  
    return (
      <section className="container mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Title */}
        <h1 className={`${josefin.className} text-4xl font-bold text-center mb-12 text-navy`}>
          Latest Products
        </h1>
  
        {/* Tags/Filters */}
        <div className="hidden lg:block mb-12">
          <div className="flex justify-center gap-12">
            {tags.map((item) => (
              <div
                key={item.btn}
                className={`${lato.className} text-lg cursor-pointer transition-all duration-200
                  ${active === item.btn 
                    ? "text-pink font-semibold underline" 
                    : "text-navy hover:text-pink hover:font-semibold hover:underline"
                  }`}
                onClick={() => setActive(item.btn)}
              >
                {item.btn}
              </div>
            ))}
          </div>
        </div>
  
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestData
            .filter((e) => e.category == active)
            .slice(0, 6)
            .map((item, index) => (
              <div key={index} className="group">
                {/* Product Image Container */}
                <div className="bg-hex h-[360px] flex items-center justify-center relative mb-6 group-hover:bg-white transition-colors">
                  {/* Sale Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="relative">
                      <Image
                        src="/vectors/vector-sale.svg"
                        alt="sale"
                        width={85}
                        height={57}
                      />
                      <p className={`
                        ${josefin.className} 
                        absolute 
                        top-[22px]
                        left-[25px]
                        text-sm 
                        text-white 
                        rotate-[-18.12deg]
                        whitespace-nowrap
                        transform-gpu
                      `}>
                        Sale
                      </p>
                    </div>
                  </div>
  
                  {/* Cart Menu */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CartMenuLatest />
                  </div>
  
                  {/* Product Image */}
                  <Image
                    src={item.url}
                    width={item.w}
                    height={item.h}
                    alt={item.info}
                    className="object-contain max-h-[280px]"
                  />
                </div>
  
                {/* Product Info */}
                <div className="flex justify-between items-center">
                  <h4 className={`${josefin.className} text-navy border-b-2`}>{item.info}</h4>
                  <div className="flex gap-3">
                    <h4 className={`${josefin.className} text-md text-navy`}>{item.info2}</h4>
                    <h5 className={`${josefin.className} text-md text-pink line-through`}>{item.info3}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  };
  
  export default Latest;