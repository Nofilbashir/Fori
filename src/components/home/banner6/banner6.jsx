import React from "react";
import "./banner6.css";
import {team} from "./profiledata"
function Banner6(){
    return(
        <>
        <div className="b6">
            <div className="b6_box">
                <center>
                <h1 className="b6_heading">Our Awesome Team</h1>
                <p className="b6_para">
Our inspiring and creative team draws on board experience and networks to create the most powerful outcomes for our clients.
</p>
                </center>
                <div className="b6_info">
                <PartnersTeam/>
                </div>
            </div>
        </div>
        </>
    )
}
function PartnersTeam(){
    return(
    team.map((person)=>{
    return(
        <div key={person.id} className="b6_card">
            <div className="b6_card_img">
        <img className="b6_cardimg" src={require(`${person.img}`)} alt="img" />
        </div>
        <h4 className="b6_card_name">{person.name}</h4>
            <div className="hr_circle">
            <hr className="b6_hr"/> <div className="b6_circle"/><hr className="b6_hr" />
            </div>
        <p className="b6_card_status">{person.status}</p>
        </div>
    )
}))}
export default Banner6;
export {PartnersTeam}