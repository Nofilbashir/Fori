import React from "react";
import Banner1 from './banner1/banner1';
import Banner2 from './banner2/banner2';
import Banner3 from './banner3/banner3';
import Banner4 from './banner4/banner4';
import Banner5 from './banner5/banner5';
import Banner6 from './banner6/banner6';
import Banner7 from './banner7/banner7';
import Footer from "../footer/footer"
function Home (){
    return(
        <div>

       <Banner1/>
       <Banner2 />
       <Banner3/>
       <Banner4 />
       <Banner5 />
       <Banner6 />
       <Banner7 />
       <Footer />

       </div>
    )
}
export default Home;