import React from "react";
import "./footer.css";
import Footerinfo from "./footer_info";
import NewsLetter from "./newsletter";
function Footer (){
    return(
        <footer className="footer_coopyright">
        <div  className="footer">
            <Footerinfo />
            <div className="f_feauttures">
                <Feautures />
            </div>
            <div className="f_Commpany">
                <Company />
            </div>
            <div className="f_getstarted">
                <GetStarted />
            </div>
            <div className="f_weeklyNewsletter">
                <NewsLetter />
            </div>
        </div>
        <div className="copyright">
            <p>@Copyright reserved</p>
        </div>
        </footer>
    )
}
function Feautures(){
    const feautures=["Advertisers","Developers","Resources","Company","Connect",];
    return(
        <>
        <h4 className="f_feauture_heading">NAVIGATE</h4>
        {feautures.map((feauture,index)=>{
    return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
function Company(){
    const companies=["Awards & Reviews","Press & Media","Company Blog","Contact Us"];
    return(
        <>
        <h4 className="f_feauture_heading">COMPANY</h4>
        {companies.map((feauture,index)=>{
           return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
function GetStarted(){
    const getstart=["Advertiser Agreement","Acceptable Use Policy","Technology Privacy","Developer Agreement"];
    return(
        <>
        <h4 className="f_feauture_heading">PRIVACY & TOS</h4>
        {getstart.map((feauture,index)=>{
           return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
export default Footer;