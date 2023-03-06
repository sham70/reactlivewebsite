import React, { useState } from "react";

const Forms=()=>{

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
        
    });
    const[arr,setArr]=useState([]);

    const Inputfield=(event)=>{

        const {name,value}=event.target;

        setData((preval)=>{
            return{
                ...preval,
                [name]:value
            }

        })
        
    }
    const OnSubmit=(event)=>{
        event.preventDefault();
        // console.log(arr);
        return(
            alert(data.fullname )
        )
        
        
    }
    

    return(
        <>
            <div className="main_form">
                <form >
                <p>FullName:</p>
                    <input type="text" name="fullname" onChange={Inputfield} value={data.fullname}></input>

                <p>Phone:</p>
                    <input type="number" name="phone" onChange={Inputfield} value={data.phone}></input>

                <p>Email:</p>
                    <input type="email" name="email" onChange={Inputfield} value={data.email}></input>

                <p>Message:</p>
                    <input type="text" className="msg" name="message" onChange={Inputfield} value={data.message}></input>
                    <div className="submit">
                    <button onClick={OnSubmit}>Submit</button></div>


                    {/* <p>{arr.map((val)={
                        return(
                            nam={val.fullname}
                        )
                        
                    })
                    }</p> */}
                </form>
            </div>
        </>
    )
}
export default Forms;