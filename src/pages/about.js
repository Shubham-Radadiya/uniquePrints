import React from "react";
import Footer from '../components/Footer/index'
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="about_bg">
        <h1 className="about_heading">About Company</h1>
        <h3 className="about_sub_heading">Home About Company</h3>
      </div>
      <p className="about_text">
        BORKAR PACKAGING PVT. LTD. has been into existence since last Seven decades and is a professionally managed and environmentally conscious organization in packaging sector today in INDIA. Today we are the only packaging company in India having strong presence in almost every segment. Some of the highlights are listed below: <br />
      </p>

      <div className="about_sentence">
        -The only Packaging company where you will get all packaging solutions under one roof viz. Cut Labels, Sticker Labels, Mono Cartons, Fluted Cartons & Shippers. <br />
        -Highest Capacity of Foil Stamping Cartons in India. <br />
        -Highest Capacity of Liner Cartons in India. <br />
        -Environment friendly packaging - by removal of Met-pet and giving various Gravure options. <br />
        -Strong presence in Corrugation space - you will get wide range of cartons right from Micro, e-flute to B, C and A flute. <br />
        -We have recently taken over SURAKSHA PACKERS a renowned name in Corrugation Industry having Fully Automatic Corrugation Plant and Manual Plant at Goa, Pune & Pondicherry. <br />
        -Exports to Europe, East Africa, Middle East and Asian countries. <br />
        -Customer Oriented Professional and Dedicated Team. <br />
      </div>

      <div className="plan_flex">
        <img src="/image/Mask Group 19.png" alt="" style={{ width: '100%' }} />
        <div className="plan_bg">
          <div className="plan_contain">
            <h1 className="plan_heading">MISSION</h1>
            <p className="plan_text">“OUR MISSION is to give our customers the very best in packaging, keeping constantly in mind the latest developments, with that purpose, we are eagerly planning to meet the challenges of the FUTURE.”</p>
          </div>
        </div>
      </div>

      <div className="plan_flex">
        <div className="plan_bg">
          <div className="plan_contain">
            <h1 className="vision">VISION</h1>
            <p className="vision_text">Borkar Packaging, an ISO 9001-2008 company, is one of India's largest packaging companies involved in the design, development and manufacturing of folding cartons. We manufacture folding cartons worth 1200 MT per month.</p>
            <p className="vision_text">In a short span of time, Borkar Packaging has moved from just a single small factory to three full- fledged factories with modern facilities across India.</p>
          </div>
        </div>
        <img src="/image/Mask Group 20.png" alt="" style={{ width: '100%' }} />
      </div>

      <div className="eye_flex">
        <img src="/image/vision-3d-rendering-isometric-icon-png.png" alt="" />
        <div>
          <h1 className="eye_heading">VISION FOR THE FUTURE</h1>
          <p className="eye_text">-An expansion in the WEST REGION of INDIA <br />
            -VISION of plant in OVERSEAS in near future</p>
        </div>
        <img src="/image/business-aim-3d-icon-illustration-png.png" alt="" />
        <div>
          <h1 className="aim">AIM</h1>
          <p className="aim_text">-Quantity with Quality <br />
            -Quality with Assurance <br />
            -Assurance with Commitment <br />
            -Commitment with Service <br />
            -Service with Team-Work <br />
            -Team-Work with Leadership <br />
          </p>
        </div>
      </div>



      <Footer />
    </div>
  );
};
export default About;
