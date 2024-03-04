import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import {
  fetchModelsForMake,
  fetchTypesForMake,
} from "../../../lib/slices/modelSlice";
const ProductModels = ({ makeId }: { makeId?: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const models = useSelector((state: RootState) => state.models.models);
  const loading = useSelector((state: RootState) => state.models.loading);
  const error = useSelector((state: RootState) => state.models.error);

  useEffect(() => {
    dispatch(fetchModelsForMake(makeId));
    dispatch(fetchTypesForMake(makeId));
  }, [dispatch]);

  if (loading) return <h2 className="mb-12">Loading...</h2>;
  if (error) return <h2 className="mb-12">{error}</h2>;

  return (
    <>
      <div className="flex flex-wrap -mx-4 mb-12">
        {models?.length > 0 &&
          models?.map((model) => (
            <ProductCard
              model={model}
              key={model.Model_ID}
              className="w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 px-4 mb-4"
            />
          ))}
      </div>
    </>
  );
};

export default ProductModels;
