import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../lib/store";
import { fetchMakes } from "../../lib/slices/makeSlice";
import { fetchTypesForMake, resetModels } from "../../lib/slices/modelSlice";
import { bodyTypes } from "../../data/bodyType";

const ProductSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [makeId, setMakeId] = useState<string>("440");
  const makeTypes = bodyTypes;

  useEffect(() => {
    dispatch(fetchMakes("car"));
    dispatch(fetchTypesForMake(makeId));
  }, [dispatch]);

  const handleBodyType = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMakeId("");
    dispatch(resetModels());
    setMakeId(e.target.value);
    dispatch(fetchMakes(e.target.value));
  };

  return (
    <section className="mb-2">
      <div className="flex -mx-4 flex-wrap">
        <div className="mb-6 px-4 w-1/2 lg:w-1/3 xl:w-1/4">
          <label htmlFor="make" className="font-bold mb-2 inline-block">
            Search by body Type
          </label>
          <select
            name="make"
            id="make"
            className="form-control"
            value={makeId}
            onChange={handleBodyType}
          >
            <option>Select a body Type</option>
            {makeTypes &&
              makeTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductSearch;
