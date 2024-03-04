import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import {
  fetchMakesForManufacturers,
  fetchManufacturerDetails,
} from "../../../lib/slices/manufacturerSlice";

const ManufacturerDetail = ({ id }: { id?: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  const manufacturerDetails = useSelector(
    (state: RootState) => state.manufacturers.manufacturerDetails[0],
  );
  const makes = useSelector((state: RootState) => state.manufacturers.makes);
  const loading = useSelector(
    (state: RootState) => state.manufacturers.loading,
  );
  const error = useSelector((state: RootState) => state.manufacturers.error);

  useEffect(() => {
    dispatch(fetchManufacturerDetails(id));
    dispatch(fetchMakesForManufacturers({ id }));
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <div className="flex flex-row flex-wrap -mx-2">
        {manufacturerDetails && (
          <>
            <div className="mb-12 w-full sm:w-1/2 px-2">
              <h2 className="font-medium text-2xl mb-2">Details</h2>
              <p>{manufacturerDetails.Mfr_Name}</p>
              {manufacturerDetails.PrincipalFirstName && (
                <p>
                  <strong>{manufacturerDetails.PrincipalPosition}:</strong>{" "}
                  &nbsp;
                  {manufacturerDetails.PrincipalFirstName}
                </p>
              )}
              {(manufacturerDetails.ContactEmail ||
                manufacturerDetails.ContactPhone) && (
                <p>
                  {manufacturerDetails.ContactEmail} <br />
                  {manufacturerDetails.ContactPhone}
                </p>
              )}
            </div>
            <div className="mb-12 w-full sm:w-1/2 px-2">
              <h2 className="font-medium text-2xl mb-2">Address</h2>
              <p>{manufacturerDetails.Address}</p>
              {manufacturerDetails.Address2 && (
                <p>{manufacturerDetails.Address2}</p>
              )}
              <p>
                {manufacturerDetails.Country},{" "}
                {manufacturerDetails.StateProvince}, {manufacturerDetails.City},{" "}
                {manufacturerDetails.PostalCode}
              </p>
            </div>
            {manufacturerDetails.VehicleTypes.length > 0 && (
              <div className="px-2 mb-12">
                <h2 className="font-medium text-2xl mb-2">Vehicle Types</h2>
                <div className="flex flex-row flex-wrap -mx-2">
                  {manufacturerDetails.VehicleTypes.map((type) => (
                    <div
                      key={type.Name}
                      className="w-full md:w-1/2 xl:w-1/3 px-2 mb-4"
                    >
                      <div className="p-4 bg-gray-100 rounded-md">
                        <h2 className="font-bold text-lg mb-2">{type.Name}</h2>
                        <p className="mb-2">
                          <strong>From:</strong> {type.GVWRFrom}
                        </p>
                        <p>
                          <strong>To:</strong> {type.GVWRTo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {makes.length > 0 && (
              <div className="px-2 w-full">
                <h2 className="font-medium text-2xl mb-2">Makes</h2>
                <div className="flex flex-row flex-wrap -mx-2">
                  {makes.map((make) => (
                    <div
                      key={make.Make_ID}
                      className="w-full md:w-1/2 xl:w-1/3 px-2 mb-4"
                    >
                      <div className="p-4 bg-gray-100 rounded-md">
                        <h2 className="font-bold text-lg mb-2">
                          {make.Make_Name}
                        </h2>
                        <p className="mb-2">{make.Mfr_Name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ManufacturerDetail;
