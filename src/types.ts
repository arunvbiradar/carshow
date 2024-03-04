export interface MakeCar {
  MakeId: number;
  MakeName: string;
}
export interface Make {
  Make_ID: number;
  Make_Name: string;
}

export interface SingleSpec {
  Id: number;
  Name: string;
  ElementName: string;
}

export interface Specification {
  ID: number;
  Name: string;
  GroupName: string;
  Description: string;
}

export interface SpecificationState {
  loading: boolean;
  error: string | null;
  singleSpec: SingleSpec[];
  specifications: Specification[];
}

export interface MakeState {
  makes: MakeCar[];
  makeDetails: MakeDetail[];
  loading: boolean;
  error: string | null;
}

export interface MakeDetail {
  Make_ID: number;
  Make_Name: string;
  Mfr_Name: string;
}

export interface Manufacturer {
  Mfr_ID: number;
  Mfr_Name: string;
  Mfr_CommonName: string;
  Country: string;
}

export interface ManufacturerState {
  makes: MakeManufacturer[];
  manufacturers: Manufacturer[];
  loading: boolean;
  manufacturerDetails: ManufacturerDetails[];
  error: string | null;
}

export interface ManufacturerVehicleType {
  GVWRFrom: string;
  GVWRTo: string;
  Name: string;
}

export interface ManufacturerDetails {
  City: string;
  Address: string;
  Country: string;
  Mfr_Name: string;
  Address2?: string;
  PostalCode?: string;
  StateProvince: string;
  ContactEmail?: string;
  ContactPhone?: string;
  PrincipalPosition?: string;
  PrincipalFirstName?: string;
  VehicleTypes: ManufacturerVehicleType[];
}

export interface MakeManufacturer extends Make {
  Mfr_Name: string;
}

export interface Model {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface MakeType {
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface ModelSlice {
  models: Model[];
  makeTypes: MakeType[];
  loading: boolean;
  error: string | null;
}
