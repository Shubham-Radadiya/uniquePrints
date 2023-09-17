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
      we were working since 2004 on printing products designs and Packaging Material Manufacturing, on continuously success we established our company.
 
      </p>

      <div className="about_sentence">
      Established 2018, Unique Print is dedicatedly involved in Manufacturing, Supplying and Service Providing a supreme quality assortment of Duplex Folding Cartons, Mono Cartons, Blister Cards, Lamination Services, Die Cutting And Punching Services, Embossing Card, Hot Foil Stamping Services, UV Printed Products, Conventional Printed Products and Paper Labels. These products and services are highly acknowledged for their finest quality, alluring designs, elegant looks, longer working life, fine finish and enhanced durability. 

      </div>
      <div>
        <div className="plan_flex">
          <img src="/image/Mask Group 19.png" alt="" className="mision" />
          <div className="plan_bg">
            <div className="plan_contain">
              <h1 className="plan_heading">MISSION</h1>
              <p className="plan_text">“Our mission is to embrace our guiding values that focus on developing and empowering our team members. As
a result, our team will create valued, trusted, and long lasting relationships
with both customers and suppliers.
”</p>
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
          <img src="/image/Mask Group 20.png" alt="" className="mision" />
        </div>
      </div>
      <div className="eye_container_flex">
        <div className="eye_flex">
        <img src="/image/vision-3d-rendering-isometric-icon-png.png" alt="" />
        <div>
          <h1 className="eye_heading">VISION FOR THE FUTURE</h1>
          <p className="eye_text">-An expansion in the WEST REGION of INDIA <br />
            -VISION of plant in OVERSEAS in near future</p>
        </div>
        </div>
       
        <div className="aim_flex">
          <img src="/image/business-aim-3d-icon-illustration-png.png" alt="" className="aim_img" />

          <p className="aim_text"> <span className="aim_name">AIM</span> <br />-Quantity with Quality <br />
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
