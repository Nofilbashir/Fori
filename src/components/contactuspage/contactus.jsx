import React,{useState} from 'react';
import {BsFillTelephoneFill} from "react-icons/bs";
import "./contactus.css";
import Footer from '../footer/footer';

  function Contact(){
        const [input,setInput]=useState({
            name:"",
            email:"",
            subject:"",
            message:""
        });
        
        function message(e){
    
            const inputName=e.target.name;
            const inputValue=e.target.value;
            setInput({...input,[inputName]:inputValue})
        }


        const [record,setRecord]=useState();
        const SendMessage=(e)=>{
            e.preventDefault();
            setRecord(input);
                console.log(input)
            // usersRecords.push(record);
            setInput({
            name:"",
            email:"",
            subject:"",
            message:""
        })
        }
    return(
        <>
        <div className='contact'>
        <div className="contact_box1">
            <center>
            <BsFillTelephoneFill className='contact_box1_icon'/>
            <p className='contact_text'>Get in Touch</p>
            <h3 className="contact_box1_heading">Contact with us</h3>
            <p className='contact_para'>Ideas, problems, suggestions? We would love to hear from you.
             Please contact us using the information below or by filling out the following form. A Fori representative
              will get back to you as soon as possible.
              </p>
            <form onSubmit={SendMessage} className="contact_box2_form">
            <input type="text" name="name"  id="name"placeholder="Name" className="contact_box2_input" value={input.name} onChange={message}/>
            <input type="email" name="email" id="email" placeholder="Your Email" className="contact_box2_input " value={input.email} onChange={message} />
            <input type="text" name="subject" id="subject" placeholder="Subject" className="contact_box2_input" value={input.subject} onChange={message} />
            <input type="text" name="message" id="message" placeholder="Message" className="contact_box2_input" value={input.message} onChange={message} />
            <button type="submit" id="suscribe" className="contact_button">Send Message</button>
        </form>

            </center>
            
        </div>
       
        </div>
         <Footer/>
        </>
    )
  }
  export default Contact;