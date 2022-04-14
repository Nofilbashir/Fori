import React from 'react'
import "./cal_box2.css"
const Cal_box2 = () => {


// DaTA
const data =[{ id:1,img:"./image/diesel1.png", info:"Percentage of Diesel Vehicles",title:"Diesel"},{ id:2,img:"./image/petrol1.png",info:"Percentage of Petrol Vehicles",title:"Petrol" },{id:3,img:"./image/hybrid1.png",info:"Percentage of Hybrid Vehicles",title:"Hybrid"}]




const datab2c3b1=[{id:1,title:"Diesel",desc:"15 D/100"},{id:2,title:"Petrol",desc:"15 P/100"},{id:3,title:"Hybrid",desc:"15 H/100"}]
const datab2c3b2=[{id:1,title:"Diesel",desc:"15 D/100 x 45",result:"6.75 D"},{id:2,title:"Petrol",desc:"15 P/100 x 45",result:"6.75 P"},{id:3,title:"Hybrid",desc:"15 H/100 x 45",result:"6.75 H"}]
return(
  <div className="box2">
    <h5>Percentage contribution of each type of vehicle</h5>
    <div className="box2_img">
    {data.map((obj)=>{
        return(
          <div className='box2_oneimg' key ={obj.id}>
            <div className="percentimage">
          <img src={require(`${obj.img}`)} alt="img"></img>
          </div>
          <p className={`b2_c3_b1${obj.title}`}>{obj.info}</p>
          </div>)})
    }
    </div>
    <div className="b2_c3">
      <p>A single shared EV reduces up to 15 private cars from the road.Some of them will be diesel others will be petrol and hybrid,
         depending upon their percentages. Reduced vehicles from each type:
      </p>
      <div className="b2_c3_b1">
      {datab2c3b1.map((obj,index)=>{return(<div className='b2_c3_b1_childs' key={index}><h6 className={`b2_c3_b1${obj.title}`}>{obj.title}</h6><p>{obj.desc}</p></div>)})}
      </div>
      <p>A single vehicle travels 45 kms on average in a day. Shared electric vehicles has to cover yhe distance of these reduced
        15 cars which is <br/>Daily average distance of shared EV = 45 <br/>Distance of Reduced 15 cars = 45 x 15.<br/> <br/> Total Reduced distance = 45 + (45 x 15) = 720 kms <br/><br/> Reduced distance of each type wil be:
      </p>
      <div className="b2_c3_b2">
      {datab2c3b2.map((obj,index)=>{return (<div className='b2_c3_b1_childs' key={index}><h6 className={`b2_c3_b1${obj.title}`}>{obj.title}</h6><p>{obj.desc}</p><p className={`b2_c3_b1${obj.title}`}>{obj.result}</p></div>)})}
      </div>
      <p>For diesel vehicles, fuel economy is 14.7 kms/L and for petrol this figure is 14.8 kms/L <a href='https://www.racfoundation.org/media-centre/average-new-car-driven-28-miles-per-day#:~:text=Average%20new%20car%20driven%2028%20miles%20per%20day28%20Apr%202020&text=The%20newest%20cars%20in%20Great,of%2028%20miles%20per%20day'>[8]</a>. So, diesel vehicles will emit 2.6391/14.7 = 0.179 grams of <CO/>,
         petrol vehicles will emit 2.3035/14.8 = 0.156 grams of <CO/> and hybrid vehicles will emit<br/> 2.3035/21.23 = 0.108 grams of <CO/> in one kilometre.
      </p>
      <p>We can Calculate the impact of one shared electric vehicle for a day if it travels 720 kms as: </p>
      <h6 className='b2_equation'>6.75 [ (0.179) D +(0.156) P + (0.108) H ]</h6>
    </div>
 
 
  </div>
)
}

function CO (){
   return <span className='CO2'>CO<sub className='CO2'>2</sub></span>
}

export default Cal_box2;