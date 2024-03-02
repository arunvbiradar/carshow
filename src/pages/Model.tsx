import React from "react";
import BoxLayout from "../components/ui/BoxLayout";
import Header from "../components/layout/Header";
import PageTitle from "../components/ui/PageTitle";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductGallery from "../components/ui/products/ProductGallery";
import SectionTitle from "../components/ui/SectionTitle";
import ProductTopSpecs from "../components/ui/products/ProductTopSpecs";
import CompareProducts from "../components/ui/products/CompareProducts";
import Footer from "../components/layout/Footer";

const Model = () => {
  return (
    <BoxLayout>
      <Header />
      <Breadcrumb levels={1} page="Model" />
      <PageTitle>Mercedez Benz - AMG</PageTitle>
      <section className="flex -mx-4">
        <div className="flex w-full xl:w-3/4 px-4 flex-col">
          <ProductGallery />
          <ProductTopSpecs className="block xl:hidden" optionalRow={false} />
          <div className="mb-8 xl:mb-16">
            <SectionTitle>Variant Price</SectionTitle>
            <ul className="flex flex-wrap -mx-4">
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Variant Name</span>
                  <span>$2000</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="mb-8 xl:mb-16">
            <SectionTitle>Colors</SectionTitle>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandator">
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
              <figure className="shrink-0 snap-always snap-start rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=420"
                  alt="Car Name"
                  className="w-full"
                />
              </figure>
            </div>
          </div>
          <div className="mb-8 xl:mb-16">
            <SectionTitle>Specifications</SectionTitle>
            <ul className="flex flex-wrap -mx-4">
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
              <li className="w-full md:w-1/2 px-4">
                <div className="flex justify-between py-4 border-b-2">
                  <span>Fuel Type</span>
                  <span>Diesel</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <SectionTitle>Compare with Other Models</SectionTitle>
            <CompareProducts list={6} />
          </div>
        </div>
        <div className="w-1/4 px-4 hidden xl:block">
          <ProductTopSpecs />
        </div>
      </section>
      <Footer />
    </BoxLayout>
  );
};

export default Model;
