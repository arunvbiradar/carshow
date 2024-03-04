import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import Breadcrumb from "../components/ui/Breadcrumb";
import Makes from "../components/layout/Makes";

const AllMakes = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Makes" />
      <PageTitle>Makes</PageTitle>
      <section>
        <Makes />
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default AllMakes;
