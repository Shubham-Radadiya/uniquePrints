import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style/navStyle.css"
import { Link } from "react-router-dom";


export default function NavBar() {

  return (
    <>
      <div className="NavBar">
        <h3 className="logo_name"> Unique <span style={{ color: "rgb(255, 67, 40)" }}>Print</span> </h3>
        {/* <label onClick={homeclick}>Home</label>
          <label onClick={servicesclick}>Services</label>
          <label onClick={aboutcilck}>About</label>
          <label onClick={testimonialscilck}>Testimonials</label>
          <label onClick={Contactcilck}>Contacts</label>
           */}
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contacts</Link>
        {/* <Routes>
          <Route path="/" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/about" Component={About} />
          <Route path="/testimonials" Component={Testimonials} />
          <Route path="/contact" Component={Contact} />
        </Routes> */}
      </div>
    </>
  )
}