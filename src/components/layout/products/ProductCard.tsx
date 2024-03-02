import React, { ReactNode } from "react";
import {
  TiFlowMerge,
  TiFlowChildren,
  TiFlowSwitch,
  TiFlowParallel,
  TiLinkOutline,
} from "react-icons/ti";

const ProductCard = ({
  className,
  children,
  showSpecs,
}: {
  className?: string;
  children?: ReactNode;
  showSpecs?: boolean;
}) => {
  return (
    <div className={`relative ${className ? className : ""}`}>
      <figure className="rounded-t-md overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
          alt="Car Name"
          className="w-full"
        />
      </figure>
      <div className="p-4 bg-gray-50 rounded-b-md border-b-2">
        <h3 className="font-bold text-xl mb-2">
          <a href="">Product Name</a>
        </h3>
        <div className="flex justify-between mb-3">
          <span className="font-bold">$1000</span>
          <span>Petrol</span>
        </div>
        {showSpecs && (
          <div className="flex justify-evenly">
            <span className="icon-rounded">
              <TiFlowMerge />
            </span>
            <span className="icon-rounded">
              <TiFlowChildren />
            </span>
            <span className="icon-rounded">
              <TiFlowSwitch />
            </span>
            <span className="icon-rounded">
              <TiFlowParallel />
            </span>
            <span className="icon-rounded">
              <TiLinkOutline />
            </span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
