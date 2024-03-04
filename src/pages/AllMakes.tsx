import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import Breadcrumb from "../components/ui/Breadcrumb";
import Makes from "../components/layout/Makes";
import ProductSearch from "../components/layout/ProductSearch";

const AllMakes = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Makes" />
      <PageTitle>Makes</PageTitle>
      <section className="shrink-0 mb-auto">
        <ProductSearch />
        <Makes />
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default AllMakes;
