import React from "react";
import "./expertise.css"
import{RiStarSFill} from "react-icons/ri"
function Expertise(){
    const databox3a=[
        
        {img1:"stock.png" ,h1:"Investment|Finacials",p1:"We provide with a digital platform that match workers to jobs and match consumers to services. The platform has a worker-facing side and consumer-facing side.",
        img2:"search.png" ,h2:"Gig Platform",p2:"We provide with a digital platform that match workers to jobs and match consumers to services. The platform has a worker-facing side and consumer-facing side."},
        {img1:"brain.png" ,h1:"AI/ML",p1:"Fori applies deep technological expertise in machine learning and artificial intelligence development services to help clients deliver personalization and customer convenience at scale. Our R&D capabilities and artificial intelligence software development for rapid prototyping and custom machine learning solutions empower clients to tap into unseen market segments, become more efficient, and achieve measurable business outcomes. Fori strives to delight customers and augment businesses by delivering AI software solutions and machine learning development services.",
        img2:"meeting.png" ,h2:"Board|Advisory",p2:"We accelerate startups by rapid designing, development & deployment of end-end technologies for impact focused startups. Fori also provides digital transformations and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team, Fori has you covered. "},
        {img1:"hexagon.png" ,h1:"Propriety Alogrithms",p1:"We accelerate startups by rapid designing, development & deployment of end-end technologies for impact focused startups. Fori also provides digital transformations and creates sustainable, smarter, and safer communities. If you are looking for a fully outsourced team, Fori has you covered. ",
        img2:"cloud.png" ,h2:"Cloud|Analytics",p2:"We offer comprehensive Data Management and Analytics solutions across various verticals in information management, data governance and advanced analytics that can unleash organizational potential by helping the organizations make informed decision making and leveraging the organization’s most valuable data assets to increase stakeholder value. We help our clients in deciding which data management and analytics method to employ to achieve their business goals."},
        {img1:"ideabulb.png" ,h1:"Design Thinking WorkShops",p1:"Our Fori workforce offers technological solutions for all your requirements and helps you achieve your business outcomes. With several customized and innovative content delivery solutions, we aim to improve and transform your business value and operational efficiency.",
        img2:"house.png" ,h2:"Prop Technologies",p2:"Our Fori workforce offers technological solutions for all your requirements and helps you achieve your business outcomes. With several customized and innovative content delivery solutions, we aim to improve and transform your business value and operational efficiency."},
        {img1:"car.png" ,h1:"Mobility Solutions",p1:"Business mobility solutions will help your business to rapidly enhance management through mobile devices with improved security and data accuracy. It will take your business to a whole new generation of technology. It will increase the overall productivity of your business without compromising anything for the security and ultimately lead to success. Real-time data analytics with mobility solutions will lead to better decision making for the business.",
        img2:"setting.png" ,h2:"DevOps",p2:"Fori has successfully developed and implemented multiple software solutions for a diverse range of clients in the mobility sector. Through our team of experienced and highly qualified software engineers, we provide innovative software services to many organizations, thus empowering them to acquire the best value from their technology investment. We provide a market-tested and accepted one-stop customized software solution for all the asset types of our clients in the mobility sector."}

      ]
return(
    <>
    <div className="expertise-page">
    <center >
        <div className="expertise_main_icon">
            <div className="person_icon"><img src={require("./user.png") } alt="img"/> </div>
           <div className="three_star_div">
              <RiStarSFill className="three_star"/>
             <RiStarSFill className="three_star"/>
             <RiStarSFill className="three_star"/>
             </div>
        </div>

    <h1 className="expertise_main_heading">Our Expertise</h1>
    <div className="p_div">
        <p className="expertise_main_para">We accelerate startups by rapid designing,
     development & deployment of end-end technologies for impact focused startups.
      Fori also provides digital transformations and creates sustainable, smarter, and safer communities.
       If you are looking for a fully outsourced team, Fori has you covered. 

        </p>
    </div>
    </center>
    <div className='expertise_box1'>
    {databox3a.map((item,index)=>{
    return(
        <>
        <div className="services_box3a" > 
            <div className='services_box3a_img-d-background'><div className='services_box3_img-d'> <img className='services_box3_img' src={require("../home/banner5/iconsimg/"+item.img1)} alt="img" /></div></div>
            <div className='sercices_box3b_headingpara_a' key={index}>
            <h4 className='sercices_box3b_heading_a'>{item.h1}</h4>
                        <text className='sercices_box3b_para_a'>{item.p1}
                            </text>
                        </div>
        </div>
        <div className="services_box3b" > 
                     <div className='sercices_box3b_headingpara_b'key={index+10}>
                        <h4 className='sercices_box3b_heading_a's>{item.h2}</h4>
                        <text className='sercices_box3b_para_a'>{item.p2}</text>
                        </div>
                        <div className='services_box3b_img-d-background'> <div className='services_box3_img-d'> <img className='services_box3_img' src={require("../home/banner5/iconsimg/"+item.img2)} alt="img" /></div></div>
        </div>
        </>  
    )
})}
    </div>
    </div>
        <div className="copyright">
            <p>@Copyright reserved</p>
    </div>
    </>
)
}
export default Expertise;