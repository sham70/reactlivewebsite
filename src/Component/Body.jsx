import React from "react";
import { NavLink } from "react-router-dom";

const Body=(props)=>{
    return(
        <>
        <div className="comn_bdy">
            <div className="text_bdy">
                <h1 id="txt">Welcome {props.name}</h1>
                <h2 id="txt"> <span>Grow your Business with </span><br/>
                <span>Soft Tech </span>                
                </h2>
                <p id="txt">We area the team of talented developer making websites</p>
                <button>
                <NavLink to={props.visit}>Get Started</NavLink>
                </button>
                
            </div>
            <div className="imgsrc_bdy">
                <img src={props.imgsrc} alt="home"/>
            </div>
            </div>
        </>)
}
export default Body;