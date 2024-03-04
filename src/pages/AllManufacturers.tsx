import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import Footer from "../components/layout/Footer";
import Manufacturers from "../components/layout/manufacturer/Manufacturers";

const AllManufacturers = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Manufacturers" />
      <PageTitle>Manufacturers</PageTitle>
      <section className="shrink-0 mb-auto">
        <Manufacturers />
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default AllManufacturers;
