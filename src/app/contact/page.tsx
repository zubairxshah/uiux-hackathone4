import Image from "next/image"

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <div className="w-full py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Social icons can go here */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Information Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#151875]">
              Information About us
            </h2>
            <p className="text-[#8a8fb9] text-base font-semibold leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            {/* Social Circles */}
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-[#5625df] rounded-full"></div>
              <div className="w-6 h-6 bg-[#ff27b7] rounded-full"></div>
              <div className="w-6 h-6 bg-[#37daf3] rounded-full"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#151875]">
              Contact Way
            </h2>
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Card 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#5726df] rounded-full"></div>
                <div className="space-y-2">
                  <p className="text-[#8a8fb9] text-sm md:text-base">Tel: 877-67-88-99</p>
                  <p className="text-[#8a8fb9] text-sm md:text-base">E-Mail: shop@store.com</p>
                </div>
              </div>

              {/* Contact Card 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#fb2e86] rounded-full"></div>
                <div className="space-y-2">
                  <p className="text-[#8a8fb9] text-sm md:text-base">Support Forum</p>
                  <p className="text-[#8a8fb9] text-sm md:text-base">For over 24hr</p>
                </div>
              </div>

              {/* Contact Card 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#ffb265] rounded-full"></div>
                <div className="space-y-2">
                  <p className="text-[#8a8fb9] text-sm md:text-base">20 Margaret st, London</p>
                  <p className="text-[#8a8fb9] text-sm md:text-base">Great britain, 3NM98-LK</p>
                </div>
              </div>

              {/* Contact Card 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex-shrink-0 bg-[#1be982] rounded-full"></div>
                <div className="space-y-2">
                  <p className="text-[#8a8fb9] text-sm md:text-base">Free standard shipping</p>
                  <p className="text-[#8a8fb9] text-sm md:text-base">on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#151875]">
              Get In Touch
            </h2>
            <p className="text-[#8a8fb9] text-base font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
            
            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-3 rounded border border-[#a4b5c7]/70 focus:outline-none focus:ring-2 focus:ring-[#151875]"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="w-full p-3 rounded border border-[#a4b5c7]/70 focus:outline-none focus:ring-2 focus:ring-[#151875]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                className="w-full p-3 rounded border border-[#a4b5c7]/70 focus:outline-none focus:ring-2 focus:ring-[#151875]"
              />
              <textarea
                placeholder="Type Your Message*"
                rows={6}
                className="w-full p-3 rounded border border-[#a4b5c7]/70 focus:outline-none focus:ring-2 focus:ring-[#151875]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#151875] text-white px-8 py-3 rounded hover:bg-[#151875]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square">
              <Image
                src="/contactpage.png"
                alt="contact"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            {/* Decorative Circles */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 border-2 border-[#cbd5fc] rounded-full opacity-40"></div>
              <div className="absolute inset-[10%] border-2 border-[#cbd5fc] rounded-full opacity-40"></div>
              <div className="absolute inset-[20%] border-2 border-[#cbd5fc] rounded-full opacity-40"></div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute w-2 h-2 bg-[#819fde] rounded-full top-1/4 right-0"></div>
            <div className="absolute w-3 h-3 bg-[#819fde] rounded-full bottom-1/4 right-1/4"></div>
            <div className="absolute w-3 h-3 bg-[#819fde] rounded-full top-1/3 left-0"></div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
          {/* Footer content */}
        </div>
      </div>
    </div>
  )
}
