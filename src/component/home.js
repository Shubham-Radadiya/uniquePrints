import React from "react";
import "../style/index.css"
import HomeDetails from "./HomeDetails"
import HomeImg from "./HomeImg"
import HomeBtn from "./Collection"
import DesignPgn from "./DesignPgn"
import Product from "./Product"
import Team from "./Team"
import ProductImg from "./ProductImg"
import Machine from "./Machine"
import Partners from "./Partners"
import Collection from "./Collection"
import Gallery from "./Galley"
import Footer from "./Footer"


export default function Home() {
 
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
