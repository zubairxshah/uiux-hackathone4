import Image from "next/image";

const Hero4 = () => {
  return (
    <div className="relative w-[1440px] h-[450px]">
      {/* Background with opacity 15%*/}
      <div 
        className="absolute inset-0 bg-[url('/nia-sofa.jpg')] bg-cover bg-center"
        style={{ opacity: '0.15' }}
      ></div>

      {/* Text and buttons */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[454px] h-[90px] font-bold text-[60px] leading-[90px]">
            Our Instagram
          </div>
          <div className="w-[297px] h-[30px] font-normal text-[20px] leading-[30px]">
            Follow our store on Instagram
          </div>
        </div>
        
        <button className="w-[255px] h-[64px] bg-[#FAF4F4] rounded-full hover:bg-[#f5e9e9] transition-colors duration-300">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Hero4;
