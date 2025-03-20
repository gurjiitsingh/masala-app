"use client";


import Categories from "./Components/Categories";
import Products from "./Components/Products";

//import { TnewProductSchema } from '@/lib/types';
// import {  TnewProductSchema } from '@/lib/type/productType';

export default function Page() {
  // const products = await fetchProducts();
 
  return (
    <div className="overflow-hidden min-h-screen">
      <div className="container mx-auto pt-7 p-1">
        <div className="w-full px-2 flex flex-col md:flex-row flex-wrap gap-3">
          <Categories />
          <Products />
        
        </div>
      </div>
    </div>
  );
}
