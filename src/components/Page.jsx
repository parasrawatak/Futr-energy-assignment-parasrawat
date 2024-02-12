import React from "react";
import Travel from "../images/travel-banner.jpeg"
import "./page.scss"
import { colors } from "@mui/material";
const Page= () =>{
    return (
        <>
        <div className="hero">
         <div className="hero-title">
            <span className="t1">TRAVEL</span>
            <span className="t2">WITH US</span>
         </div>
         <button className='btn-main'>Read more</button>
         <div className="hero-form">
         <div className="form-title">
            <span>Find Your Tour</span>
         </div>
         <div className="form-main">
         <div className="form-col">
         <span>Keywords</span>
         <input className="input-box"></input>
         <input className="input-box input-box-h"></input>
         <span>Duration</span>
         <input placeholder="Any" className="input-box"></input>
         </div>
         <div className="form-col">
         <span>Category</span>
         <input placeholder="Any" className="input-box"></input>
         <input placeholder="Any" className="input-box"></input>
         <span>Date</span>
         <input type="date" className="input-box"></input>
         </div>
         <div className="form-col">
         <span >Min Price</span>
         <input placeholder="00.0" className="input-box"></input>
         <input className="input-box input-box-h"></input>
         <span>Max Price</span>
         <input placeholder="00.0" className="input-box"></input>
         </div>
         <div className="form-search">
         <button className="btn-main2" >Search</button>
         </div>
         </div> 
        </div>
        </div>
        </>
    )
}

export default Page;