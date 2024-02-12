import React,{useState} from "react";
import "./navbar.scss"
import PlaceIcon from '../images/p1.png';
import EmailIcon from '../images/m3.png';
import LocalPhoneIcon from '../images/t1.png';
import Logo from '../images/logo-2.png';

const Navbar = () =>{
    return(
    <>
     <div className="nav">
       <img  src={Logo} className="global"></img>
       <div className="navc1">
       <div className="navc2"> 
      <img className="icon" src={PlaceIcon}></img>
      <span className="nav-info">145.street road New York</span>
       </div>
       <div className="navc2">
      <img className="icon" src={EmailIcon}></img>
      <span className="nav-info">+71 7823981290</span>
       </div>
       <div className="navc2">
      <img className="icon" src={LocalPhoneIcon}></img>
      <span className="nav-info">demo@email.com</span>
       </div>
       </div>
       <div className="links">
         <span>Home</span>
         <span>About</span>
         <span>Travel</span>
         <span>Blog</span>
         <span>Contact Us</span>
       </div>
     </div>  
     </> 
    )
}

export default Navbar;