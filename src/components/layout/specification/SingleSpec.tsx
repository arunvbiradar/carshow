import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import { fetchSingleSpec } from "../../../lib/slices/specificationSlice";

const SingleSpec = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const singleSpec = useSelector(
    (state: RootState) => state.specifications.singleSpec,
  );
  const loading = useSelector(
    (state: RootState) => state.specifications.loading,
  );
  const error = useSelector((state: RootState) => state.specifications.error);

  useEffect(() => {
    dispatch(fetchSingleSpec(id));
  }, [dispatch]);

  if (loading) return <h2 className="mb-12">Loading...</h2>;
  if (error) return <h2 className="mb-12">{error}</h2>;

  return (
    <div className="px-2 mb-12">
      <div className="flex flex-row flex-wrap -mx-2">
        {singleSpec.length > 0 ? (
          singleSpec.map((spec) => (
            <div
              key={"type.Name"}
              className="w-full md:w-1/2 xl:w-1/3 px-2 mb-4"
            >
              <div className="p-4 bg-gray-100 rounded-md">
                <h2 className="font-bold text-lg mb-2">{spec.Name}</h2>
                <p className="mb-2">{spec.ElementName}</p>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-2xl">No data found</h2>
        )}
      </div>
    </div>
  );
};

export default SingleSpec;
