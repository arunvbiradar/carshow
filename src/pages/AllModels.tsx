import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import ProductList from "../components/layout/products/ProductList";
import Jumbotron from "../components/ui/Jumbotron";
import ProductSearch from "../components/layout/products/ProductSearch";

const AllModels = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="All Models" />
      <PageTitle>All Models</PageTitle>
      <Jumbotron />
      <ProductSearch page="search" />
      <ProductList list={24} />
      <Footer />
    </BoxLayout>
  );
};

export default AllModels;
