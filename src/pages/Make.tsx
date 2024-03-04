import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import SectionTitle from "../components/ui/SectionTitle";
import { useParams } from "react-router-dom";
import ProductModels from "../components/layout/make/ProductModels";
import ProducBodyTypes from "../components/layout/make/ProductBodyTypes";

const Make = () => {
  const { makeName, makeId } = useParams();

  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Make" />
      <PageTitle>{makeName}</PageTitle>
      <section>
        <SectionTitle>All Models</SectionTitle>
        <ProductModels makeId={makeId} />
      </section>
      <section>
        <SectionTitle>All Body Types</SectionTitle>
        <ProducBodyTypes makeId={makeId} />
      </section>
    </BoxLayout>
  );
};

export default Make;
