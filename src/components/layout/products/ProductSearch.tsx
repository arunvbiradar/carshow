import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductSearch = ({ page }: { page: string }) => {
  return (
    <section
      className={`${page === "search" && "sticky"} top-14 z-50 bg-gray-100 p-4 rounded-md mb-16`}
    >
      <div className="flex -mx-4 flex-wrap">
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="make" className="font-bold mb-2 inline-block">
            Search by Make
          </label>
          <select name="make" id="make" className="form-control">
            <option>Select a make</option>
            <option value="">Option1</option>
            <option value="">Option2</option>
            <option value="">Option3</option>
            <option value="">Option4</option>
            <option value="">Option5</option>
          </select>
        </div>
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="model" className="font-bold mb-2 inline-block">
            Search by Model
          </label>
          <select name="model" id="model" className="form-control">
            <option>Select a model</option>
            <option value="">Option1</option>
            <option value="">Option2</option>
            <option value="">Option3</option>
            <option value="">Option4</option>
            <option value="">Option5</option>
          </select>
        </div>
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="priceRange" className="font-bold mb-2 inline-block">
            Search Price Range
          </label>
          <input
            type="range"
            name="priceRange"
            id="priceRange"
            className="form-control"
          />
        </div>
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <strong className="font-bold mb-2 inline-block">
            Select Fuel Type
          </strong>
          <div className="flex">
            <div className="flex items-center mr-8">
              <input
                id="petrol-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4"
              />
              <label htmlFor="petrol-checkbox" className="ms-2">
                Petrol
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="diesel-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4"
              />
              <label htmlFor="diesel-checkbox" className="ms-2">
                Diesel
              </label>
            </div>
          </div>
        </div>
        <div className="mb-6 px-4 w-full">
          <label htmlFor="make" className="font-bold mb-2 inline-block">
            Search by body Type
          </label>
          <div className="flex gap-4 overflow-auto">
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-white border-2 p-4 flex flex-col items-center min-w-28"
            >
              <IoCarSportOutline className="text-4xl" />
              <span className="text-sm">Body Type</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
