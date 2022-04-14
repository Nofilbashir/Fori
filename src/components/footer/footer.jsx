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
    const feautures=["sample test","sample test","sample test","sample test","sample test",];
    return(
        <>
        <h4 className="f_feauture_heading">Feautures</h4>
        {feautures.map((feauture,index)=>{
    return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
function Company(){
    const companies=["sample test","sample test","sample test","sample test","sample test",];
    return(
        <>
        <h4 className="f_feauture_heading">Company</h4>
        {companies.map((feauture,index)=>{
           return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
function GetStarted(){
    const getstart=["sample test","sample test","sample test","sample test","sample test",];
    return(
        <>
        <h4 className="f_feauture_heading">Get Started</h4>
        {getstart.map((feauture,index)=>{
           return <p className="f_feauture_text" key={index}>{feauture}</p>
        })}
        </>
    )
}
export default Footer;