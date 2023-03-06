import React from "react";
import { NavLink } from "react-router-dom";

const Card=(props)=>{
    return(
        <>
            <div className="card">
            <div className="card_img">
                <img src={props.imgsrc} alt="Random Pics"/></div>
                <div className="card_detail">
                <h3>{props.title}</h3>
                <p>{props.detail}</p></div>
                <button>
                    <NavLink to={props.link}>Watch Now</NavLink>
                </button>
            </div>
        </>
    )
}
export default Card;