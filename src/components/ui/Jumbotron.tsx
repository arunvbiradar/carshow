import React from "react";
import SectionTitle from "./SectionTitle";

const Jumbotron = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-sky-50 lg:pl-8 mb-12 rounded-md justify-center overflow-hidden">
      <div className="w-full lg:w-1/3 py-8 pr-8 pl-8 lg:pl-0 flex flex-col justify-center order-2 lg:order-1">
        <SectionTitle>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </SectionTitle>
        <p className="mb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          vero reiciendis doloremque temporibus impedit.
        </p>
        <div className="flex">
          <button className="btn">Explore Shop</button>
        </div>
      </div>
      <div className="w-full lg:w-2/3 order-1 lg:order-2">
        <img
          src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
