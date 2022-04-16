import React from "react";
import { NavLink} from 'react-router-dom';
import "./banner4.css";
import {BsFileSpreadsheet} from "react-icons/bs"
function Banner4(){
    return(
        <>
        <div className="banner4">
            <div className="b4">
            <div className="banner_4_img">
            <img src={require("./calculatorimg.png")} alt="img" />
            </div>
            <div className="b4_box2">
                <div className="b4_box2_header">
                <h1>CALCULATIONS</h1>
                <BsFileSpreadsheet className="b4_icon"/>
                </div>
                <p className="b4_box2_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusantium doloremque
                     dignissimos molestias nobis fuga quas, dolore nesciunt voluptates suscipit sapiente vitae
                      mollitia? Ipsa rem veniam, voluptate earum ipsum nemo.</p>
                      <NavLink className="dashBoard_link" to='/calculator'>View Calculator</NavLink>
            </div>
            </div>
        </div>

        </>
    )
}
export default Banner4;