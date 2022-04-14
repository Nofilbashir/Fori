import React from "react";
import "./footer.css";
import {BsFillTelephoneFill}from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import{ImLocation}from"react-icons/im";
function Footerinfo (){
    return(
        <div className="f_fori_info">
        <img src={require("./logo.png")} alt="img" />
        <div className="f_text_icon"><BsFillTelephoneFill className="f_info_icon"/><span>123456789</span></div>
        <div className="f_text_icon"><MdEmail className="f_info_icon"/><span>1234@test.com</span></div>
        <div className="f_text_icon"><ImLocation className="f_info_icon"/><span>address@address</span></div>
    </div>
    )
}
export default Footerinfo;