import React from 'react';
import { faqData } from './faqData';
import Image from 'next/image';

const FaqPage = () => {
  return (
    <div>
      <div className='bg-hex'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
          <h2 className='text-brinjal font-extrabold font-josefin text-2xl sm:text-3xl md:text-4xl'>
            FAQ
          </h2>
          <div className='flex gap-2 font-lato font-medium text-sm sm:text-base'>
            <h4>Home</h4>
            <h4>. Pages</h4>
            <h4 className='text-pink pb-8 sm:pb-16 md:pb-24'>. FAQ</h4>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 md:my-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
          {/* FAQ Content Section */}
          <div className=''>
            <h2 className='text-brinjal font-josefin font-bold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8'>
              General Information
            </h2>

            <div className='space-y-6 sm:space-y-8 md:space-y-12'>
              {faqData.map((item, index) => (
                <div key={index} className='border-b border-gray-100 pb-6'>
                  <h3 className='text-brinjal font-josefin font-semibold text-lg sm:text-xl mb-2 sm:mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-tertiary font-lato text-sm sm:text-base'>
                    {item.des}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ask Question Form Section */}
          <div className='bg-hex rounded-sm shadow-sm mt-8 md:mt-0'>
            <div className='p-6 sm:p-8 md:p-12'>
              <h3 className='text-brinjal font-josefin font-bold text-xl sm:text-2xl mb-6'>
                Ask a Question
              </h3>
              
              <form className='space-y-4 sm:space-y-6'>
                <input 
                  type="text" 
                  placeholder='Your Name' 
                  className='w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-pink font-lato'
                />
                <input 
                  type="text" 
                  placeholder='Subject*' 
                  className='w-full h-12 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-pink font-lato'
                />
                <textarea 
                  placeholder='Type Your Message*' 
                  className='w-full h-48 p-4 rounded-md border border-gray-300 focus:outline-none focus:border-pink font-lato resize-none'
                ></textarea>

                <button className='bg-pink text-white font-josefin py-3 px-6 rounded-sm hover:bg-opacity-90 transition-all duration-300'>
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className='w-full py-8 sm:py-12 md:py-16'>
          <Image 
            src="/27.png" 
            alt="logo" 
            width={1246} 
            height={128} 
            className='w-full h-auto max-w-[800px] mx-auto'
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default FaqPage
