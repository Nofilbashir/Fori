import React from "react";
import { BrowserRouter as Router,Route,Routes,useParams,NavLink} from 'react-router-dom';
import "./banner5.css";
import {HiOutlineLightBulb} from "react-icons/hi"
function Banner5(){
    return(
        <>
        <div className="banner5">
            <div className="b5">
                <center>
                    <h1 className="b5_heading">Our Expertise</h1>
                    <p className="b5_para">We accelerate startups by rapid designing, development & deployment
                     of end-end technologies for impact focused startups. Fori also provides digital transformations
                      and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team,
                       Fori has you covered</p>
                </center>
                <div className="b5_box2">
                    
                    {/* <div className="b5_icon_box"><HiOutlineLightBulb className="b5_icon"/><p>investment</p></div> */}
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/ideabulb.png")} alt="img" /> </div><p>Design Thinking Workshops</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/search.png")} alt="img" />   </div><p>Gig Platform</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/hexagon.png")} alt="img" />  </div><p>Propriety  Algorithms</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/stock.png")} alt="img" />   </div><p>Investments |Finacials</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/setting.png")} alt="img" /> </div><p>DevOps</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/cloud.png")} alt="img" />   </div><p>Cloud | Analytics</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/house.png")} alt="img" />   </div><p>Prop Technologies</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/car.png")} alt="img" />     </div><p>Mobility Solutions</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/meeting.png")} alt="img" /> </div><p>Board | Advisory</p></div>
                    <div className="b5_icon_box"><div className="b5_icon_background"><img src={require("./iconsimg/brain.png")} alt="img" />   </div><p>AI/ML</p></div>
                </div>
                <NavLink className="dashBoard_link" to='/expertise'>Learn More</NavLink>
            </div>
        </div>

        </>
    )
}
export default Banner5;