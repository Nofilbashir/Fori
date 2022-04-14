import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend,Tooltip, ResponsiveContainer } from 'recharts';
import "./linechart.css";


export default class Example extends PureComponent {
  

  render() {
    return (
        <div className="linegraphresponsive" >
                   <div><text x="0" y="100" fill="red" style={{transform: "rotateZ(-90deg)",
    transformOrigin:" 3% 49%",fontSize:"1rem"}}>Carbon Dioxide (Billion Tons)</text></div>
      <ResponsiveContainer >
        <AreaChart
        title="Chart of PU x UV"
        className='areachart'
          data={this.props.data}
          width={2500}
          height={500}
          margin={{
            top: 5,
            right: 15,
            left: 5,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name"/>
          <YAxis 
             dataKey="Carbon_Emissions_Saved"   />
          <Tooltip />
          <Area type="line" dataKey="Carbon_Emissions_Saved" stroke="red" strokeWidth={5}  fill="#e01212" dot={{r:4,fill:"#e21212"}} />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

