import React from "react";
import Image from "next/image";
import { blogPosts } from "./Extras/bloghomedata"; 
import { josefin } from "@/fonts/josefin";
import { CalendarDays } from "lucide-react";
import { FaPenNib } from "react-icons/fa";
import { lato } from "@/fonts/lato";

const LeatestBlog: React.FC = () => {
  return (
    <section className="w-auto mx-auto px-4 py-12">
      <h1 className={`${josefin.className} text-center text-4xl font-bold text-navy mb-8`}>
        Latest Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden"
            style={{ width: "300px" }}
          >
            <div className="w-full">
              <Image 
                src={post.imgSrc} 
                alt={post.title} 
                className="w-full h-[200px] object-cover" 
                width={300} 
                height={200} 
              />
            </div>
            <div className="p-4">
              <div className={`${josefin.className} text-sm text-navy flex items-center gap-2`}>
                <FaPenNib size={12} className="text-pink"/>
                <span>{post.author}</span>
                <CalendarDays size={16} className="ml-2 text-[#FFA454]"/>
                <span>{post.date}</span>
              </div>
              <h2 className={`${josefin.className} text-lg font-semibold text-gray-800 mt-2 
              hover:text-[#FB2E86] transition-colors duration-200`}>
                {post.title}
              </h2>
              <p className={`${lato.className} text-sm text-gray-600 mt-2`}>
                {post.description}
              </p>
              <button className={`${lato.className} text-sm text-blue-500 hover:text-[#FB2E86] 
              underline mt-4 transition-colors duration-200`}>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
