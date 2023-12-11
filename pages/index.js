import Details from "@/src/components/Details";
import Detailsadd from "@/src/components/Detailsadd";
import End from "@/src/components/End";
import Header from "@/src/components/Header";
import LandedPage from "@/src/components/LandedPage";
import Testimonials from "@/src/components/Testimonials";
import React from "react";

const index = () => {
  return (
    <div>
      <Header />
      <LandedPage />
      <Details />
      <Detailsadd />
      <Testimonials />
      <End />
    </div>
  );
};

export default index;
