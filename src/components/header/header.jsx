import React, { useState } from 'react';
import { BrowserRouter as Router,Route,Routes,useParams,NavLink} from 'react-router-dom';
import "./header.css"
import Home from "../home/home";
import DashBoard from '../dashBoard/dashboard';
import Calculations from"../calculations/calculation";
import SignUp from '../signUp/signup';
import Partners from '../partnerpage/partner';
import Contact from '../contactuspage/contactus';
import Services from '../services/services';
import Expertise from '../expertise/expertise';
import Products from '../products/products';
import ScrollToTop from '../scroll'
function Header(){
  const[click,setClick]=useState("true")




  const[ mob_nav_class, setmob_nav_class] = useState('on_closed');

  const handleClick=()=>{
    
   setClick(!click)
   if(mob_nav_class==="on_closed"){
   setmob_nav_class("mob_links")
  }
   else if(mob_nav_class==="mob_links"){
     setmob_nav_class("on_closed")
   }
   return 0
  }

    return(
      <Router>
        <ScrollToTop />
   

      <div className="NavBar" >
      
      <img className="icon" src={require("./logo.png")} alt="icon"/>

      <div className="lap_links">
      <NavLink  to='/' className="lap_a" >Home</NavLink>
      <NavLink className="lap_a" to='/product'>Product</NavLink>
      <NavLink className="lap_a" to='/team'>Partners</NavLink>
      <NavLink className="lap_a" to='/services'>Services</NavLink>
      <NavLink className="lap_a" to='/Contact'>Contact </NavLink>
      </div>
   
      <div className={mob_nav_class}>
      <NavLink  to='/' className="mob_a" onClick={handleClick}>Home</NavLink>
      <NavLink className="mob_a" to='/product'onClick={handleClick}>Product</NavLink>
      <NavLink className="mob_a" to='/team'onClick={handleClick}>Partners</NavLink>
      <NavLink className="mob_a" to='/services'onClick={handleClick}>Services</NavLink>
      <NavLink className="mob_a" to='/Contact'onClick={handleClick}>Contact </NavLink>
      </div>

      <NavLink className="signUp_link" to='/signup'>Sign Up</NavLink>

     
      </div>
    
      <div className="navbar_responsive_btn" onClick={handleClick} >{click?<div className='three_lines'><hr/><hr/><hr/></div>:<div className='cross_lines'><hr className='cross_1'/><hr className='cross_2'/></div>}</div>






      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/team" element={<Partners />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/dashboard" element={<DashBoard />}></Route>
      <Route path="/calculator" element={<Calculations />}></Route>
      <Route path="/expertise" element={<Expertise />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/:value" element={<AnyPage />}></Route>
      </Routes>
     
    
    
     </Router>
    )
}
  // function Product(){
  //   return <h1>Product page under construction</h1>
  // }
 

  function AnyPage(){
    const { value} = useParams();
    return (
      <>
      <h1>Page Not Found</h1>
      <h1>your typed :"{value}" </h1>
      </>
    )
  }
  export default Header;
  