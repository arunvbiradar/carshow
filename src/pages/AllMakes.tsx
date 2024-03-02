import React from "react";
import BoxLayout from "../components/layout/BoxLayout";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageTitle from "../components/ui/PageTitle";
import Breadcrumb from "../components/ui/Breadcrumb";
import Jumbotron from "../components/ui/Jumbotron";

const AllMakes = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="All Makes" />
      <PageTitle>All Makes</PageTitle>
      <Jumbotron />
      <section>
        <div className="flex flex-wrap gap-8">
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
          <div className="p-4 bg-gray-50 rounded-md border-2">Make</div>
        </div>
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default AllMakes;
