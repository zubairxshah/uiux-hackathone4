import { josefin } from "@/fonts/josefin";
import { lato } from "@/fonts/lato";
import Image from "next/image";
import CartMenuTop from "./Extras/CartMenuTop";

const ProductGrid = () => {
  const products = [
    {
      image: "/3.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      w: 178,
      h: 178,
    },
    {
      image: "/4.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      w: 178,
      h: 178,
    },
    {
      image: "/5.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      w: 178,
      h: 178,
    },
    {
      image: "/6.png",
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      w: 178,
      h: 178,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-[1140px] mx-auto px-4">
      <h2
        className={`${josefin.className} text-4xl font-bold text-center mb-8 text-[#1A0B5B]`}
      >
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="relative flex items-center justify-center h-64 bg-[#F6F7FB]">
              <div className="absolute top-0 left-0 p-3 invisible group-hover:visible">
                <CartMenuTop />
              </div>
              <Image
                src={product.image}
                alt={product.name}
                className="object-contain h-full"
                width={product.w}
                height={product.h}
              />
              <div className={`${josefin.className} absolute bottom-1 space-y-2 justify-center invisible 
              group-hover:visible text-center text-white bg-[#08D15F]`}>
                <button className="inline-block px-4 py-2 text-sm text-white bg-[#08D15F] hover:bg-[#06b050] 
          rounded-sm transition-colors duration-300"
                >View Details</button>
                </div>
            </div>
            <div
              className={`${lato.className} group w-full text-center hover:text-white group-hover:bg-[#2F1AC4] flex justify-center 
       items-center flex-col gap-2 overflow-hidden`}
            >
              <h3 className="text-lg font-medium text-[#FB2E86] group-hover:text-white truncate w-full">
                {product.name}
              </h3>
              <div className="w-[52px] h-1 flex items-center justify-center gap-1">
                <div className="w-3.5 h-1 bg-[#05e6b7] rounded-[10px]" />
                <div className="w-3.5 h-1 bg-[#f701a8] rounded-[10px]" />
                <div className="w-3.5 h-1 group-hover:bg-[#ffe9c0] rounded-[10px] bg-[#00009D]" />
              </div>
              <p className="text-sm text-[#151875] group-hover:text-white truncate w-full">
                Code - {product.code}
              </p>
              <p className="text-lg font-bold text-[#151875] group-hover:text-white truncate w-full">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductGrid;
