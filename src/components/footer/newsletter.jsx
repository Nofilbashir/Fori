import React, { useState } from "react";
import { usersRecords } from "./users";
function NewsLetter(){
    const [input,setInput]=useState({
        name:"",
        email:""
    });
    
    function suscribe(e){

        const inputName=e.target.name;
        const inputValue=e.target.value;
        setInput({...input,[inputName]:inputValue})
        // console.log(input)

    }
    const [record,setRecord]=useState();
    const register=(e)=>{
        e.preventDefault();
        setRecord(input);
        usersRecords.push(record);
        alert(`${input.name} you have suscribed to fori. You will get newsletter at this email address   ${input.email}`)
        setInput({
            name:"",
            email:""
        });
       

    }
    return(
        <>
        <h4 className="f_feauture_heading">WEEKLY NEWSLETTER</h4>
        <form className="f_form" onSubmit={register}>
            <input type="text" name="name"  id="name"placeholder="Name" className="f_name" value={input.name} onChange={suscribe}/>
            <input type="email" name="email" id="email" placeholder="Your Email" className="f_name" value={input.email} onChange={suscribe} />
            <button type="submit" id="suscribe" className="f_button">Suscribe</button>
        </form>
        </>
    )
}
export default NewsLetter;