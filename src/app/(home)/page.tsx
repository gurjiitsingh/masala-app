"use client";


import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import CategorySlider from "./Components/CategorySlider"
//import { TnewProductSchema } from '@/lib/types';
// import {  TnewProductSchema } from '@/lib/type/productType';

export default function Page() {
  // const products = await fetchProducts();
 
  return (
    <div className="overflow-hidden min-h-screen">
      <div className="container mx-auto pt-7 p-1">
        <div className="w-full px-2 flex flex-col md:flex-row flex-wrap gap-3">
        <div className='bg-slate-200 flex flex-nowrap md:justify-center  py-2 px-3 gap-2  rounded-2xl justify-between  w-full '>
          <Hero />
         <h1 className="flex items-center text-4xl sm:5xl md:text-6xl  text-[#64870d]">Abhol Rabatt 20% </h1>
          </div>
          <CategorySlider />
          {/* <Categories /> */}
          <Products />
        
        </div>
      </div>
    </div>
  );
}
