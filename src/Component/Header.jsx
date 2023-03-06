import React from "react";
import { NavLink } from "react-router-dom";
const Header=()=>{
    return(
        <>
        <div className="main_header">
        <header>
        <div className="logo">
        <h1>SoftTech</h1></div>
        <ul>
        <div className="list">
            <li><NavLink className="link" to="/" ><span>Home</span></NavLink></li>
            <li><NavLink className="link" to="/services"><span>Services</span></NavLink></li>
            <li><NavLink className="link" to="/about"><span>About</span></NavLink></li>
            <li><NavLink className="link" to="/contact"><span>Contact</span></NavLink></li></div>
        </ul>

        </header>
        
        </div>
        
        
        

        </>

    )

}
export default Header;