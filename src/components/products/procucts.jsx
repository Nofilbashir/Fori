import React from "react";
import Footer from "../footer/footer";
import Banner7 from '../home/banner7/banner7';
import { PartnersTeam } from "../home/banner6/banner6";
import "./products.css"

 function Products(){
    return(
    <>
    <div className="partner">
        <div className="partner_box1">
    <img className="partner_box1_img" src={require("./Teamgoals-bro.png")} alt="img"/>
    </div>
        <center>
            <div className="partner_team_header">
                <h1 className="b6_heading ">Our Team</h1>
                <img className="partner_team_header_img" src={require("./forilogo.png")} alt="img"/>
                </div>
                <p className="b6_para partner_team_box-p">Our inspiring and creative team draws on board experience and
                 networks to create the most powerful outcomes for our clients.</p>
                </center>
        <div className="b6_info partner_team_box">
                <PartnersTeam />
        </div>
        <Banner7 />
        <Footer />
     
    </div>
    </> 
    )
  }
  export default Products;