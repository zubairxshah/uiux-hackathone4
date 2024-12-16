import { HeartIcon } from "lucide-react";
import { FaSearchPlus } from "react-icons/fa";
import { LuShoppingCart } from 'react-icons/lu';

export default function CartMenuLatest(){
    return(
        <div className="flex flex-col items-center gap-3 p-4">
            {/* Shopping Cart Icon */}
            <div className="w-[30px] h-[30px] hover:bg-[#EEEFFB] rounded-full flex items-center justify-center transition-colors">
                <LuShoppingCart 
                    size={19} 
                    className='text-[#2F1AC4] cursor-pointer'
                />
            </div>

            {/* Heart Icon */}
            <div className="w-[30px] h-[30px] hover:bg-[#EEEFFB] rounded-full flex items-center justify-center transition-colors">
                <svg width="0" height="0">
                    <linearGradient id="purple-gradient-heart" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#2F1AC4" />
                        <stop offset="100%" stopColor="#2F1AC4" />
                    </linearGradient>
                </svg>
                <HeartIcon 
                    size={14} 
                    className='cursor-pointer'
                    style={{ stroke: "url(#purple-gradient-heart)" }} 
                />
            </div>
            
            {/* Search Icon */}
            <div className="w-[30px] h-[30px] hover:bg-[#EEEFFB] rounded-full flex items-center justify-center transition-colors">
                <svg width="0" height="0">
                    <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2F1AC4" />
                        <stop offset="100%" stopColor="#2F1AC4" />
                    </linearGradient>
                </svg>
                <FaSearchPlus 
                    size={13} 
                    className='cursor-pointer'
                    style={{ fill: "url(#purple-gradient)" }} 
                />
            </div>
        </div>
    )
}
