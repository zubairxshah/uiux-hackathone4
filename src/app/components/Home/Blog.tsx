import React from "react";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/28.jpg",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/29.jpg",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/30.jpg",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="w-auto justify-center items-center mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4"
            style={{ width: "300px", height: "420px" }}
          >
            <Image src={post.imgSrc} alt={post.title} className="h-40 w-full object-cover" width={40} height={40}/>
            <div className="mt-4">
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#FB2E86]">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <button className="text-blue-500 underline mt-4 hover:text-[#FB2E86]">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
