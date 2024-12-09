import Image from "next/image";

export default function TrendingProducts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Trending Products</h1>

      {/* Trending Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { id: 17, image: "/17.png", w: 171, h: 171 },
          { id: 18, image: "/18.png", w: 187, h: 187 },
          { id: 19, image: "/19.png", w: 197, h: 189 },
          { id: 11, image: "/11.png", w: 253, h: 211 },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden p-4"
          >
            <div className="aspect-square relative bg-gray-100 rounded-lg mb-3">
              <Image
                src={item.image}
                alt={`Cantilever chair ${item.id}`}

                className="object-cover"
                width={item.w} height={item.h}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cantilever chair</h3>
            <div className="flex items-center gap-2">
              <span className="text-black">$26.00</span>
              <span className="text-gray-400 line-through">$42.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Section */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-8">
        {/* Left Promo */}
        <div className="md:col-span-3 bg-[#FFF6FB] rounded-lg p-6">
          <div className="flex items-center">
            <div className="w-[420px] h-[270px]">
              <h3 className="text-xl font-bold text-[#151875]">23% off in all products</h3>
              <button className="text-[#FB2E86]">Shop Now</button>
            </div>
            <div className="w-[213px] h-[207px]">
              <Image
                src="/20.png"
                alt="Kitchen mitt"
                width={213}
                height={207}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Center Promo */}
        <div className="md:col-span-3 bg-[#F6F7FB] rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="w-[420px] h-[270px]">
              <h3 className="text-xl font-bold text-[#151875] text-left">23% off in all products</h3>
              <button className="text-[#FB2E86] text-left">View Collection</button>
            </div>
            <div className="relative w-[312px] h-[207px]">
              <Image
                src="/21.png"
                alt="Kitchen mitt"
                width={213}
                height={207}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-1 text-[#151875]">
          <div className="space-y-4">
            {[
              { id: 1, image: "/a.png", title: "Executive Chair", price: "$32.00", w: 67, h: 71 },
              { id: 2, image: "/b.png", title: "Comfort Sofa", price: "$45.00", w: 67, h: 67 },
              { id: 3, image: "/c.png", title: "Modern Table", price: "$28.00", w: 67, h: 67 },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <div className="relative w-12 h-12 bg-gray-100 rounded">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.w}
                    height={item.h}
                    className="object-cover rounded"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium">{item.title}</h4>
                  <span className="text-sm text-[#151875] line-through">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
