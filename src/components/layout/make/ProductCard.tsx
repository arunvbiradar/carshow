import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Model } from "../../../types";

const ProductCard = ({
  className,
  children,
  model,
}: {
  className?: string;
  children?: ReactNode;
  showSpecs?: boolean;
  model?: Model;
}) => {
  return (
    <div className={`relative ${className ? className : ""}`}>
      <div className="p-4 bg-gray-50 rounded-b-md border-b-2">
        <h3 className="font-bold text-xl">
          <Link to={`/make/${model?.Make_Name}/${model?.Make_ID}`}>
            asdsad {model?.Model_Name}
          </Link>
        </h3>
      </div>
      {children}
    </div>
  );
};

export default ProductCard;
