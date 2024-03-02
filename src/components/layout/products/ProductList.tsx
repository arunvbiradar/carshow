import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ list }: { list: number }) => {
  const numbersArray: number[] = Array.from(
    { length: list },
    (_, index) => index + 1,
  );
  return (
    <div className="flex flex-wrap -mx-4 mb-12">
      {numbersArray.map((number) => (
        <ProductCard
          key={number}
          className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-4 mb-4"
        />
      ))}
    </div>
  );
};

export default ProductList;
