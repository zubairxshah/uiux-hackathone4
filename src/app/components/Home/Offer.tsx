import Image from "next/image";

export default function Home() {
    const features = [
      { icon: '/13.png', title: '24/7 Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/14.png', title: 'Affordable Prices', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/15.png', title: 'Premium Quality', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
      { icon: '/16.png', title: 'Fast Delivery', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.' },
    ];
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-5xl font-extrabold text-[#151875] mb-8">What Shopex Offer!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]"
            >
              <Image src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" 
              width={160} height={16} />
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  