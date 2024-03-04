import React, { ChangeEvent, useEffect } from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../../lib/store";
import { fetchMakes } from "../../../lib/slices/makeSlice";
import { fetchModelsForMake } from "../../../lib/slices/modelSlice";

const ProductSearch = ({ page }: { page: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const makes = useSelector((state: RootState) => state.makes.makes);
  const models = useSelector((state: RootState) => state.models.models);

  useEffect(() => {
    dispatch(fetchMakes());
  }, [dispatch]);

  const handleSelectMake = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(fetchModelsForMake(e.target.value));
  };

  return (
    <section
      className={`${page === "search" && "sticky"} top-14 z-50 bg-gray-100 p-4 rounded-md mb-16`}
    >
      <div className="flex -mx-4 flex-wrap">
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="make" className="font-bold mb-2 inline-block">
            Search by Make
          </label>
          <select
            name="make"
            id="make"
            className="form-control"
            onChange={handleSelectMake}
          >
            <option>Select a make</option>
            {makes &&
              makes.map((make) => (
                <option key={make.Make_ID} value={make.Make_ID}>
                  {make.Make_Name}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="model" className="font-bold mb-2 inline-block">
            Search by Model
          </label>
          <select
            name="model"
            id="model"
            className="form-control"
            disabled={models?.length <= 0 && true}
          >
            <option>Select a model</option>
            {models?.length > 0 &&
              models.map((models) => (
                <option key={models.Model_ID} value={models.Model_ID}>
                  {models.Model_Name}
                </option>
              ))}
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
