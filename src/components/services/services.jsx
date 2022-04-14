import React from 'react';
import "./services.css";
import Footer from "../footer/footer";
function Services(){
    const databox2=[
        {img:"search.png" ,p:"Properity",p2:"Algorithms"},
        {img:"car.png" ,p:"Mobility",p2:"Solutions"},
        {img:"cloud.png" ,p:"Analytics",p2:""},
        {img:"brain.png" ,p:"AI/ML",p2:""},
        {img:"cloud.png" ,p:"Analytics",p2:""},
        {img:"cloud.png" ,p:"Analytics",p2:""} 
      ]
   
    return(
        <>
        <div className="services_box1">
        <center>
        <img className='services_top_icon' src={require("./servicesicon.jpg")} alt="img" />
        <h1 className='services_top_heading'>Our Services</h1>
        <p className='services_top_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit ad suscipit laudantium, 
            maxime earum quo tempora expli
             eum! Doloremque, perspiciatis in.</p>
        </center>
        <div className="services_box2">
            {databox2.map((item,index)=>{
                return(<div className="services_icon_box" key={index}>
                    <img className='services_b0x2_icon_img' src={require("../home/banner5/iconsimg/"+item.img)} alt="img" />
                    <p>{item.p}<br/>{item.p2}</p></div>)
            })}
        </div>
        <center className="why_chose_box">
        <h3>Why Choose Us?</h3>
        <h1>Problems We Defeated</h1>
        <p>vero deserunt hic accusamus ducimus debitis culpa blanditiis 
            nihil iure consequuntur et, quae molestias placeat. Esse minima amet enim minus dolore.
        </p>
        </center>
        <Servicesbox3 />
        </div>
        <Footer/>
        </>
        
    )
  }

  const databox3a=[
    
    {img1:"stock.png" ,h1:"Investment|Finacials",p1:"We provide with a digital platform that match workers to jobs and match consumers to services. The platform has a worker-facing side and consumer-facing side.",
    img2:"search.png" ,h2:"Gig Platform",p2:"We provide with a digital platform that match workers to jobs and match consumers to services. The platform has a worker-facing side and consumer-facing side."},
    {img1:"brain.png" ,h1:"AI/ML",p1:"Fori applies deep technological expertise in machine learning and artificial intelligence development services to help clients deliver personalization and customer convenience at scale. Our R&D capabilities and artificial intelligence software development for rapid prototyping and custom machine learning solutions empower clients to tap into unseen market segments, become more efficient, and achieve measurable business outcomes.",
    img2:"meeting.png" ,h2:"Board|Advisory",p2:"We accelerate startups by rapid designing, development & deployment of end-end technologies for impact focused startups. Fori also provides digital transformations and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team, Fori has you covered. "},
    {img1:"hexagon.png" ,h1:"Propriety Alogrithms",p1:"We accelerate startups by rapid designing, development & deployment of end-end technologies for impact focused startups. Fori also provides digital transformations and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team, Fori has you covered. ",
    img2:"cloud.png" ,h2:"Cloud|Analytics",p2:"We offer comprehensive Data Management and Analytics solutions across various verticals in information management, data governance and advanced analytics that can unleash organizational potential by helping the organizations make informed decision making and leveraging the organization’s most valuable data assets to increase stakeholder value."},
   

      ]
function Servicesbox3 (){
    return(
    <div className='services_box3' >
    {databox3a.map((item,index)=>{
    return(
        <div key={index}>
        <div className="services_box3a"  > 
            <div className='services_box3a_img-d-background'><div className='services_box3_img-d'> <img className='services_box3_img' src={require("../home/banner5/iconsimg/"+item.img1)} alt="img" /></div></div>
            <div className='sercices_box3b_headingpara_a' key={index}>
            <h4 className='sercices_box3b_heading_a'>{item.h1}</h4>
                        <p className='sercices_box3b_para_a'>{item.p1}
                            </p>
                        </div>
        </div>
        <div className="services_box3b"key={index+20}  > 
                     <div className='sercices_box3b_headingpara_b'>
                        <h4 className='sercices_box3b_heading_a'>{item.h2}</h4>
                        <p className='sercices_box3b_para_a'>{item.p2}</p>
                        </div>
                        <div className='services_box3b_img-d-background'> <div className='services_box3_img-d'> <img className='services_box3_img' src={require("../home/banner5/iconsimg/"+item.img2)} alt="img" /></div></div>
        </div>
        </div>  
    )
})}
</div>)
}
  export default Services;
  export {Servicesbox3};