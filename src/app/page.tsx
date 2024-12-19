
import React from 'react'
import Image from 'next/image';
import Home from './components/Home/Home'
import Products from './components/Home/Products';
import Latest from './components/Home/Latest';
import Offer from './components/Home/Offer'
import UniqueProduct from './components/Home/Uniqueproduct'
import Trending2 from './components/Home/Trending2'
import Discount from './components/Home/Discount'
import Categories from './components/Home/Categories'
import Blog from './components/Home/Blog'
import Updates from './components/Home/Updates';


export default function page() {
  return (
    <div>


<Home/>
<Products/>
<Latest/>
<Offer/>
<br/>
<UniqueProduct />
<br/>
<Trending2/>
<br/>
<Discount/>
<br/>
<Categories/>
<Updates />
{/* Updtes */}
<Blog/>




    </div>
  )
}
