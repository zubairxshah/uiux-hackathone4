"use client";

import Image from "next/image";
import { cleintData } from "./clientData";
import { useState } from "react";

export default function ClientMover() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cleintData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cleintData.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-hexlight mt-8 lg:mt-10 relative">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-josefin font-bold text-center mb-16 sm:mb-20">
          Our Client Say!
        </h2>

        {/* Slider Container with its own distinct space */}
        <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-[400px] mt-8">
          {/* Images Container */}
          <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
            <div className="flex justify-center items-center">
              {cleintData.map((data, index) => {
                const isActive = index === currentSlide;
                const isPrev =
                  index ===
                  (currentSlide - 1 + cleintData.length) % cleintData.length;
                const isNext = index === (currentSlide + 1) % cleintData.length;

                return (
                  <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`
                                            cursor-pointer transition-all duration-500 ease-in-out absolute
                                            ${
                                              isActive
                                                ? "z-20 scale-100 sm:scale-110 -mt-4 sm:-mt-8 left-1/2 transform -translate-x-1/2"
                                                : "z-10"
                                            }
                                            ${
                                              isPrev
                                                ? "hidden sm:block scale-75 opacity-50 left-[15%] sm:left-[30%] transform -translate-x-1/2"
                                                : ""
                                            }
                                            ${
                                              isNext
                                                ? "hidden sm:block scale-75 opacity-50 left-[85%] sm:left-[70%] transform -translate-x-1/2"
                                                : ""
                                            }
                                            ${
                                              !isActive && !isPrev && !isNext
                                                ? "hidden"
                                                : ""
                                            }
                                        `}
                  >
                    <Image
                      src={data.clientImg}
                      alt={data.clientName}
                      width={data.w}
                      height={data.h}
                      className="rounded-sm shadow-lg w-[100px] sm:w-[100px] lg:w-[100px]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 bg-pink/50 p-2 rounded-full hover:bg-pink/75 transition-all z-30"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 bg-pink/50 p-2 rounded-full hover:bg-pink/75 transition-all z-30"
            >
              →
            </button>
          </div>

          {/* Client Info */}
          <div className="mt-5 sm:mt-5">
            <div className="text-center px-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                {cleintData[currentSlide].clientName}
              </h3>
              <h6 className="text-sm sm:text-base text-gray-600 mb-4">
                {cleintData[currentSlide].clientDesignation}
              </h6>
              <div className="flex justify-center">
                <p className="text-sm sm:text-base text-gray-700 max-w-[90%] sm:max-w-[70%] lg:max-w-[45%] text-center">
                  {cleintData[currentSlide].clientReview}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Bars */}
          <div className="flex justify-center gap-1 mt-8 sm:mt-12">
            {cleintData.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                                    cursor-pointer h-[3px] transition-all duration-300
                                    ${
                                      index === currentSlide
                                        ? "w-[27px] bg-pink"
                                        : "w-[18px] bg-pink opacity-50"
                                    }
                                `}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
