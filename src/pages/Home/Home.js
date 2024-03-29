import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import "./Home.css";
import Newsletter from "./Newsletter";
import OurProducts from "./OurProducts";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <BusinessSummary />
      <Reviews />
      <OurProducts />
      <Newsletter />
    </div>
  );
};

export default Home;
