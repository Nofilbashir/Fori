import {React,useEffect,useState} from 'react'
import Linegraph from '../linechart/linegraph';
import "./cal_box4.css";

var perYearsaving;
function Cla_box4() {
    const [renderGraph,setrenderGraph]=useState(false);
    const[ perDaysaving,setPerdaysaving]=useState(0);
    const countries=[{country:"Select Your Country",emmission:0},{country:"Norway",emmission:0.131},{country:"Pakistan",emmission:3},{country:"China",emmission:5}]
    // const datab4=[{id:1,title:"Diesel",img:"./images/diesel1.png",color:"purple",var1:5},{id:2,title:"Petrol",img:"./images/petrol1.png",color:"brown",var1:6},{id:3,title:"Hybrid",img:"./images/hybrid1.png",color:"orangered",var1:4}]
    const[userinput,setUserinput]=useState({country:"Select Your Country",kms:""});
    const [data,setData] =useState([])
    function userData(e){
        const inputName=e.target.name;
        const input=e.target.value;
        setUserinput({...userinput,[inputName]:input})

        
    }
    useEffect(() => {
        let obj = countries.find(obj => obj.country ===userinput.country);
        // console.log(obj,"aaaaaaaaaaaaaa")
        setPerdaysaving(userinput.kms*obj.emmission)

      },[userinput]);
      function submit(e){
        e.preventDefault();
        // setUserinput({...userinput,kms:""})
        console.log(perDaysaving,"day saving")
        setrenderGraph(true)
        perYearsaving=perDaysaving*365;
        console.log(perYearsaving,"year saving")
        const [year1,year2,year3,year4,year5]=[perYearsaving,perYearsaving*2,perYearsaving*3,perYearsaving*4,perYearsaving*5]
         return setData( [
            {name: 'Year 1',Carbon_Emissions_Saved:year1},
            {name: 'Year 2',Carbon_Emissions_Saved: year2},
            {name: 'Year 3',Carbon_Emissions_Saved:year3},
            {name: 'Year 4',Carbon_Emissions_Saved: year4},
            {name: 'Year 5',Carbon_Emissions_Saved: year5}
          ]);
  
        

    }

    return (
        <>
    <div className='cal_box4'>
        <h3>Calculate your own impact</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur porro nesciunt similique pariatur praesentium necessitatibus dolor recusandae debitis veniam optio reiciendis fugit excepturi sint eveniet deserunt, fuga omnis quidem.</p>
        <div className="b4_c1">
                       
        <form className='b4_b1_left' onSubmit={submit}>
            <div className="b4_left_b1">
            <div className="countryselector">
                <h4>Select Your Region</h4>
                {/* <label htmlFor="country">Choose your country:</label> */}
                <select name="country" id="country" autofous={0} onChange={userData}>
                    {countries.map((obj,index)=>{
                        return(<option key={index} value={obj.country} className="country_option">{obj.country}</option>)
                    })}
                </select>
                <br/><br/>
          </div>
          <div className="kmsshared">
              <h4>Enter Daily Shared Kms! </h4>
              <input type="kms" name="kms" id="kms" placeholder="Enter kms" className="f_name" value={userinput.kms} onChange={userData} />
          </div>
          </div>
          <button type="submit">Calculate Your Impact</button>
        </form>
        {renderGraph?
          <div className="b4_b1_right">
            <hr />
                <h4>you saved {perDaysaving} Kg carbon dioxide in a day</h4> 
            <hr />
          <div className="b4_lineGraph"><Linegraph data={data}/></div>
      </div>

        :null}
        </div>
    </div>
    </>
  )
}

export default Cla_box4;



//   <div className="dynamicLineGraph">
//             <h4>you saved {perDaysaving} % carbon dioxide in a day</h4>
//                 <div className="b4_lineGraph">
//                   <Linegraph data={data}/>
//                   </div>
//         </div>












