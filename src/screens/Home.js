import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
const  Home =()=>{

    return(
        <div>
       <Navbar>
       </Navbar>
<Carousel>

</Carousel>
<div className="m-3">
<Card/><Card/><Card/><Card/><Card/><Card/><Card/>
</div>

 <Footer>

 </Footer>
  </div>
    )
}
export default Home;