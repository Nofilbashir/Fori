import React from "react";
import Calbox1 from "./components/box1/cal_box1";
import Calbox2 from "./components/box2/cal_box2";
import Calbox3 from "./components/box3/cal_box3";
import Calbox4 from "./components/box4/cal_box4";
import Footer from "../footer/footer";

function Calculations(){
return(
    <>
    <div className="calculations_page">
    <Calbox1 />
    <Calbox2 />
    <Calbox3 />
    <Calbox4 />
    </div>
    <Footer/>
    </>
)
}



export default Calculations;