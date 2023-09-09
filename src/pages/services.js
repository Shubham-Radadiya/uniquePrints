import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div>
      <div className="services_bg">
        <h1 className=" services_heading">Product And Services</h1>
        <h3 className=" services_sub_heading">Home product and services</h3>
      </div>

      <div className="product_flex">
        <img src="/image/Mask Group 21.png" alt="" className="product_img" />
        <img src="/image/Mask Group 33.png" alt="" className="product_img" />
      </div>
      <div className="product_flex">
        <div className="product_contain">
          <h1>BUILDING CUSTOMERS' BRANDS</h1>
          <p>We make customize packaging that include punching, embossing, pasting, foil stamping, hot-stamping of holograms on to the cartons for some of the best-known branded products in the world. Our attention-getting packaging is an important part of clients product branding.</p>
          <p>Through superior design, engineering and technology-plus unparalleled customer service and quick and reliable delivery-we occupy a leading position in carton packaging for our market categories: FMCG, Pharma, Food and Beverage, Liquor, Household products and Personal-care and Specialty products.</p>
        </div>

        <div className="product_contain">
        <h1>BUILDING CUSTOMERS' BRANDS</h1>
          <p>We make customize packaging that include punching, embossing, pasting, foil stamping, hot-stamping of holograms on to the cartons for some of the best-known branded products in the world. Our attention-getting packaging is an important part of clients product branding.</p>
          <p>Through superior design, engineering and technology-plus unparalleled customer service and quick and reliable delivery-we occupy a leading position in carton packaging for our market categories: FMCG, Pharma, Food and Beverage, Liquor, Household products and Personal-care and Specialty products.</p>
        </div>

      </div>

    </div>
  );
};
export default Services;
