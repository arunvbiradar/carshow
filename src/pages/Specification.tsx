import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import SingleSpec from "../components/layout/specification/SingleSpec";
import { useParams } from "react-router-dom";

const Specification = () => {
  const { name, id } = useParams();
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Specifications" />
      <PageTitle>{name}</PageTitle>
      <SingleSpec id={id} />
      <Footer />
    </BoxLayout>
  );
};

export default Specification;
