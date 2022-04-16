import React from "react";
import {AiOutlineLineChart} from "react-icons/ai"
import "./banner3.css";

import { NavLink} from 'react-router-dom';
function Banner3(){
    return(
        <div className="banner3">
        <div className="b3">
            <div className="b3_box1">
                <div className="b3_box1_header">
                <AiOutlineLineChart className="b3_icon"/>
                <h1>DASHBOARD</h1>
                </div>
                <p className="b3_box1_para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                 et vel. Deleniti ab cupiditate magnam tempore animi eligendi, accusantium commodi voluptates
                 et vel. voluptates hic harum consequuntur suscipit similique excepturi ad tenetur laborum enetur laboru.</p>
                  <NavLink className="dashBoard_link" to='/dashboard'>View our Dashboard</NavLink>
            </div>
            <div className="banner3_body_img">
            <img src={require("./dash.png")} alt="img" />
            </div>
        </div>

        </div>
    )
}
export default Banner3;