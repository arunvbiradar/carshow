import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchManufacturers } from "../../../lib/slices/manufacturerSlice";
import { AppDispatch, RootState } from "../../../lib/store";
import { Link } from "react-router-dom";

const Manufacturers = () => {
  const dispatch = useDispatch<AppDispatch>();
  // manufacturers
  const manufacturers = useSelector(
    (state: RootState) => state.manufacturers.manufacturers,
  );
  const loading = useSelector(
    (state: RootState) => state.manufacturers.loading,
  );
  const error = useSelector((state: RootState) => state.manufacturers.error);

  useEffect(() => {
    dispatch(fetchManufacturers());
  }, [dispatch]);

  // loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // error
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap -mx-2">
      {manufacturers &&
        manufacturers.map((manufacturer) => (
          <div className="px-2 mb-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-full">
            <div className="border-2 bg-gray-200 p-4 rounded-md capitalize h-full">
              <Link
                to={`/manufacturer/${manufacturer.Mfr_CommonName}/${manufacturer.Mfr_ID}`}
                key={manufacturer.Mfr_ID}
                className="block"
              >
                <h2 className="text-2xl mb-2 font-bold">
                  {manufacturer.Mfr_CommonName}
                </h2>
                <h3 className="font-medium">
                  {manufacturer.Mfr_Name.toLowerCase()}
                </h3>
                <p className="text-sm">{manufacturer.Country}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Manufacturers;
