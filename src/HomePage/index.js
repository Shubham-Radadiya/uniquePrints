import React from "react";
import "./index.css"
import HomeDetails from "../component/HomeDetails"
import HomeImg from "../component/HomeImg"
import HomeBtn from "../component/HomeBtn"
import DesignPgn from "../component/DesignPgn"
import Product from "../component/Product"
import Team from "../component/Team"
import ProductImg from "../component/ProductImg"
import Machine from "../component/Machine"
import Partners from "../component/Partners"
import Collection from "../component/Collection"
import Gallery from "../component/Galley"
import Footer from "../component/Footer"
import NavBar from "../NavBar";

export default function HomePage() {
 
  return (
    <>
      <div>
       <NavBar/>
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
        <Footer />
      </div>
    </>
  );
}
