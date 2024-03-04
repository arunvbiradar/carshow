import React from "react";
import Header from "../components/layout/Header";
import BoxLayout from "../components/layout/BoxLayout";
import Footer from "../components/layout/Footer";
import ProductSearch from "../components/layout/make/ProductSearch";

const Home = () => {
  return (
    <BoxLayout>
      <Header />
      <ProductSearch page="home" />
      <Footer />
    </BoxLayout>
  );
};

export default Home;
