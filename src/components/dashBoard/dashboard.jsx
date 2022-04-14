import React ,{useState} from "react";
function DashBoard(){
    console.log(useState("waqar"));
    let val=useState("waqar",(e)=>"wiqi")[1];
    const clicked=()=> {

        val = "rai";
        console.log("hell", val);
    }
    
return(
    <>

    <h1>DashBoard page under construction<br/>{val}</h1>
    <button onClick={clicked}>click</button>
    </>
)
}
export default DashBoard;