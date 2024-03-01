import React from "react";
import BoxLayout from "../components/ui/BoxLayout";
import Header from "../components/layout/Header";
import PageTitle from "../components/ui/PageTitle";
import Breadcrumb from "../components/ui/Breadcrumb";

const Model = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Model" />
      <PageTitle>Mercedez Benz - AMG</PageTitle>
    </BoxLayout>
  );
};

export default Model;
