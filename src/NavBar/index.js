import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "../Home"
import Services from "../Services"
import About from "../About";
import Testimonials from "../Testimonials"
import Contact from "../Contact"

export default function NavBar(){
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
  
    return(
        <>
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
        </>
    )
}