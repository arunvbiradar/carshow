import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import { fetchSpecifications } from "../../../lib/slices/specificationSlice";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Specifications = () => {
  const dispatch = useDispatch<AppDispatch>();

  const specs = useSelector(
    (state: RootState) => state.specifications.specifications,
  );
  const loading = useSelector(
    (state: RootState) => state.specifications.loading,
  );
  const error = useSelector((state: RootState) => state.specifications.error);

  useEffect(() => {
    dispatch(fetchSpecifications());
  }, [dispatch]);

  if (loading) return <h2 className="mb-12">Loading...</h2>;
  if (error) return <h2 className="mb-12">{error}</h2>;

  return (
    <div className="flex flex-wrap -mx-4">
      {specs.length > 0 &&
        specs.map((spec) => (
          <div
            key={spec.ID}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/2 px-4 mb-4"
          >
            <Link
              to={`/specification/${spec.Name}/${spec.ID}`}
              className="block"
            >
              <div className="bg-gray-100 border-b-2 p-4 rounded-md">
                <h2 className="font-bold text-xl mb-2">{spec.Name}</h2>
                <p>
                  <strong>{spec.GroupName}</strong>
                </p>
                <p className="mb-2 spec-description">
                  {parse(spec.Description)}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Specifications;
