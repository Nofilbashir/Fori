import React from "react";
import "./banner7.css";
import {partners} from "./partnerslogo/partners"
function Banner7(){
    return(
        <>
       <div className="b7">
            <div className="b7_box">
                <center>
                <h1 className="b7_heading">Our Powerful Partners</h1>
                <p className="b7_para">We have strong partnership with these retailers 
</p>
                </center>
                <div className="b7_info">
                    {partners.map((partner)=>{
                        return(
                            <div key={partner.id} className="b7_card">
                            <img className="b7_cardimg" src={require(`${partner.img}`)} alt="img" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default Banner7;