import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { IoMenuOutline } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
export const Navbar = () => {
    return (
        <>
            <div className="header">
                <h2 className="logo">Unique<span style={{ color: "rgb(255, 67, 40)" }}> Print</span></h2>
                <input type="checkbox" id="chk" />
                <label htmlFor="chk" className="show-menu-btn">
                    {/* <i className="fas fa-bars" /> */}
                    <IoMenuOutline />
                </label>

                <div className="menu">

                    <a className="link_style" href="/">Home</a>

                    <a className="link_style" href="/services">Services</a>

                    <a className="link_style" href="/about">About</a>

                    <a className="link_style" href="/testimonial">Testimonial</a>

                    <a className="link_style" href="/contact">Contacts</a>

                    <label htmlFor="chk" className="hide-menu-btn">
                        <RxCross1 />
                    </label>
                </div>
            </div>
        </>
    );
};
