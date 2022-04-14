import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Passenger Cars', value: 41,color:"#2f0051"},
  { name: 'Comercial Cars', value:12,color:"#59088d"},
  { name: 'Aviation', value: 8,color:"#ffa20c"},
  { name: 'Shipping & rai', value: 14,color:"#8c0000"},
  { name: 'Trucks', value: 25,color:"#fb0000"}
];
// const COLORS = ['', '', '', '',''];


export default class Example extends PureComponent {

  render() {
    return (
        <div className="piechartresponsive" style={{width:"50%",height:230}}>
        <ResponsiveContainer>
      <PieChart onMouseEnter={this.onPieEnter}>
        <Pie

     

          data={data}
          innerRadius="50%"
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
export {data};
