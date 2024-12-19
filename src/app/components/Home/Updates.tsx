import { josefin } from "@/fonts/josefin"
import Image from "next/image"

export default function Updates(){
    return(
        <div>
        <div className="relative">
  <Image
    src="/26.png"
    alt="update"
    width={1930}
    height={462}
    className="w-full h-auto"
  />
 <div className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6">
    <div className="w-full md:w-[547px] xl:w-[547px] 2xl:w-[547px] h-[108px]">
        <h3 className={`text-sm sm:text-2xl md:text-3xl text-navy font-extrabold 
        mb-2 sm:mb-4 text-center ${josefin.className}`}>
            Get Latest Update By Subscribing to
            <div className="items-center p-4">
            <span className="text-center">Our Newsletter</span>
            </div>
        </h3>
    </div>

    <button className={`mt-[50px] px-2 sm:px-6 py-2 sm:py-3 bg-pink text-white text-xs 
    sm:text-xl hover:bg-[#FB2f98] transition duration-200 ${josefin.className}`}>
        Shop Now
    </button>
</div>

</div>

{/* logos */}
<div className="flex justify-center items-center py-18 sm:py-24">
  <Image
  src="/27.png"
  width={904}
  height={93}
  alt="logos"
  />
</div>
</div>
    )
}