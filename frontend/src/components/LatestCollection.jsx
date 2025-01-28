import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { useState } from "react";
import { useEffect } from "react";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);


  return (
    <>
      <div className="flex flex-col items-center justify-center m-10">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="m-auto text-xs sm:text-sm md:text-base text-gray-700">
          "Discover the latest trends in our new collection—handpicked styles
          just for you!"
        </p>
      </div>


      {/* Rendering products by map functiomn. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item,idx)=>(
          <ProductItem key={idx} id={item._id} image={item.image} price={item.price} name={item.name}/>
        ))}
      </div>
    </>
  );
};

export default LatestCollection;
