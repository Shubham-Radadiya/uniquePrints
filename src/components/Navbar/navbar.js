import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="NavBar">
                <h3 className="logo_name">Unique <span style={{ color: "rgb(255, 67, 40)" }}>Print</span> </h3>
                <label>
                    <Link className="link_style" to="/">Home</Link>
                </label>
                <label>
                    <Link className="link_style" to="/services">Services</Link>
                </label>
                <label>
                    <Link className="link_style" to="/about">About</Link>
                </label>
                <label>
                    <Link className="link_style" to="/testimonial">Testimonial</Link>
                </label>
                <label>
                    <Link className="link_style" to="/contact">Contacts</Link>
                </label>
            </div>
        </>
    );
};
