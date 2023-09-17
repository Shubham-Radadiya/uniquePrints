import React from "react";
import "./contact.css";
import Footer from "../components/Footer";
import { RiContactsFill } from 'react-icons/ri'
import { IoHome, IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from 'react-icons/bi'
const Contact = () => {
  return (
    <div>
      <div className="contact_bg">
        <h1 className="contact_heading">Contact Us</h1>
        <h3 className="contact_sub_heading">Home Contact Us</h3>
      </div>

<div className="contain_flex">
      <div className="icon_contain">
        <div className="icon_flex">
          <RiContactsFill className="icon" />
          <p> uniqueprints09@gmail.com</p>
        </div>

        <div className="icon_flex">
          <IoHome className="icon"/>
          <p>+91 76000 64465</p>
        </div>

        <div className="icon_flex">
          <IoMail className="icon"/>
          <p>production@uniqueprints.in</p>
        </div>

        <div className="icon_flex">
          <BiSolidPhoneCall className="icon"/>
          <p>+91 98242 30935</p>
        </div>

        <h2>Location</h2>
        <address>341/5A.bharat Indl.Estate Area BhimPore Village,Daman,Gujrat-396210</address>
      </div>
      <img src="/image/googlemaps.jpg" alt="" className="map"/>
      </div>

      <Footer />
    </div>

  );
};
export default Contact;
