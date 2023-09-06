import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import "./index.css";
import HomeDetails from "../HomeDetails";
import HomeImg from "../HomeImg";
import HomeBtn from "../HomeBtn";
import DesignPgn from "../DesignPgn";
import Product from "../Product";
import Team from "../Team";
import ProductImg from "../ProductImg";
import Machine from "../Machine";
import Partners from "../Partners";
import Collection from "../Collection";
import Gallery from "../Galley";
import Footer from "../Footer";

export default function HomePage() {
  const navigate = useNavigate();

  const homeclick = () => {
    navigate("/home");
  };
  const servicesclick = () => {
    navigate("/services");
  };
  const aboutcilck = () => {
    navigate("/about");
  };

  const testimonialscilck = () => {
    navigate("/testimonials");
  };

  const Contactcilck = () => {
    navigate("/contact");
  };

  return (
    <>
      <div>
        <div className="NavBar">
          <h3 className="logo_name"> Unique <span style={{ color: "rgb(255, 67, 40)" }}>Print</span> </h3>
          <label onClick={homeclick}>Home</label>
          <label onClick={servicesclick}>Services</label>
          <label onClick={aboutcilck}>About</label>
          <label onClick={testimonialscilck}>Testimonials</label>
          <label onClick={Contactcilck}>Contacts</label>

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/services" Component={Services} />
            <Route path="/about" Component={About} />
            <Route path="/testimonials" Component={Testimonials} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </div>
        <div className="bg">
          <div>
            <HomeDetails />
            <HomeBtn />
          </div>
          <HomeImg />
        </div>
        <div className="design_bg">
          <DesignPgn />
        </div>
        <div className="bg_product">
          <Product />
        </div>
        <Team />
        <ProductImg />
        <Machine />
        <Partners />
        <div className="bg_collection">
          <Collection />
        </div>
        <Gallery />
        <Footer/>
      </div>
    </>
  );
}
