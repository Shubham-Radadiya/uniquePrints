import React from "react";
import "./pages.css";
import HomeDetails  from "../components/HomeDetails"
import HomeBtn  from "../components/HomeBtn"
import HomeImg from "../components/HomeImg"
import DesignPgn from "../components/DesignPgn"
import Product from "../components/Product"
import Team from "../components/Team"
import Machine from "../components/Machine"
import ProductImg from "../components/ProductImg"
import Partners from "../components/Partners"
import Collection from "../components/Collection"
import Gallery from "../components/Galley"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <>
      <div>
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
        <div className="bg_productImg">
        <ProductImg />
        </div>
       
        <Machine />
        <Partners />
        <div className="bg_collection">
          <Collection />
        </div>
        <Gallery />
        <Footer />
      </div>
    </>
  );
};
export default Home;
