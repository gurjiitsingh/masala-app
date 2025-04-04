import {
  // fetchProductByCategoryId,
  fetchProducts,
} from "@/app/action/productsbase/dbOperation";
import { ProductType } from "@/lib/types/productType";
import React, { useEffect, useState } from "react";
import PageProductDetailComponent from "./PageProductDetailComponent";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import { fetchAddOnProducts } from "@/app/action/productsaddon/dbOperation";
import { addOnType } from "@/lib/types/addOnType";

export default function Products() {
  const { productCategoryIdG } = UseSiteContext();
  const [products, setProduct] = useState<ProductType[]>([]);
  const [allProducts, setAllProduct] = useState<ProductType[]>([]);
  const [allAddOns, setAllAddOns] = useState<addOnType[]>([]);
  useEffect(() => {
    async function fetchAddOn() {
      const result = await fetchAddOnProducts();
    setAllAddOns(result);
    }
    fetchAddOn();
    // console.log("productCategoryIdG -------------", productCategoryIdG)
    if (productCategoryIdG === "") {
      async function fetchproductData() {
        const productData = await fetchProducts();
        productData.sort((a, b) => a.sortOrder - b.sortOrder);
        setAllProduct(productData);
        setProduct(productData);
      }
      fetchproductData();
    } else {
      async function fetchproductData() {
        // const productData = await fetchProductByCategoryId(productCategoryIdG);
        const filtertedProduct = allProducts.filter(
          (item) => item.categoryId === productCategoryIdG
        );
        filtertedProduct.sort(
          (a: ProductType, b: ProductType) => a.sortOrder! - b.sortOrder!
        );

        setProduct(filtertedProduct);
      }
      fetchproductData();
    }
  }, [productCategoryIdG]);
  return (
    <div className="flex flex-col gap-1 w-full">
      {products.map((product, i) => {
        return <PageProductDetailComponent key={i} allAddOns={allAddOns} product={product} />;
      })}
    </div>
  );
}
