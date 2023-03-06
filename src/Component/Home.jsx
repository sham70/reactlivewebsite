import React from "react";
import home from "../Images/home.jpg";
import Body from "./Body";
const Home=()=>{
    return(
        <>
            <Body
                key={1}
                name="Home Page"
                visit="/services"
                imgsrc={home}
            />
        </>
    )

}
export default Home;