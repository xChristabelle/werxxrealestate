import React, { useState } from "react";
import Navbar from "@/components/Sales/Navbar";
import HeroSection from "@/components/Sales/HeroSection";
import InfoSection from "@/components/Sales/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "@/components/Sales/InfoSection/Data";
import Reviews from "@/components/Sales/Reviews";
import Pricing from "@/components/Sales/Pricing";
import ContactForm from "@/components/Sales/ContactForm";
import Footer from "@/components/Sales/Footer";

const Sales = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Reviews />
      <Pricing />
      <ContactForm  />
      <Footer />
    </React.Fragment>
  );
};

export default Sales;
