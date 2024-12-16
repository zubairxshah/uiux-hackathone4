import React from 'react'
import {trending, excutiveData} from '@/app/components/Home/Extras/trendingdata'
import Image from 'next/image'
import styles from "@/app/styles/main.module.css"
import { josefin } from '@/fonts/josefin'

const Trending = () => {
    
  return (
    <div className={`md:${styles.container} md:${styles.wrapper} md:mt-32 md:mb-32 px-[.8rem]`}>
        <h1 className={`${josefin.className} text-navy text-center md:mb-10 mb-4 
        text-4xl font-extrabold mt-10`}>Trending Products</h1>
        <div  className='md:flex gap-6'>
            {trending.map((item) => {
                return <div key={item.title} className='shadow-primary h-[350px] md:w-[270px] p-3  mb-8 md:mb-0'>
                    <div>
                        <div className='bg-hex2 grid justify-center items-center  h-[227px]'>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='text-center text-navy mt-5'>
                            <div>
                                <h4 className='font-bold'>{item.title}</h4>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <h5 className='font-semibold'>{item.offerPrice}</h5>
                                <h6 className='text-xs font-semibold text-black_rgb'>{item.regularPrice}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>


        <div className='md:flex gap-6 mt-7 '>
            <div className='bg-shade1 md:w-[420px] h-[270px] p-6  mb-8 bg-[#FFF6FB]'>
                <h3 className='text-navy font-josefin'>23% off in all products</h3>
                <h4 className='text-pink font-lato font-semibold'>Shop Now</h4>
                <div className='grid justify-end'>
                    <Image src="/trending/discount-1.png" alt='clock' 
                    width={213} height={207} />
                </div>
            </div>

            <div className='bg-shade md:w-[420px] h-[270px] p-6   mb-8'>
                <h3 className='text-navy font-josefin'>23% off in all products</h3>
                <h4 className='text-pink font-lato font-semibold'>View Collection</h4>
                <div className='grid justify-end'>
                <Image src="/trending/discount-2.png" alt='table' 
                    width={312} height={173} />
                </div>
            </div>

            <div className=''>
                {excutiveData.map((item) => {
                return <div key={item.price} className=''>
                    <div className='flex items-center pb-6'>
                    <div className='bg-hex2 h-[74px] w-[107px] mr-[9px] grid justify-center gap-y-4 items-center '>
                        <img src={item.pic} alt="" />
                    </div>
                    <div className='flex items-center h-full'>
                        <div>
                            <h5 className='text-navy font-josefin font-semibold'>{item.title}</h5>
                            <h6 className='text-navy font-josefin font-medium text-sm'>{item.price}</h6>
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