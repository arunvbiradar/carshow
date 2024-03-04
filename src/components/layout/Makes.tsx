import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMakes } from "../../lib/slices/makeSlice";
import { AppDispatch, RootState } from "../../lib/store";
import { Link } from "react-router-dom";

const Makes = () => {
  const dispatch = useDispatch<AppDispatch>();
  // makes
  const makes = useSelector((state: RootState) => state.makes.makes);
  const loading = useSelector((state: RootState) => state.makes.loading);
  const error = useSelector((state: RootState) => state.makes.error);

  useEffect(() => {
    dispatch(fetchMakes("car"));
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
    <>
      {makes && (
        <p className="mb-8">
          <strong>{makes.length}</strong> makes found
        </p>
      )}
      <div className="flex flex-wrap -mx-2">
        {makes &&
          makes.map((make) => (
            <div
              key={make.MakeId}
              className="px-2 mb-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              <Link
                to={`/make/${encodeURIComponent(make.MakeName)}/${make.MakeId}`}
                className="font-bold text-lg block p-4 bg-gray-50 grow text-center rounded-md border-2"
              >
                {make.MakeName}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Makes;
