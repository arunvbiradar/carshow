import React from "react";

const ProductGallery = () => {
  return (
    <div className="flex -mx-2 mb-4 xl:mb-12 flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 px-2 mb-4">
        <img
          src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Mercedez Benz - AMG"
          className="h-full object-cover rounded-md border-2"
        />
      </div>
      <div className="w-full lg:w-1/3 px-2">
        <div className="flex flex-row lg:flex-col gap-4">
          <figure className="mb-4 rounded-md overflow-hidden border-2">
            <img
              src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Mercedez Benz - AMG"
            />
          </figure>
          <figure className="mb-4 rounded-md overflow-hidden border-2">
            <img
              src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260"
              alt="Mercedez Benz - AMG"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
