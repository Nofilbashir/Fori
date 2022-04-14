import React from "react";
import Cal_box1 from "./components/box1/cal_box1";
import Cal_box2 from "./components/box2/cal_box2";
import Cal_box3 from "./components/box3/cal_box3";
import Cal_box4 from "./components/box4/cal_box4";
import Footer from "../footer/footer";

function Calculations(){
return(
    <>
    <div className="calculations_page">
    <Cal_box1 />
    <Cal_box2 />
    <Cal_box3 />
    <Cal_box4 />
    </div>
    <Footer/>
    </>
)
}



export default Calculations;