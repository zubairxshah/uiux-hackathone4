import { HeartIcon } from "lucide-react";
import { FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';

export default function CartMenuTop(){
    return(
        <div className="flex items-center justify-between gap-2">
            <div className="w-[30px] h-[30px] hover:bg-[#EEEFFB] rounded-full flex justify-center items-center">
                <LuShoppingCart size={19} className='w-[19px] h-[19px] text-[#2F1AC4] cursor-pointer'/>
            </div>

            {/* Add SVG gradient definition */}
            <svg width="0" height="0">
                <linearGradient id="blue-gradient-heart" x1="100%" y1="0%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#1389FF" />
                    <stop offset="100%" stopColor="#1DB4E7" />
                </linearGradient>
            </svg>
            <HeartIcon size={14} className='w-[14px] h-[13px] cursor-pointer'
            style={{ stroke: "url(#blue-gradient-heart)" }} />
            
            {/* Add SVG gradient definition */}
            <svg width="0" height="0">
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1389FF" />
                    <stop offset="100%" stopColor="#1DB4E7" />
                </linearGradient>
            </svg>
            
            <FaSearchPlus 
                size={13} 
                className='w-[13px] h-[12px] cursor-pointer'
                style={{ fill: "url(#blue-gradient)" }} 
            />            
        </div>
    )
}
