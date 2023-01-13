import React from "react";
import CardSec1 from "../cardS1/CardSec1";
import CardSec2 from "../cardS2/CardSec2";
import CardSec3 from "../cardS3/CardSec3";
import Section4 from "../section4/Section4";
import Welcome from "../welcomeBanner3/Welcome";
import Footer from "./../footer/Footer";
import Navbar2 from "./../navbar2/Navbar2";

const Home = () => {
  return (
    <>
      <Navbar2 />
      <Welcome />
      <Section4 />
      <CardSec1 />
      <CardSec2 />
      <CardSec3 />
      <Footer />
    </>
  );
};

export default Home;
