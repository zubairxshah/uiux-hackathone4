"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { josefin } from "@/fonts/josefin";

const slides = [
  {
    title: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.png",
    lampImage: "/lamp.png",
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Discover the latest modern furniture trends to elevate your living space.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.png",
    lampImage: "/lamp.png",
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/sofa1.png",
    lampImage: "/lamp.png",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-gray-100 py-10 md:py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Left Column: Lamp */}
      <div className="md:w-1/4 flex justify-center items-start relative">
        <div className="absolute top-[-276px] left-[-40px] z-10">
          <Image
            src="/1.png"
            alt="Lamp"
            width={387}
            height={387}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Column: Content (Title, Description, Button) */}
      <div className="md:w-1/2 max-w-lg text-center md:text-left flex flex-col justify-center">
        <p className={`${josefin.className}text-sm text-pink font-medium`}>
          Best Furniture For Your Castle...
        </p>
        <h1
          className={`${josefin.className} text-3xl md:text-4xl font-bold text-indigo-950 leading-tight mt-2`}
        >
          {current.title}
        </h1>
        <p
          className={`${josefin.className} text-navy text-[13px] mt-4 leading-relaxed`}
        >
          {current.description}
        </p>
        <Link
          href="#"
          className={`${josefin.className}inline-block bg-pink text-white text-sm font-medium py-3 px-6 rounded-md
           mt-6 hover:bg-pink-600 transition-all duration-300 w-1/3 text-center`}
        >
          {current.buttonText}
        </Link>
      </div>

      {/* Right Column: Chair Image */}
      <div className="md:w-1/3 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Increased size of ellipses */}
          <div
            className="absolute w-[400px] h-[400px] bg-[#ECD2FA] rounded-full opacity-30 
      transform translate-x-[10px] translate-y-[-40px] hover:scale-110 transition-transform duration-300"
          />
          <div
            className="absolute w-[400px] h-[400px] bg-[#ECD2FA] rounded-full opacity-30 
      transform -translate-x-4 -translate-y-[5px] hover:scale-110 transition-transform duration-300"
          />
          {/* <div
            className="w-64 h-64 bg-blue-500 rounded-tl-[200px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 33% 33%, #60a5fa, #3b82f6)",
            }}
          ></div> */}
        </div>
        <div className="relative z-10">
        <div
            className="absolute top-0 right-0 w-[70px] h-[70px] bg-[#00C1FE] rotate-45 opacity-90
             inline-flex items-center justify-center"
            style={{
              
              borderRadius: "60% 70% 60% 50% / 30% 50% 60% 80%",
            }}
          >
            <div className={`${josefin.className} -rotate-45 flex flex-col items-center justify-center`}> 
    <p className="text-white font-medium text-md">50%</p>
    <p className="text-white font-medium text-md">off</p>
  </div>
            </div>
          <Image
            src="/2.png"
            alt="Furniture Chair"
            width={706}
            height={689}
            className="object-contain w-full h-auto max-w-[400px] mx-auto"
          />
        </div>
      </div>

      {/* Navigation Rhombus */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 [transform:rotate(130deg)] ${
              currentSlide === index
                ? "bg-pink"
                : "hover:bg-pink bg-[#F2F0FF] border border-pink"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100"
      >
        ❯
      </button>
    </section>
  );
}

export default HeroSection;
