import React, { useState } from "react";

import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import Slider from "../components/Slider";
import ProductsSection from "../components/ProductsSection";

import {
  PopularProducts,
  LatestProducts,
} from "../components/ProductsSection/data";

import banner from "../assests/salebanner.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={!isOpen} toggle={toggle} />

      <Slider image={banner} />
      <ProductsSection {...PopularProducts} />
      <ProductsSection {...LatestProducts} />

      <Footer />
    </>
  );
};

export default Home;
