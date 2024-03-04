import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import { fetchTypesForMake } from "../../../lib/slices/modelSlice";
import { Link } from "react-router-dom";

const ProducBodyTypes = ({ makeId }: { makeId?: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector((state: RootState) => state.models.loading);
  const error = useSelector((state: RootState) => state.models.error);
  const bodyTypes = useSelector((state: RootState) => state.models.makeTypes);

  useEffect(() => {
    dispatch(fetchTypesForMake(makeId));
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="flex flex-wrap -mx-4 mb-12">
        {bodyTypes?.length > 0 &&
          bodyTypes?.map((bodyType) => (
            <div
              key={bodyType.VehicleTypeId}
              className="w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-4 mb-4"
            >
              <div className="p-4 bg-gray-50 rounded-b-md border-b-2">
                <h3 className="font-bold text-xl">
                  <Link to={`/`}>{bodyType.VehicleTypeName}</Link>
                </h3>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProducBodyTypes;
