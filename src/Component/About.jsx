import React from "react";
import Body from "./Body";
import home from "../Images/home.jpg";
const About=()=>{
    return(
        <>
            <Body
                key={2}
                name="About Page"
                visit="/contact"
                imgsrc={home}
            />
        </>
    )
}
export default About;