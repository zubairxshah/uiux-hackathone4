import React from "react";
import Features from "./Features";
import ClientMover from "./clientmover";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="bg-hex">
        <div className="lg:container lg:px-[1.3rem] px-[.8rem] pt-[98px]">
          <h2 className="text-brinjal text-4xl font-josefin font-bold">About Us</h2>
          <div className="flex gap-2 font-lato font-medium">
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className="text-pink pb-[114px]"> . About Us</h4>
          </div>
        </div>
      </div>

      <div className="lg:container lg:px-[1.3rem] px-[.8rem] lg:grid grid-cols-2 items-center lg:py-20 py-6 relative ">
        <div className=" flex ">
          <div className="bg-violet w-[555px] h-[249px] lg:h-[409px] pl-4 pb-4 -pr-9 rounded-lg ">
            <div className=" absolute">
              <Image
                className="lg:w-full w-auto"
                src="/client/aboutus.png"
                alt=""
                width={555}
                height={409}
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-navy font-extrabold font-josefin md:text-4xl lg:text-4xl text-2xl">
            Know About Our Ecomerce Business, History
          </h2>
          <p className="lg:mt-4 text-tertiary font-lato font-semibold text-[16px] text-hexxd">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
            vitae lobortis quis bibendum quam.
          </p>
          <button className="lg:mt-16 mt-4 font-lato font-semibold 
          text-lg text-white bg-pink rounded-sm px-5 py-2">Contact us</button>
        </div>
      </div>

      <Features />

      <ClientMover />
    </div>
  );
};

export default About;
