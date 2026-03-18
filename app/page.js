"use client"
import { useEffect, useState } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
// import Services from "./component/Services";
import Experience from "./component/Experience";
import Work from "./component/Work";
// import Certificates from "./component/Certificates";

export default function Home() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Services /> */}
      <Work />
      <Experience />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </>
  );
}
