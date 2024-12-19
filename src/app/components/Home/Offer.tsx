import { josefin } from "@/fonts/josefin";
import { lato } from "@/fonts/lato";
import Image from "next/image";

export default function Home() {
    const features = [
      { icon: '/shopex/feature1.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/shopex/feature2.png', title: 'Affordable Prices', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/shopex/feature3.png', title: 'Premium Quality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/shopex/feature4.png', title: 'Fast Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className={`${josefin.className} text-4xl font-extrabold text-[#151875] mb-8`}>
          What Shopex Offer!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white p-6 
              rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px] hover:border-b-2 hover:border-b-[#FF9100]"
            >
              <Image src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" 
              width={160} height={16} />
              <h2 className={`${josefin.className} text-lg font-semibold`}>{feature.title}</h2>
              <p className={`${lato.className} text-gray-500 mt-2`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  