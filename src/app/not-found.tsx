import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <div>
      <div className='bg-hex'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
                <h2 className='text-brinjal font-extrabold font-josefin text-2xl sm:text-3xl md:text-4xl'>
                    404 Not Found
                </h2>
                <div className='flex gap-2 font-lato font-medium text-sm sm:text-base'>
                    <h4>Home</h4>
                    <h4>. Pages</h4>
                    <h4 className='text-pink pb-8 sm:pb-16 md:pb-24'>. 404 Not Found</h4>
                </div>
            </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center mt-8 sm:mt-12 md:mt-16'>
                {/* Not Found Image */}
                <div className='w-full max-w-[600px] md:max-w-[904px]'>
                    <Image 
                        src="/notfound.png" 
                        alt="not found" 
                        width={904} 
                        height={440} 
                        className='w-full h-auto'
                        priority
                    />
                </div>

                {/* Message and Button */}
                <div className='my-8 sm:my-12 md:my-16 text-center px-4'>
                    <h3 className='text-lg sm:text-xl md:text-2xl text-brinjal mb-8 sm:mb-12 md:mb-20 font-josefin font-bold'>
                        oops! The page you requested was not found!
                    </h3>
                    <Link 
                        className='inline-block bg-pink text-white font-josefin py-3 sm:py-4 px-6 sm:px-8 rounded-sm hover:bg-opacity-90 transition-all duration-300' 
                        href="/"
                    >
                        Back To Home
                    </Link>
                </div>

                {/* Bottom Logo */}
                <div className='w-full py-8 sm:py-12 md:py-16'>
                    <Image 
                        src="/27.png" 
                        alt="logo" 
                        width={1246} 
                        height={128} 
                        className='w-full h-auto max-w-[800px] mx-auto'
                    />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NotFound
