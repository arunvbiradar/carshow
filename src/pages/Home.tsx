import React from "react";
import Header from "../components/layout/Header";
import BoxLayout from "../components/layout/BoxLayout";
import Footer from "../components/layout/Footer";
import ProductSearch from "../components/layout/products/ProductSearch";
import Jumbotron from "../components/ui/Jumbotron";
import SectionTitle from "../components/ui/SectionTitle";
import ProductList from "../components/layout/products/ProductList";
import CompareProducts from "../components/layout/products/CompareProducts";

const Home = () => {
  return (
    <BoxLayout>
      <Header />
      <Jumbotron />
      <ProductSearch page="home" />
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
        <SectionTitle>Compare with Others</SectionTitle>
        <CompareProducts list={6} />
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default Home;
