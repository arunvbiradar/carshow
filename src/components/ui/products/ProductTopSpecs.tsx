import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const ProductTopSpecs = ({
  className,
  optionalRow,
}: {
  className?: string;
  optionalRow?: boolean;
}) => {
  return (
    <div
      className={`${optionalRow && "sticky"} top-8 ${className ? className : ""}`}
    >
      <div className="bg-gray-100 p-6 rounded-md border-b-2 mb-6 xl:8">
        <h2 className="text-4xl font-bold">$2000</h2>
        <div className="flex text-sm mt-4 mb-6">
          <span className="after:content-['\2022'] after:mx-2">
            lorem ipsum
          </span>
          <span className="after:content-['\2022'] after:mx-2">
            lorem ipsum
          </span>
          <span>lorem ipsum</span>
        </div>
        <table className="border-collapse border w-full mb-8">
          <tr>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Engine</h5>
              <p>1997 cc - 2998 cc</p>
            </td>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Power</h5>
              <p>296.36 bhp</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Seating Capacity</h5>
              <p>7</p>
            </td>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Drive Type</h5>
              <p>AWD</p>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Mileage</h5>
              <p>12.37 kmpl</p>
            </td>
            <td className="p-2 border border-gray-300">
              <h5 className="font-bold">Fuel</h5>
              <p>Diesel / Petrol</p>
            </td>
          </tr>
        </table>
        <div className="mb-4">
          <h4 className="mb-4">
            Download the brochure to view detailed specs and features
          </h4>
          <a href="" className="btn inline-flex items-center">
            <MdOutlineFileDownload className="text-2xl mr-2" />
            Download Brochure
          </a>
        </div>
      </div>
      {optionalRow && (
        <div className="bg-gray-100 p-6 rounded-md border-b-2 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          fugit ipsum aspernatur odio ab veniam ipsam similique soluta nisi
          repudiandae debitis nemo rerum minima accusamus officiis, eum facere.
          Totam, natus!
        </div>
      )}
    </div>
  );
};

export default ProductTopSpecs;
