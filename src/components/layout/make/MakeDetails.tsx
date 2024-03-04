import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import { fetchMakeDetails } from "../../../lib/slices/makeSlice";
import SectionTitle from "../../ui/SectionTitle";

const MakeDetails = ({ makeId }: { makeId?: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const makeDetails = useSelector(
    (state: RootState) => state.makes.makeDetails,
  );
  const loading = useSelector((state: RootState) => state.makes.loading);
  const error = useSelector((state: RootState) => state.makes.error);

  useEffect(() => {
    dispatch(fetchMakeDetails(makeId));
  }, [dispatch]);

  if (loading) return <h2 className="mb-12">Loading...</h2>;
  if (error) return <h2 className="mb-12">{error}</h2>;

  return (
    <div className="mb-12">
      <SectionTitle>Manufacturers</SectionTitle>
      {makeDetails.map((make) => (
        <div className="mb-8">
          <h2 className="text-2xl mb-2 capitalize">
            {make.Make_Name.toLocaleLowerCase()}
          </h2>
          <h3 className="">{make.Mfr_Name.toLocaleLowerCase()}</h3>
        </div>
      ))}
    </div>
  );
};

export default MakeDetails;
