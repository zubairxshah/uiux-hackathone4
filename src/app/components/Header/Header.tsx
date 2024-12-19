import React from 'react'
import {josefin} from "../../../fonts/josefin"
import { MdOutlineEmail } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { FaRegHeart, FaPhoneVolume } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import { SelectLanguage } from './HeaderEngDD';
import { CurrencySelect } from './HeaderCurDD';


export default function Header() {
  return (
    <div className="2xl:w-[1920px] h-[44px] w-[100%] bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
  <div className="w-[1177px] 2xl:w-[1177px] flex justify-between items-center"> 
    {/* Left side with contacts */}
    <div className="flex items-center gap-6"> 
      <div className="flex items-center gap-3">
        <span className="text-[#ffffff]">
          <MdOutlineEmail />
        </span>
        <a href="mhhasanul@gmail.com">
          <h1 className={`${josefin.className} font-semibold text-sm sm:text-[16px]`}>
            mhhasanul@gmail.com
          </h1>
        </a>
      </div>

      <div className="flex items-center gap-3">
        <span className="flex items-center text-[#ffffff]">
          <FaPhoneVolume/>
        </span>
        <a href="(12345)67890)">
          <h1 className={`${josefin.className} font-semibold text-sm sm:text-[16px]`}>
            (12345)67890
          </h1>
        </a>
      </div>
    </div>

    {/* Right side with controls */}
    <div className="flex items-center gap-3"> {/* Simplified right container */}
      <div className='mr-[-10px]'><SelectLanguage /></div>
      <div className=''><CurrencySelect /></div>
      <div className="flex items-center gap-1">
        <span className={` ${josefin.className} font-semibold text-sm 
         sm:text-[16px]`}>Login</span>
        <FiUser />
      </div>
      <div className="flex items-center gap-1 mr-[-10px]">
        <span className={` ${josefin.className} font-semibold text-sm sm:text-[16px]`}>Wishlist</span>
        <FaRegHeart />
      </div>
      <LuShoppingCart size={24} className='ml-[25px]'/>
    </div>
  </div>
</div>

  )
}
