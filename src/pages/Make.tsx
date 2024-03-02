import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Breadcrumb from "../components/ui/Breadcrumb";
import PageTitle from "../components/ui/PageTitle";
import Jumbotron from "../components/ui/Jumbotron";
import ProductList from "../components/layout/products/ProductList";
import SectionTitle from "../components/ui/SectionTitle";
import CompareProducts from "../components/layout/products/CompareProducts";

const Make = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Make" />
      <PageTitle>Mercedez Benz</PageTitle>
      <Jumbotron />
      <section>
        <SectionTitle>New Arrivals</SectionTitle>
        <ProductList list={5} />
      </section>
      <section>
        <SectionTitle>Top Models</SectionTitle>
        <ProductList list={4} />
      </section>
      <section>
        <SectionTitle>Best Sellers</SectionTitle>
        <ProductList list={4} />
      </section>
      <section>
        <SectionTitle>All Models</SectionTitle>
        <ProductList list={12} />
      </section>
      <section>
        <SectionTitle>Compare with Others</SectionTitle>
        <CompareProducts list={6} />
      </section>
    </BoxLayout>
  );
};

export default Make;
