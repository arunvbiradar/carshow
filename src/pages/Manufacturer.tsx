import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import ManufacturerDetail from "../components/layout/manufacturer/ManufacturerDetail";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";

const Manufacturer = () => {
  const { name, id } = useParams();

  return (
    <BoxLayout>
      <Header />
      <Breadcrumb
        levels={1}
        page={name}
        levelPage={{ url: "all-manufacturers", page: "manufacturer" }}
      />
      <PageTitle>{name}</PageTitle>
      <section className="mb-auto shrink-0">
        <ManufacturerDetail id={id} />
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default Manufacturer;
