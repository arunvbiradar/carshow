import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMakesForManufacturers,
  fetchManufacturers,
  resetManufacturers,
} from "../../../lib/slices/manufacturerSlice";
import { AppDispatch, RootState } from "../../../lib/store";
import { Link } from "react-router-dom";
import { fetchMakes } from "../../../lib/slices/makeSlice";

const Manufacturers = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [makeId, setMakeId] = useState<string>("");

  // manufacturers
  const manufacturers = useSelector(
    (state: RootState) => state.manufacturers.manufacturers,
  );
  const manufacturerMake = useSelector(
    (state: RootState) => state.manufacturers.makes,
  );
  const makes = useSelector((state: RootState) => state.makes.makes);
  const loading = useSelector(
    (state: RootState) => state.manufacturers.loading,
  );
  const error = useSelector((state: RootState) => state.manufacturers.error);

  useEffect(() => {
    dispatch(fetchMakes("car"));
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

  const handleMakeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMakeId(e.target.value);
    dispatch(resetManufacturers());
    dispatch(
      fetchMakesForManufacturers({
        name: e.target.selectedOptions[0].innerText,
      }),
    );
  };

  return (
    <>
      <section className="mb-2">
        <div className="flex -mx-4 flex-wrap">
          <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
            <label htmlFor="make" className="font-bold mb-2 inline-block">
              Search by Make
            </label>
            <select
              name="make"
              id="make"
              value={makeId}
              className="form-control"
              onChange={handleMakeChange}
            >
              <option>Select a Make</option>
              {makes &&
                makes.map((make) => (
                  <option key={make.MakeId} value={make.MakeId}>
                    {make.MakeName}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </section>

      {manufacturers.length == 0 && manufacturerMake.length == 0 && (
        <h2 className="text-2xl mb-12">
          Manufacturer data not available for the make.
        </h2>
      )}

      {manufacturers.length > 0 && (
        <>
          <p className="mb-8">
            <strong>{manufacturers.length}</strong> manufacturers found
          </p>
          <div className="flex flex-wrap -mx-2">
            {manufacturers.map((manufacturer) => (
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
        </>
      )}

      {manufacturerMake.length > 0 && (
        <>
          <p className="mb-8">
            <strong>{manufacturerMake.length}</strong> manufacturers found
          </p>
          <div className="flex flex-wrap -mx-2">
            {manufacturerMake.map((make) => (
              <div
                key={make.Make_ID}
                className="px-2 mb-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-full"
              >
                <div className="border-2 bg-gray-200 p-4 rounded-md capitalize h-full">
                  <Link
                    to={`/manufacturer/${encodeURIComponent(make.Make_Name)}/${make.Make_ID}`}
                    key={make.Make_ID}
                    className="block"
                  >
                    <h2 className="text-2xl mb-2 font-bold">
                      {make.Make_Name}
                    </h2>
                    <h3 className="font-medium">
                      {make.Mfr_Name.toLowerCase()}
                    </h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Manufacturers;
