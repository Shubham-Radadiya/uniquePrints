import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import About from "./pages/about.js";
import Testimonial from "./pages/testimonial";


const App = () => {
  return (
    <div className="app-container">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
