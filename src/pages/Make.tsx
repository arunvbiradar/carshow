import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import SectionTitle from "../components/ui/SectionTitle";
import { useParams } from "react-router-dom";
import ProductModels from "../components/layout/make/ProductModels";
import ProducBodyTypes from "../components/layout/make/ProductBodyTypes";
import Footer from "../components/layout/Footer";

const Make = () => {
  const { makeName, makeId } = useParams();

  return (
    <BoxLayout>
      <Header />
      <Breadcrumb
        levels={2}
        page={makeName}
        levelPage={{ url: "", page: "make" }}
      />
      <div className="shrink-0 mb-auto mt-8">
        <section>
          <ProductModels makeId={makeId} />
        </section>
        <section>
          <SectionTitle>Body Types</SectionTitle>
          <ProducBodyTypes makeId={makeId} />
        </section>
      </div>
      <Footer />
    </BoxLayout>
  );
};

export default Make;
