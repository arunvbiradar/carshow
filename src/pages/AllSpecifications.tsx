import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import Specifications from "../components/layout/specification/Specifications";

const AllSpecifications = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Specifications" />
      <PageTitle>Specifications</PageTitle>
      <Specifications />
      <Footer />
    </BoxLayout>
  );
};

export default AllSpecifications;
