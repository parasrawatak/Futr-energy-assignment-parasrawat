import React from "react";
import './footer.scss';
import Fb from "../icon/facebook.png";
import tw from "../icon/Twitter.png";
import li from "../icon/linkedin.png";
import gg from "../icon/instagram.png"

const Footer=()=>{
    return(
        <>
        <div className="footer">
        <div className="icons">
            <img src={Fb}></img>
            <img src={tw}></img>
            <img src={li}></img>
            <img src={gg}></img>
        </div>
        <div className="f-mid">
        <div className="contactI">
            <h3>CONTACT US</h3>
            <span>123 Second Street Fifth Avenue,</span>
            <span>Manhattan,New York</span>
            <span>+987 654 3120</span>

        </div>
        <div className="links">
        <h3>ADDITIONAL LINKS</h3>
        <span>About us</span>
        <span>Terms and conditions</span>
        <span>Privacy policy</span>
        <span>News</span>
        <span>Contact us</span>
        </div>
        <div className="contactF">
        <h3>CONTACT </h3>
         <div className="form-p1">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
         </div>
         <div className="form-p2">
            <input placeholder="Comment"></input>
         </div>
        </div>
        </div>
        
            <button className="submit">submit</button>
       
        </div>
        </>
    )
}

export default Footer;