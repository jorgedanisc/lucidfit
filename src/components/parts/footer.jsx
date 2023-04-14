
import React, { useEffect, useRef } from "react";
import "../styles/style.css";

import {
    Link,
    Outlet,
}from "react-router-dom";

let navbarToggle = 0; 

function Footer() {

    const footerRef = useRef()
  
    return (
        <div className="Footer"  ref={footerRef}>
            <div className="MainTextFooter">
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
                <Link to="/collection">COLLECTION</Link>
                <Link to="/support">SUPPORT</Link>
            </div>
            <div className="SecondTextFooter">
                <Link to="/">PRIVACY</Link>
                <Link to="/">SOCIALS</Link>
                <Link to="/">REGISTER</Link>
                <Link to="/">ABOUT US</Link>
                <Link to="/">ORDERS/REFUNDS</Link>
                <Link to="/">SHIPPING</Link>
            </div>
            <div className="LogoFooter">
                <Link to="/">0</Link>
            </div>
            <div className="LastIconFooter">
                <a>based in Portugal</a>
            </div>
        </div>
    );
  }
  
  export {Footer, navbarToggle};