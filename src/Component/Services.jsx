import React from "react";
import Card from "./Card";
import Cdata from "./Cdata";
const Services=()=>{
    return(
        <>
        <div className="service_bdy"> 
        <div className="tag"> <h1>
        Serivces page
             </h1></div>
    <div className="card_create">
    {Cdata.map((val, indx)=>{
        return(
            <Card
                key={indx}
                imgsrc={val.imgsrc}
                title={val.title}
                detail={val.detail}
                link={val.link}
            />

        )
        

    })}</div>
    </div>
        </>
    
    )

}
export default Services;