import React from 'react'
import {trending, excutiveData} from '@/app/components/Home/Extras/trendingdata'
import Image from 'next/image'
import styles from "@/app/styles/main.module.css"
import { josefin } from '@/fonts/josefin'
import { lato } from '@/fonts/lato'

const Trending = () => {
    
  return (
    <div className={`container mx-auto max-w-[1180px] md:mt-32 md:mb-32 px-4`}>
    <h1 className={`${josefin.className} text-navy text-center md:mb-10 mb-4 
    text-4xl font-extrabold mt-10`}>Trending Products</h1>
    <div className='grid md:grid-cols-4 gap-6'>
        {trending.map((item) => {
            return <div key={item.id} className='shadow-primary h-[350px] p-3 mb-8 md:mb-0'>
                <div>
                    <div className='bg-hex2 grid justify-center items-center h-[227px]'>
                        <img src={item.pic} alt="" />
                    </div>
                    <div className='text-center mt-5'>
                        <div>
                            <h4 className={`${lato.className} font-bold text-navy`}>{item.title}</h4>
                        </div>
                        <div className={`${josefin.className} flex justify-center items-center gap-2`}>
                            <h5 className='font-semibold text-navy'>{item.offerPrice}</h5>
                            <h6 className='text-xs font-semibold text-gray-400 line-through'>{item.regularPrice}</h6>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </div>

    <div className='grid md:grid-cols-3 gap-6 mt-7'>
        <div className='bg-shade1 h-[270px] p-6 mb-8 bg-[#FFF6FB]'>
            <h3 className='text-navy font-josefin'>23% off in all products</h3>
            <h4 className='text-pink font-lato font-semibold cursor-pointer 
            hover:underline'>Shop Now</h4>
            <div className='grid justify-end'>
                <Image src="/trending/discount-1.png" alt='clock' 
                width={213} height={207} />
            </div>
        </div>

        <div className='bg-shade h-[270px] p-6 mb-8 bg-hex'>
            <h3 className='text-navy font-josefin'>23% off in all products</h3>
            <h4 className='text-pink font-lato font-semibold 
            cursor-pointer hover:underline'>View Collection</h4>
            <div className='grid justify-end'>
                <Image src="/trending/discount-2.png" alt='table' 
                width={312} height={173} />
            </div>
        </div>

        <div>
            {excutiveData.map((item) => {
                return <div key={item.id}>
                    <div className='flex items-center pb-6'>
                        <div className='bg-hex2 h-[74px] w-[107px] mr-[9px] 
                        bg-hex grid justify-center gap-y-4 items-center cursor-pointer'>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='flex items-center h-full'>
                            <div>
                                <h5 className='text-navy font-josefin font-semibold 
                                cursor-pointer'>{item.title}</h5>
                                <h6 className='text-navy font-josefin font-medium 
                                line-through text-sm'>{item.price}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
</div>

  )
}

export default Trending