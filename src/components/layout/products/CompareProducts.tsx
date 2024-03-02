import React from "react";
import ProductCard from "./ProductCard";

const CompareProducts = ({ list }: { list: number }) => {
  const num = list / 2;
  const numbersArray: number[] = Array.from(
    { length: num },
    (_, index) => index + 1,
  );
  return (
    <div className="flex flex-wrap -mx-4 mb-12">
      {numbersArray.map((number) => (
        <div
          key={number}
          className="flex flex-wrap -mx-1 mb-4 relative w-full lg:w-1/2 2xl:w-1/3 px-4"
        >
          <ProductCard className="w-1/2 px-1" showSpecs={false} />
          <ProductCard className="w-1/2 px-1" showSpecs={false}>
            <span className="absolute flex items-center justify-center text-2xl absolute font-bold tracking-tight bg-white drop-shadow-md rounded-full w-12 h-12 top-1/2 -left-[24px] -translate-y-1/2">
              vs
            </span>
          </ProductCard>
        </div>
      ))}
    </div>
  );
};

export default CompareProducts;
